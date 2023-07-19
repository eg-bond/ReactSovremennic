import { useEffect, useState, useCallback } from 'react'
import Sushi from './Sushi'
import { trDuration } from './sushiHelpers'
import type { SushiT } from './sushiT'
import { useTimeout } from '../../hooks/useTimeout'

const SushiContainer = ({ isMobile }: { isMobile: boolean }) => {
  const [currentImgKey, switchImg] = useState(
    'sushi' as SushiT['currentImgKey']
  )
  const [imgVisible, switchVisibility] = useState(true)
  const [progressBar, showProgressBar] = useState(false)

  // progress bar
  const { clear: clearPBTimeout, reset: resetPBTimeout } = useTimeout(
    () => showProgressBar(true),
    trDuration * 2
  )

  // triggers then image loaded
  const onLoad = useCallback(() => {
    showProgressBar(false)
    clearPBTimeout()
    switchVisibility(true)
  }, [])

  // Set progressBar timeout at first render
  useEffect(() => {
    resetPBTimeout()
  }, [])

  const changeTableContent = useCallback(
    (key: SushiT['currentImgKey']) => {
      if (key !== currentImgKey) {
        switchVisibility(false)
        resetPBTimeout()
        setTimeout(() => {
          switchImg(key)
        }, trDuration)
      }
    },
    [currentImgKey, switchImg, resetPBTimeout]
  )

  return (
    <Sushi
      currentImgKey={currentImgKey}
      imgVisible={imgVisible}
      isMobile={isMobile}
      progressBar={progressBar}
      changeImage={changeTableContent}
      onLoad={onLoad}
    />
  )
}

export default SushiContainer
