import React, { useEffect, useState } from 'react'
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

const desktopMenuButton = (key, title, imageKey, changeImage) => {
  return (
    <button
      key={key}
      className={`fill_button ${imageKey === key ? 'active' : ''}`}
      onClick={() => changeImage(key)}>
      {title.toUpperCase()}
    </button>
  )
}

const SushiContainer = ({ Q, siteMode, themeCl }) => {
  const [imageKey, setImageKey] = useState('sushi')
  const [imgVisible, switchVisibility] = useState(true)
  const [menuButtons, setButtons] = useState([])

  const createMenuButtons = () => {
    return sushiElems[siteMode].map(item =>
      desktopMenuButton(item[0], item[1], imageKey, changeImage)
    )
  }

  const preloadImg = imgKey => {
    let key
    imgKey === 'brand_rolls'
      ? (key = 'brand_rolls1')
      : imgKey === 'hot_dishes'
      ? (key = 'hot_dishes1')
      : (key = imgKey)

    return new Promise(res => {
      let img = new window.Image()
      img.src = require(`../../images/sushi/${key}.gif`)
      img.onload = () => res()
    })
  }

  function fadeoutHandler(key) {
    return new Promise(res => {
      switchVisibility(false)
      delay(250).then(() => {
        setImageKey(key)
        res()
      })
    })
  }

  async function changeImage(key) {
    if (imageKey !== key) {
      await Promise.all([fadeoutHandler(key), preloadImg(key)])
      switchVisibility(true)
    }
  }

  useEffect(() => {
    setButtons(createMenuButtons())
  }, [imageKey])

  useEffect(() => {
    setButtons(createMenuButtons())
    setImageKey('sushi')
  }, [siteMode])

  return (
    <div>
      <Sushi
        sushiElems={sushiElems}
        Q={Q}
        imageKey={imageKey}
        changeImage={changeImage}
        menuButtons={menuButtons}
        siteMode={siteMode}
        themeCl={themeCl}
        imgVisible={imgVisible}
      />
    </div>
  )
}

export default SushiContainer
