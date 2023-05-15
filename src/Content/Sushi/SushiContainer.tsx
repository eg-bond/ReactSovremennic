import { useEffect, useState, useCallback, useRef } from 'react'
import Sushi from './Sushi'
import { sushiElems, trDuration } from './sushiHelpers'
import useTimeout from '../../hooks'
import { useAppSelector } from '../../REDUX/store'

const SushiContainer = ({ isMobile }: { isMobile: boolean }) => {
  const { siteMode } = useAppSelector(state => state.special)

  const currentImgKey = useRef('sushi')
  const [currentImgK, switchImg] = useState('sushi')
  const [imgVisible, switchVisibility] = useState(true)
  const [progressBar, showProgressBar] = useState(false)

  const { clear: clearPBTimeout, reset: resetPBTimeout } = useTimeout(
    () => showProgressBar(true),
    trDuration * 2
  )

  // Set progressBar timeout at first render
  useEffect(() => {
    resetPBTimeout()
  }, [])

  const changeTableContent = useCallback(
    (key: string) => {
      if (key !== currentImgK) {
        switchVisibility(false)
        resetPBTimeout()
        setTimeout(() => {
          switchImg(key)
          switchVisibility(true)
        }, trDuration)
      }
    },
    [currentImgK, switchImg, resetPBTimeout]
  )

  // Switches to default sushi img if siteMode was changed while swiper images was active
  useEffect(() => {
    if (sushiElems.allPossibleSwiperKeys.includes(currentImgKey.current)) {
      changeTableContent('sushi')
    }
  }, [siteMode, changeTableContent])

  return (
    <Sushi
      sushiElems={sushiElems}
      currentImgKey={currentImgK}
      changeImage={changeTableContent}
      showProgressBar={showProgressBar}
      siteMode={siteMode}
      imgVisible={imgVisible}
      progressBar={progressBar}
      isMobile={isMobile}
      clearPBTimeout={clearPBTimeout}
    />
  )
}

export default SushiContainer
