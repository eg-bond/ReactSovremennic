import React from 'react'
import { MobileSushiNavigation, SushiModal } from './MobileSushiNavigation'
import SushiSwipers from './SushiSwipers'

const SushiImage = ({ activeKey, showImg, swiperKeys }) => {
  // prettier-ignore
  if (swiperKeys.includes(activeKey)) {
    return <SushiSwipers swiperKey={activeKey} showImg={showImg}/>
  }
  return (
    <img
      onLoad={showImg}
      className={'sushi__page__img'}
      src={require(`../../images/sushi/${activeKey}.gif`)}
      // src={`./Images/sushi/${activeKey}.gif`}
      alt={activeKey}
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
  siteMode,
  themeCl,
}) => {
  return (
    <>
      <div className='sushi_page'>
        <div>
          {Q.desktop && (
            <div
              style={{ paddingRight: '0' }}
              className='col-lg-3 col-md-3 col-sm-3'>
              <div
                className={`sushi_page__menuButtons ${
                  siteMode === 'special' ? themeCl.navs : ''
                }`}>
                {menuButtons}
              </div>
            </div>
          )}

          <div className='col-lg-9 col-md-9 col-sm-9'>
            {Q.mobile && (
              <div className='sushi_menu_xs'>
                <MobileSushiNavigation
                  activeKey={activeKey}
                  hideImg={hideImg}
                  defaultSushiArr={sushiElems.default}
                />
              </div>
            )}

            {Q.desktop && (
              <a className={'linkWrapper'} href='http://www.region47.sbor.net/'>
                <div className={'sushiAdv sushiAdv--1'}>
                  <img src='./Images/region47_wide.gif' alt='region47' />
                </div>
              </a>
            )}

            <div
              className={`${opacityCl} sushi_page__content`}
              style={{ paddingBottom: '30px' }}>
              <SushiImage
                activeKey={activeKey}
                showImg={showImg}
                swiperKeys={sushiElems.swiperKeys}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sushi
