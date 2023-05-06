import React from 'react'
import { MobileSushiNavigation } from './MobileSushiNavigation'
import SushiSwipers from './SushiSwipers'
import Grow from '@material-ui/core/Grow'
import { SushiLinearProgress } from './SushiLinearProgress'
import { trDuration } from './SushiContainer'
import { sushiImgSrc } from './sushiHelpers'

const SushiImage = React.memo(function SushiImage({
  currentImgKey,
  swiperKeys,
  imgVisible,
}) {
  if (swiperKeys.includes(currentImgKey)) {
    return <SushiSwipers swiperKey={currentImgKey} imgVisible={imgVisible} />
  }
  return (
    <Grow in={imgVisible} timeout={trDuration}>
      {/* <div className='sushi__page_img_cont'> */}
      <div className={imgVisible ? 'opacity_1' : 'opacity_0'}>
        <img
          className={'sushi__page__img'}
          src={sushiImgSrc(currentImgKey)}
          alt={currentImgKey}
          key={currentImgKey}
        />
      </div>
    </Grow>
  )
})

const desktopMenuButton = (key, title, currentImgKey, changeImage) => {
  return (
    <button
      data-testid={key}
      key={key + 'btn'}
      className={`fill_button ${currentImgKey === key ? 'active' : ''}`}
      onClick={() => changeImage(key)}>
      {title.toUpperCase()}
    </button>
  )
}

const CreateMenuButtons = React.memo(
  ({ siteMode, sushiElems, currentImgKey, changeImage }) =>
    sushiElems[siteMode].map(item =>
      desktopMenuButton(item[0], item[1], currentImgKey, changeImage)
    )
)

const Sushi = ({
  sushiElems,
  currentImgKey,
  changeImage,
  imgVisible,
  progressBar,
  siteMode,
  mobileQ,
  desktopQ,
}) => {
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
