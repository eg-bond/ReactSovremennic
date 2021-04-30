import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HotDishesSwiper from './HotDishesSwiper'
import BrandRollsSwiper from './BrandRollsSwiper'
import { useSpecialContext } from '../../SpecialContext'
import { SushiModal } from './SushiModal'

const sushiImage = (key, showImg, swiperKeys) => {
  // prettier-ignore
  if (swiperKeys.includes(key)) {    
    return key === 'brand_rolls'
      ? <BrandRollsSwiper showImg={showImg} />
      : <HotDishesSwiper showImg={showImg} />
  }
  return (
    <img
      onLoad={showImg}
      className={'sushi__page__img'}
      src={`./Images/sushi/${key}.gif`}
      alt={key}
    />
  )
}

const Sushi = ({
  Q,
  sushiElems,
  opacityCl,
  activeKey,
  hideImg,
  showImg,
  menuButtons,
}) => {
  const { themeCl, siteMode } = useSpecialContext()
  const [focusCl, switchFocusCl] = useState('focusNone')

  return (
    <>
      {/*<ScrollToTop/>*/}
      <div className='sushi_page'>
        <div>
          {Q.mobile && (
            <div className='sushi_menu_xs padding_15xs'>
              <SushiModal
                activeKey={activeKey}
                hideImg={hideImg}
                defaultSushiArr={sushiElems.default}
              />
            </div>
          )}

          {Q.desktop && (
            <div className='col-lg-3 col-md-3 col-sm-3'>
              <div
                className={`sushi_page__menuButtons ${
                  siteMode === 'special' ? themeCl.navs : ''
                }`}>
                {menuButtons}
              </div>
            </div>
          )}

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
              {sushiImage(activeKey, showImg, sushiElems.swiperKeys)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sushi
