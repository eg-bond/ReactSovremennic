import { useRef } from 'react';
import SushiItems from './SushiComponents/SushiItems';
import CreateMenuButtons from './SushiComponents/CreateMenuButtons';
import { SushiWork, SushiWorkModal } from '../../Template/SushiWork';
import { SushiMobileNavContainer } from './SushiComponents/SushiMobileNavContainer';
import type { SushiT } from './sushiT';

const Sushi = ({
  currentImgKey,
  isMobile,
  changeImage,
}: SushiT) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {!isMobile && (
        <div className="sushi_page content__gridLeftItem--1fr">
          <div className={`sushi_page__menuButtons `}>
            <CreateMenuButtons
              changeImage={changeImage}
              currentImgKey={currentImgKey}
            />
          </div>
          <SushiWorkModal />
        </div>
      )}

      <div className="sushi_page content__gridRightItem--3fr">
        {isMobile && (
          <SushiMobileNavContainer
            changeImage={changeImage}
            contentRef={contentRef}
            currentImgKey={currentImgKey}
          />
        )}

        <div className="sushi_page__content" ref={contentRef}>
          <SushiItems currentImgKey={currentImgKey} />
        </div>

        <div className="separatorMobile separatorMobile--index" />
        {isMobile && <SushiWork />}
      </div>
    </>
  );
};

export default Sushi;
