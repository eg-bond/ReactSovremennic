import { useState, useCallback } from 'react'
import Sushi from './Sushi'
import type { SushiT } from './sushiT'

const SushiContainer = ({ isMobile }: { isMobile: boolean }) => {
  const [currentImgKey, switchImg] = useState(
    'sushi' as SushiT['currentImgKey']
  )

  const changeTableContent = useCallback(
    (key: SushiT['currentImgKey']) => {
      switchImg(key)
    },
    [switchImg]
  )

  return (
    <Sushi
      currentImgKey={currentImgKey}
      isMobile={isMobile}
      changeImage={changeTableContent}
    />
  )
}

export default SushiContainer
