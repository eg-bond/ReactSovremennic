import { Hidden } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
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
  console.log('button render')
  return (
    <button
      key={key}
      className={activeKey === key ? 'active' : ''}
      onClick={() => hideImg(key)}>
      {title}
    </button>
  )
}

// const defaultMenuButtons = () => {
//   sushiElems.default.map(item => desktopMenuButton(item[0], item[1]))
// }

const SushiContainer = ({ Q }) => {
  const [activeKey, setActiveKey] = useState('sushi')
  const [opacityCl, switchOpacityCl] = useState('opacity_1')

  const delay = ms => {
    return new Promise(res => setTimeout(() => res(), ms))
  }

  const defaultMenuButtons = useCallback(() => {
    console.log('defButtonsCreated')
    return sushiElems.default.map(item =>
      desktopMenuButton(item[0], item[1], activeKey, hideImg)
    )
  }, [])

  // async function sushiImageChange(key) {
  //   if (key !== activeKey) {
  //     switchOpacityCl('opacity_0')
  //     await delay(200)
  //     setActiveKey(key)
  //     switchOpacityCl('opacity_1')
  //   }
  // }

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

  console.log('conainer render')

  return (
    <div>
      <Sushi
        sushiElems={sushiElems}
        // sushiImageChange={sushiImageChange}
        opacityCl={opacityCl}
        Q={Q}
        activeKey={activeKey}
        hideImg={hideImg}
        showImg={showImg}
        defaultButtons={defaultMenuButtons()}
      />
    </div>
  )
}

export default SushiContainer
