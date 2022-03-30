import React, { useEffect, useState, useCallback, useRef } from 'react'
import Sushi from './Sushi'
import { delay } from '../../helpers'
import { preloadImg, sushiElems } from './preload'

// Grow animation time variable
export let trDuration = 0

const SushiContainer = ({ siteMode }) => {
  const currentImgKey = useRef('new')
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

  // Switches to default sushi img if siteMode was changed while on of the swiper images was active
  useEffect(() => {
    sushiElems.allPossibleSwiperKeys.includes(currentImgKey.current) &&
      changeImage('new')
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
      changeImage={changeImage}
      siteMode={siteMode}
      imgVisible={imgVisible}
      progressBar={progressBar}
    />
  )
}

export default SushiContainer
