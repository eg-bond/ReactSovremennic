import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Modal, Nav, NavItem } from 'react-bootstrap'
import HotDishesSwiper from './HotDishesSwiper'
import Media from 'react-media'
import BrandRollsSwiper from './BrandRollsSwiper'
import { queries } from '../../helpers'

const swiperArr = ['brand_rolls', 'hot_dishes']
const defaultSushiArr = [
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
]
const specialSushiArr = [
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
]

function SushiModal({ sushiImageChange, activeKey }) {
  let [show, setShow] = useState(false)
  const handleClose = (key) => {
    sushiImageChange(key)
    setShow(false)
  }

  const handleShow = () => setShow(true)

  return (
    <div className='modal-container'>
      <button onClick={handleShow} className='seans_button_xs '>
        <span className='seans_button_xs__title'>Меню</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Меню</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav bsStyle='tabs' className='seans-tab-xs sushi-tab-xs' stacked>
            {defaultSushiArr.map((d) => (
              <NavItem
                className={activeKey === d[0] && 'active'}
                key={d[0]}
                eventKey={d[0]}
                onClick={() => handleClose(d[0])}
              >
                {d[1]}
              </NavItem>
            ))}
          </Nav>
        </Modal.Body>
      </Modal>
    </div>
  )
}

const Sushi = ({ themeCl, siteMode }) => {
  let [activeKey, setActiveKey] = useState('sushi')
  let [focusReg, switchFocusReg] = useState('focusNone')
  let [opacityCl, switchOpacityCl] = useState('opacity_1')

  const SushiContentWrapper = (props) => (
    <div className={`sushi_page__content`} style={{ paddingBottom: '30px' }}>
      {props.children}
    </div>
  )

  const firstSushiImage = (key) => (
    <SushiContentWrapper>
      <div className='sushiEmptyImg'>
        <img
          className='sushiFirstImg'
          src={`./Images/sushi/${key}.gif`}
          alt='sushi'
        />
      </div>
      xd
    </SushiContentWrapper>
  )

  const sushiElem = (key) => (
    <SushiContentWrapper>
      <div>
        <img
          className={'sushi__page__img'}
          src={`./Images/sushi/${key}.gif`}
          alt={key}
        />
      </div>
    </SushiContentWrapper>
  )

  const swiperSushiElem = (key) => (
    <SushiContentWrapper>
      {key === 'brand_rolls' ? <BrandRollsSwiper /> : <HotDishesSwiper />}
    </SushiContentWrapper>
  )

  let delay = (ms) => {
    return new Promise((res) => setTimeout(() => res(), ms))
  }

  const desktopMenuItem = (key, title) => (
    <button
      key={key}
      className={activeKey === key ? 'active' : ''}
      onClick={() => sushiImageChange(key)}
    >
      {title}
    </button>
  )

  async function sushiImageChange(key) {
    if (key !== activeKey) {
      switchOpacityCl('opacity_0')
      await delay(180)
      setActiveKey(key)
      await delay(50)
      switchOpacityCl('opacity_1')
    }
  }

  return (
    <div>
      {/*<ScrollToTop/>*/}
      <div className='sushi_page'>
        <div>
          <Media query={queries.mobile}>
            <div className='sushi_menu_xs padding_15xs'>
              <SushiModal
                activeKey={activeKey}
                sushiImageChange={sushiImageChange}
              />
            </div>
          </Media>

          <Media query={queries.desktop}>
            <div className='col-lg-3 col-md-3 col-sm-3'>
              <div
                className={`sushi_page__menuButtons ${
                  siteMode === 'special' ? themeCl.navs : ''
                }`}
              >
                {siteMode === 'default'
                  ? defaultSushiArr.map((item) =>
                      desktopMenuItem(item[0], item[1])
                    )
                  : specialSushiArr.map((item) =>
                      desktopMenuItem(item[0], item[1])
                    )}
              </div>
            </div>
          </Media>

          <div className='col-lg-9 col-md-9 col-sm-9'>
            <Media query={queries.desktop}>
              <div className={`sushiAdv sushiAdv--1 ${focusReg}`}>
                <a
                  href='http://www.region47.sbor.net/'
                  onFocus={() => switchFocusReg('focusUp')}
                  onBlur={() => switchFocusReg('focusNone')}
                >
                  <img src='./Images/region47_wide.gif' alt='region47' />
                </a>
              </div>
            </Media>

            <div className={`${opacityCl}`}>
              {activeKey === 'sushi'
                ? firstSushiImage(activeKey)
                : swiperArr.includes(activeKey)
                ? swiperSushiElem(activeKey)
                : sushiElem(activeKey)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sushi
