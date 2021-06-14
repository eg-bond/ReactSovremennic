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

const desktopMenuButton = (key, title, currentImgKey, changeImage) => {
  return (
    <button
      key={key}
      className={`fill_button ${currentImgKey === key ? 'active' : ''}`}
      onClick={() => changeImage(key)}>
      {title.toUpperCase()}
    </button>
  )
}

// Длительность анимации Grow
export const trDuration = 250

const SushiContainer = ({ siteMode }) => {
  const [currentImgKey, setCurrentImg] = useState('sushi')
  const [imgVisible, switchVisibility] = useState(true)
  const [menuButtons, setButtons] = useState([])
  const [progressBar, showProgressBar] = useState(false)

  const createMenuButtons = () => {
    return sushiElems[siteMode].map(item =>
      desktopMenuButton(item[0], item[1], currentImgKey, changeImage)
    )
  }

  const preloadImg = imgKey => {
    let key
    sushiElems.swiperKeys.includes(imgKey)
      ? (key = imgKey + '1')
      : (key = imgKey)

    return new Promise(res => {
      let img = new window.Image()
      img.src = `./Images/sushi/${key}.gif`
      img.onload = () => res()
    })
  }

  function fadeOutHandler(key) {
    return new Promise(res => {
      switchVisibility(false)
      delay(trDuration).then(() => {
        setCurrentImg(key)
        showProgressBar(true)
        res()
      })
    })
  }

  // Счетчик вызванных функций changeImage
  const funcCalled = useRef(0)

  async function changeImage(key) {
    if (currentImgKey !== key) {
      funcCalled.current += 1
      await Promise.all([fadeOutHandler(key), preloadImg(key)])

      if (funcCalled.current > 1) {
        funcCalled.current -= 1
      } else {
        showProgressBar(false)
        switchVisibility(true)
        funcCalled.current -= 1
      }
    }
  }

  useEffect(() => {
    setButtons(createMenuButtons())
  }, [currentImgKey])

  useEffect(() => {
    setButtons(createMenuButtons())
    setCurrentImg('sushi')
  }, [siteMode])

  return (
    <Sushi
      sushiElems={sushiElems}
      currentImgKey={currentImgKey}
      changeImage={changeImage}
      menuButtons={menuButtons}
      siteMode={siteMode}
      imgVisible={imgVisible}
      progressBar={progressBar}
    />
  )
}

export default SushiContainer
