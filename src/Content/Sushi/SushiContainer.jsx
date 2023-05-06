import { useEffect, useState, useCallback, useRef } from 'react'
import Sushi from './Sushi'
import { delay } from '../../helpers'
import { preloadImg, sushiElems } from './sushiHelpers'

// Grow animation time variable
export let trDuration = 0

const SushiContainer = ({ siteMode, mobileQ, desktopQ }) => {
  const currentImgKey = useRef('sushi')
  const [currentImgK, switchImg] = useState('sushi')
  const [imgVisible, switchVisibility] = useState(true)
  const [progressBar, showProgressBar] = useState(false)
  const imgPreloaded = useRef(false)

  function fadeOutHandler(key) {
    return new Promise(res => {
      switchVisibility(false)

      delay(trDuration).then(() => {
        currentImgKey.current = key
        if (!imgPreloaded.current) {
          showProgressBar(true)
        }
        res()
      })
    })
  }

  // Counts how much time changeImage called
  const funcCalled = useRef(0)

  const changeImage = useCallback(async key => {
    if (currentImgKey.current !== key) {
      funcCalled.current += 1
      await Promise.all([fadeOutHandler(key), preloadImg(key, imgPreloaded)])
      imgPreloaded.current = false
      if (funcCalled.current > 1) {
        funcCalled.current -= 1
      } else {
        showProgressBar(false)
        switchVisibility(true)
        funcCalled.current -= 1
      }
    }
  }, [])

  const changeTableContent = useCallback(
    key => {
      if (key !== currentImgK) {
        switchVisibility(false)
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
      changeImage('sushi')
    }
  }, [siteMode, changeImage])

  // Grow should not animate on first render
  useEffect(() => {
    trDuration = 300
    return () => {
      trDuration = 0
    }
  }, [])

  return (
    <Sushi
      sushiElems={sushiElems}
      currentImgKey={currentImgKey.current}
      // currentImgKey={currentImgK}
      changeImage={changeImage}
      siteMode={siteMode}
      imgVisible={imgVisible}
      progressBar={progressBar}
      mobileQ={mobileQ}
      desktopQ={desktopQ}
    />
  )
}

export default SushiContainer
