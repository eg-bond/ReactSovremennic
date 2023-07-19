import { MobileSushiNavigation } from './SushiComponents/MobileSushiNavigation'
import { SushiLinearProgress } from './SushiLinearProgress'
import type { SushiT } from './sushiT'
import CreateMenuButtons from './SushiComponents/CreateMenuButtons'
import SushiImage from './SushiComponents/SushiImage'
import { SushiWork, SushiWorkModal } from '../../Template/SushiWork'

const Sushi = ({
  currentImgKey,
  changeImage,
  imgVisible,
  progressBar,
  isMobile,
  onLoad,
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
          <SushiWorkModal />
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
            onLoad={onLoad}
          />
        </div>

        <div className='separatorMobile separatorMobile--index' />
        {isMobile && <SushiWork />}
      </div>
    </>
  )
}

export default Sushi
