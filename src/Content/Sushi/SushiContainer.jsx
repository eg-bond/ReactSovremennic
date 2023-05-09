import { useEffect, useState, useCallback, useRef } from 'react'
import Sushi from './Sushi'
import { sushiElems } from './sushiHelpers'
import useTimeout from '../../hooks'

// animation duration
export let trDuration = 200

const SushiContainer = ({ siteMode, mobileQ, desktopQ }) => {
  const currentImgKey = useRef('sushi')
  const [currentImgK, switchImg] = useState('sushi')
  const [imgVisible, switchVisibility] = useState(true)
  const [progressBar, showProgressBar] = useState(false)

  // function fadeOutHandler(key) {
  //   return new Promise(res => {
  //     switchVisibility(false)

  //     delay(trDuration).then(() => {
  //       currentImgKey.current = key
  //       if (!imgPreloaded.current) {
  //         showProgressBar(true)
  //       }
  //       res()
  //     })
  //   })
  // }

  // // Counts how much time changeImage called
  // const funcCalled = useRef(0)

  // const changeImage = useCallback(async key => {
  //   if (currentImgKey.current !== key) {
  //     funcCalled.current += 1
  //     await Promise.all([fadeOutHandler(key), preloadImg(key, imgPreloaded)])
  //     imgPreloaded.current = false
  //     if (funcCalled.current > 1) {
  //       funcCalled.current -= 1
  //     } else {
  //       showProgressBar(false)
  //       switchVisibility(true)
  //       funcCalled.current -= 1
  //     }
  //   }
  // }, [])
  const { clear: clearPBTimeout, reset: resetPBTimeout } = useTimeout(
    () => showProgressBar(true),
    trDuration * 2
  )

  // Set progressBar timeout at first render
  useEffect(() => {
    resetPBTimeout()
  }, [])

  const changeTableContent = useCallback(
    key => {
      if (key !== currentImgK) {
        switchVisibility(false)
        resetPBTimeout()
        setTimeout(() => {
          switchImg(key)
          switchVisibility(true)
        }, trDuration)
      }
    },
    [currentImgK, switchImg]
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
      mobileQ={mobileQ}
      desktopQ={desktopQ}
      clearPBTimeout={clearPBTimeout}
    />
  )
}

export default SushiContainer
