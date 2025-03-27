import { memo } from 'react';
import { useMatch } from 'react-router-dom';
import AdvSlider from './AdvSlider';
import AdvSlider2 from './AdvSlider2';
import { SushiWorkModal } from './SushiWork';
import { useImagesLoaded } from '../hooks/useImagesLoaded';

const AdvContent = memo(function AdvContent() {
  const { allImgLoaded, onLoad } = useImagesLoaded(1);

  return (
    <div className="content__gridRightItem--1fr contentMT">
      <SushiWorkModal loaded={allImgLoaded} onLoad={onLoad} />
      <AdvSlider />
      <AdvSlider2 />
      {/* <div
        className={`desktopAdv desktopAdv--2 ${
          !allImgLoaded ? 'skeleton' : ''
        }`}
      >
        <img
          alt="Подарочный сертификат"
          src="Images/jsb1.gif"
          onLoad={onLoad}
        />
      </div> */}
    </div>
  );
});

function Adv() {
  const matchSushi = useMatch({ path: 'sushi' });

  if (!matchSushi) {
    return <AdvContent />;
  }
  return null;
}

export default Adv;
