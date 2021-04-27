import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HotDishesSwiper from './HotDishesSwiper'
import BrandRollsSwiper from './BrandRollsSwiper'
import { useSpecialContext } from '../../SpecialContext'
import { SushiModal } from './SushiModal'

const firstSushiImage = showImg => (
  <div className='sushiEmptyImg'>
    <img
      style={{ backgroundColor: 'white' }}
      onLoad={showImg}
      className='sushiFirstImg'
      src={`./Images/sushi/sushi.gif`}
      alt='sushi'
    />
  </div>
)

const sushiImage = (key, showImg) => (
  <img
    onLoad={showImg}
    className={'sushi__page__img'}
    src={`./Images/sushi/${key}.gif`}
    alt={key}
  />
)

const swiperSushiImage = (key, showImg) =>
  key === 'brand_rolls' ? (
    <BrandRollsSwiper showImg={showImg} />
  ) : (
    <HotDishesSwiper showImg={showImg} />
  )

const Sushi = ({
  Q,
  sushiElems,
  sushiImageChange,
  opacityCl,
  activeKey,
  hideImg,
  showImg,
}) => {
  const { themeCl, siteMode } = useSpecialContext()
  let [focusCl, switchFocusCl] = useState('focusNone')

  const desktopMenuButton = (key, title, activeKey) => {
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

  const DesktopButtons = () => {
    return (
      <>
        {Q.desktop && (
          <div className='col-lg-3 col-md-3 col-sm-3'>
            <div
              className={`sushi_page__menuButtons ${
                siteMode === 'special' ? themeCl.navs : ''
              }`}>
              {siteMode === 'default'
                ? sushiElems.default.map(item =>
                    desktopMenuButton(item[0], item[1], activeKey)
                  )
                : sushiElems.special.map(item =>
                    desktopMenuButton(item[0], item[1], activeKey)
                  )}
            </div>
          </div>
        )}
      </>
    )
  }

  const currentImage = (activeKey, showImg) => {
    // activeKey === 'sushi'
    //   ? firstSushiImage(showImg)
    //   : sushiElems.swiperKeys.includes(activeKey)
    //   ? swiperSushiImage(activeKey, showImg)
    //   : sushiImage(activeKey, showImg)
  }

  return (
    <>
      {/*<ScrollToTop/>*/}
      <div className='sushi_page'>
        <div>
          {Q.mobile && (
            <div className='sushi_menu_xs padding_15xs'>
              <SushiModal
                activeKey={activeKey}
                sushiImageChange={sushiImageChange}
                defaultSushiArr={sushiElems.default}
              />
            </div>
          )}

          {/* {Q.desktop && (
            <div className='col-lg-3 col-md-3 col-sm-3'>
              <div
                className={`sushi_page__menuButtons ${
                  siteMode === 'special' ? themeCl.navs : ''
                }`}>
                {siteMode === 'default'
                  ? sushiElems.default.map(item =>
                      desktopMenuButton(item[0], item[1])
                    )
                  : sushiElems.special.map(item =>
                      desktopMenuButton(item[0], item[1])
                    )}
              </div>
            </div>
          )} */}
          <DesktopButtons />

          <div className='col-lg-9 col-md-9 col-sm-9'>
            {Q.desktop && (
              <div className={`sushiAdv sushiAdv--1 ${focusCl}`}>
                <a
                  href='http://www.region47.sbor.net/'
                  onFocus={() => switchFocusCl('focusUp')}
                  onBlur={() => switchFocusCl('focusNone')}>
                  <img src='./Images/region47_wide.gif' alt='region47' />
                </a>
              </div>
            )}

            <div
              className={`${opacityCl} sushi_page__content`}
              style={{ paddingBottom: '30px' }}>
              {activeKey === 'sushi'
                ? firstSushiImage(showImg)
                : sushiElems.swiperKeys.includes(activeKey)
                ? swiperSushiImage(activeKey, showImg)
                : sushiImage(activeKey, showImg)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sushi
