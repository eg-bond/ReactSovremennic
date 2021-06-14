import React from 'react'
import { MobileSushiNavigation } from './MobileSushiNavigation'
import SushiSwipers from './SushiSwipers'
import Grow from '@material-ui/core/Grow'
import { SushiLinearProgress } from './SushiLinearProgress'
import { trDuration } from './SushiContainer'

const SushiImage = ({ currentImgKey, swiperKeys, imgVisible }) => {
  if (swiperKeys.includes(currentImgKey)) {
    return <SushiSwipers swiperKey={currentImgKey} imgVisible={imgVisible} />
  }
  return (
    <Grow in={imgVisible} timeout={trDuration}>
      <img
        className={'sushi__page__img'}
        src={`./Images/sushi/${currentImgKey}.gif`}
        alt={currentImgKey}
      />
    </Grow>
  )
}

const Sushi = ({
  Q,
  sushiElems,
  currentImgKey,
  changeImage,
  menuButtons,
  imgVisible,
  progressBar,
}) => {
  return (
    <>
      {Q.desktop && (
        <div
          style={{ paddingRight: '0' }}
          className='sushi_page content__gridLeftItem--1fr'>
          <div className={`sushi_page__menuButtons `}>{menuButtons}</div>
        </div>
      )}

      <div className='sushi_page content__gridRightItem--3fr'>
        {Q.mobile && (
          <div className='sushi_menu_xs'>
            <MobileSushiNavigation
              currentImgKey={currentImgKey}
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

        <div className={`sushi_page__content`}>
          {progressBar && <SushiLinearProgress />}
          <SushiImage
            currentImgKey={currentImgKey}
            swiperKeys={sushiElems.swiperKeys}
            imgVisible={imgVisible}
          />
        </div>
      </div>
    </>
  )
}

export default Sushi
