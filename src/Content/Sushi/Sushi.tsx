import { MobileSushiNavigation } from './SushiComponents/MobileSushiNavigation'
import type { SushiT } from './sushiT'
import CreateMenuButtons from './SushiComponents/CreateMenuButtons'
import SushiItems from './SushiComponents/SushiItems'
import { SushiWork, SushiWorkModal } from '../../Template/SushiWork'
import SushiSliders from './SushiComponents/SushiSliders'

const Sushi = ({ currentImgKey, isMobile, changeImage }: SushiT) => {
  return (
    <>
      {!isMobile && (
        <div className='sushi_page content__gridLeftItem--1fr'>
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
        {/* {isMobile && (
          <div className='sushi_menu_xs'>
            <MobileSushiNavigation
              currentImgKey={currentImgKey}
              changeImage={changeImage}
            />
          </div>
        )} */}
        <SushiSliders currentImgKey={currentImgKey} changeImage={changeImage} />
        <SushiItems currentImgKey={currentImgKey} />

        <div className='separatorMobile separatorMobile--index' />
        {isMobile && <SushiWork />}
      </div>
    </>
  )
}

export default Sushi
