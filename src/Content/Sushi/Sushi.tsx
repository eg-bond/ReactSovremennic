import { memo } from 'react'
import { MobileSushiNavigation } from './MobileSushiNavigation'
import SushiSliders from './SushiSliders'
import { SushiLinearProgress } from './SushiLinearProgress'
import { sushiImgSrc } from './sushiHelpers'
import type { CMB_T, SushiImageT, SushiT } from './sushiT'

const SushiImage = memo<SushiImageT>(function SushiImage({
  currentImgKey,
  swiperKeys,
  imgVisible,
  showProgressBar,
  clearPBTimeout,
}) {
  const onLoad = () => {
    showProgressBar(false)
    clearPBTimeout()
  }
  //@ts-ignore
  if (swiperKeys.includes(currentImgKey)) {
    return (
      <SushiSliders
        swiperKey={currentImgKey}
        imgVisible={imgVisible}
        onLoad={onLoad}
      />
    )
  }

  return (
    <div className={`${imgVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
      <img
        onLoad={onLoad}
        className={'sushi__page__img'}
        src={sushiImgSrc(currentImgKey)}
        alt={currentImgKey}
        key={currentImgKey}
      />
    </div>
  )
})

const desktopMenuButton = (
  key: SushiT['currentImgKey'],
  title: string,
  currentImgKey: SushiT['currentImgKey'],
  changeImage: SushiT['changeImage']
) => {
  return (
    <button
      key={key + 'btn'}
      className={`fill_button ${currentImgKey === key ? 'active' : ''}`}
      onClick={() => changeImage(key)}>
      {title.toUpperCase()}
    </button>
  )
}

const CreateMenuButtons = memo<CMB_T>(function CreateMenuButtons({
  siteMode,
  sushiElems,
  currentImgKey,
  changeImage,
}) {
  return sushiElems[siteMode].map(item =>
    desktopMenuButton(item[0], item[1], currentImgKey, changeImage)
  )
})

const Sushi = ({
  sushiElems,
  currentImgKey,
  changeImage,
  imgVisible,
  progressBar,
  siteMode,
  isMobile,
  showProgressBar,
  clearPBTimeout,
}: SushiT) => {
  return (
    <>
      {!isMobile && (
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
        {isMobile && (
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
            showProgressBar={showProgressBar}
            clearPBTimeout={clearPBTimeout}
          />
        </div>
      </div>
    </>
  )
}

export default Sushi
