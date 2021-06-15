import React from 'react'
import { MobileSushiNavigation } from './MobileSushiNavigation'
import SushiSwipers from './SushiSwipers'
import Grow from '@material-ui/core/Grow'
import { SushiLinearProgress } from './SushiLinearProgress'
import { trDuration } from './SushiContainer'
import { useMediaQuery } from '@material-ui/core'
import { queries } from '../../helpers'

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

const desktopMenuButton = (key, title, currentImgKey, changeImage) => {
  return (
    <button
      key={key + 'btn'}
      className={`fill_button ${currentImgKey === key ? 'active' : ''}`}
      onClick={() => changeImage(key)}>
      {title.toUpperCase()}
    </button>
  )
}

const CreateMenuButtons = React.memo(
  ({ siteMode, sushiElems, currentImgKey, changeImage }) => {
    return sushiElems[siteMode].map(item =>
      desktopMenuButton(item[0], item[1], currentImgKey, changeImage)
    )
  }
)

const Sushi = ({
  sushiElems,
  currentImgKey,
  changeImage,
  // menuButtons,
  imgVisible,
  progressBar,
  siteMode,
}) => {
  let mobileQ = useMediaQuery(queries.mobile)
  let desktopQ = useMediaQuery(queries.desktop)

  return (
    <>
      {desktopQ && (
        <div
          style={{ paddingRight: '0' }}
          className='sushi_page content__gridLeftItem--1fr'>
          <div className={`sushi_page__menuButtons `}>
            <CreateMenuButtons
              siteMode={siteMode}
              sushiElems={sushiElems}
              currentImgKey={currentImgKey}
              changeImage={changeImage}
            />
            {/* {menuButtons} */}
          </div>
        </div>
      )}

      <div className='sushi_page content__gridRightItem--3fr'>
        {mobileQ && (
          <div className='sushi_menu_xs'>
            <MobileSushiNavigation
              currentImgKey={currentImgKey}
              changeImage={changeImage}
              defaultSushiArr={sushiElems.default}
            />
          </div>
        )}

        {/* {desktopQ && (
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
