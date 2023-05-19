import { MobileSushiNavigation } from './SushiComponents/MobileSushiNavigation'
import { SushiLinearProgress } from './SushiLinearProgress'
import type { SushiT } from './sushiT'
import CreateMenuButtons from './SushiComponents/CreateMenuButtons'
import SushiImage from './SushiComponents/SushiImage'

const Sushi = ({
  currentImgKey,
  changeImage,
  imgVisible,
  progressBar,
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
            />
          </div>
        )}

        <div className={`sushi_page__content`}>
          {progressBar && <SushiLinearProgress />}
          <SushiImage
            currentImgKey={currentImgKey}
            imgVisible={imgVisible}
            clearPBTimeout={clearPBTimeout}
            showProgressBar={showProgressBar}
          />
        </div>
      </div>
    </>
  )
}

export default Sushi
