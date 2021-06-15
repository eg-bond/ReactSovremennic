import React, { useEffect, useState, useCallback, useRef } from 'react'
import Sushi from './Sushi'
import { delay } from '../../helpers'

const sushiElems = {
  default: [
    ['sushi', 'Суши'],
    ['rolls', 'Роллы'],
    ['black_rolls', 'Цветные/черные роллы'],
    ['hot_rolls', 'Запеченые роллы'],
    ['brand_rolls', 'Фирменные роллы'],
    ['mini_rolls', 'Мини-роллы'],
    ['sets', 'Наборы'],
    ['salads', 'Салаты'],
    ['soups', 'Супы'],
    ['hot_dishes', 'Горячие блюда'],
    ['garnish', 'Гарниры'],
    ['dessert', 'Десерты'],
    ['gruzia', 'Грузинская кухня'],
    ['pizza', 'Пицца'],
  ],
  special: [
    ['sushi', 'Суши'],
    ['rolls', 'Роллы'],
    ['black_rolls', 'Цветные/черные роллы'],
    ['hot_rolls', 'Запеченые роллы'],
    ['brand_rolls1', 'Фирменные роллы 1'],
    ['brand_rolls2', 'Фирменные роллы 2'],
    ['brand_rolls3', 'Фирменные роллы 3'],
    ['mini_rolls', 'Мини-роллы'],
    ['sets', 'Наборы'],
    ['salads', 'Салаты'],
    ['soups', 'Супы'],
    ['hot_dishes1', 'Горячие блюда 1'],
    ['hot_dishes2', 'Горячие блюда 2'],
    ['hot_dishes3', 'Горячие блюда 3'],
    ['hot_dishes4', 'Горячие блюда 4'],
    ['garnish', 'Гарниры'],
    ['dessert', 'Десерты'],
    ['gruzia', 'Грузинская кухня'],
    ['pizza', 'Пицца'],
  ],
  swiperKeys: ['brand_rolls', 'hot_dishes'],
}

// Длительность анимации Grow
export const trDuration = 300

const SushiContainer = ({ siteMode }) => {
  const currentImgKey = useRef('sushi')
  const [imgVisible, switchVisibility] = useState(true)
  const [progressBar, showProgressBar] = useState(false)
  const imgPreloaded = useRef(false)

  const preloadImg = imgKey => {
    let key
    sushiElems.swiperKeys.includes(imgKey)
      ? (key = imgKey + '1')
      : (key = imgKey)

    return new Promise(res => {
      let img = new window.Image()
      img.src = `./Images/sushi/${key}.gif`
      img.onload = () => {
        imgPreloaded.current = true
        res()
      }
    })
  }

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

  // Счетчик вызванных функций changeImage
  const funcCalled = useRef(0)

  const changeImage = useCallback(async key => {
    if (currentImgKey.current !== key) {
      funcCalled.current += 1
      await Promise.all([fadeOutHandler(key), preloadImg(key)])
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

  useEffect(() => {
    currentImgKey.current !== 'sushi' && changeImage('sushi')
  }, [siteMode])

  return (
    <Sushi
      sushiElems={sushiElems}
      currentImgKey={currentImgKey.current}
      changeImage={changeImage}
      siteMode={siteMode}
      imgVisible={imgVisible}
      progressBar={progressBar}
      siteMode={siteMode}
    />
  )
}

export default SushiContainer
