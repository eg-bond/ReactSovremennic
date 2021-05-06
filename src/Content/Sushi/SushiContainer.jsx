import React, { useEffect, useState } from 'react'
import Sushi from './Sushi'

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

const desktopMenuButton = (key, title, activeKey, hideImg) => {
  return (
    <button
      key={key}
      className={activeKey === key ? 'active' : ''}
      onClick={() => hideImg(key)}>
      {title}
    </button>
  )
}

const delay = ms => {
  return new Promise(res => setTimeout(() => res(), ms))
}

const SushiContainer = ({ Q, siteMode, themeCl }) => {
  const [activeKey, setActiveKey] = useState('sushi')
  const [opacityCl, switchOpacityCl] = useState('opacity_0')
  const [menuButtons, setButtons] = useState([])

  const createMenuButtons = () => {
    return sushiElems[siteMode].map(item =>
      desktopMenuButton(item[0], item[1], activeKey, hideImg)
    )
  }

  async function hideImg(key) {
    if (activeKey !== key) {
      switchOpacityCl('opacity_0')
      await delay(200)
      setActiveKey(key)
    }
  }
  const showImg = () => {
    switchOpacityCl('opacity_1')
  }

  useEffect(() => {
    setButtons(createMenuButtons())
  }, [activeKey])

  useEffect(() => {
    setButtons(createMenuButtons())
    setActiveKey('sushi')
  }, [siteMode])

  return (
    <div>
      <Sushi
        sushiElems={sushiElems}
        opacityCl={opacityCl}
        Q={Q}
        activeKey={activeKey}
        hideImg={hideImg}
        showImg={showImg}
        menuButtons={menuButtons}
        siteMode={siteMode}
        themeCl={themeCl}
      />
    </div>
  )
}

export default SushiContainer
