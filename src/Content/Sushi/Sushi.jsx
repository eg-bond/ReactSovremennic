import React from 'react'
import { MobileSushiNavigation, SushiModal } from './MobileSushiNavigation'
import SushiSwipers from './SushiSwipers'
import Grow from '@material-ui/core/Grow'
import { SushiLinearProgress } from './SushiLinearProgress'

const SushiImage = ({ imageKey, swiperKeys, imgVisible }) => {
  if (swiperKeys.includes(imageKey)) {
    return <SushiSwipers swiperKey={imageKey} imgVisible={imgVisible} />
  }
  return (
    <Grow in={imgVisible} timeout={250}>
      <img
        className={'sushi__page__img'}
        src={require(`../../images/sushi/${imageKey}.gif`)}
        alt={imageKey}
      />
    </Grow>
  )
}

const Sushi = ({
  Q,
  sushiElems,
  imageKey,
  changeImage,
  menuButtons,
  siteMode,
  themeCl,
  imgVisible,
  progressBar,
}) => {
  console.log('render')
  return (
    <div className='sushi_page'>
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
              imageKey={imageKey}
              changeImage={changeImage}
              defaultSushiArr={sushiElems.default}
            />
          </div>
        )}

        {/* {Q.desktop && (
              <a className={'linkWrapper'} href='http://www.region47.sbor.net/'>
                <div className={'sushiAdv sushiAdv--1'}>
                  <img src='./Images/region47_wide.gif' alt='region47' />
                </div>
              </a>
            )} */}

        <div
          className={`sushi_page__content`}
          style={{ paddingBottom: '30px' }}>
          {progressBar && <SushiLinearProgress />}
          <SushiImage
            imageKey={imageKey}
            swiperKeys={sushiElems.swiperKeys}
            imgVisible={imgVisible}
          />
        </div>
      </div>
    </div>
  )
}

export default Sushi
