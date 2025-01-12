import { memo } from 'react';
import { useMatch } from 'react-router-dom';
import AdvSlider from './AdvSlider';
import { SushiWorkModal } from './SushiWork';
import { useImagesLoaded } from '../hooks/useImagesLoaded';

const AdvContent = memo(function AdvContent() {
  const { allImgLoaded, onLoad } = useImagesLoaded(2);

  return (
    <div className="content__gridRightItem--1fr contentMT">
      <AdvSlider />
      <SushiWorkModal loaded={allImgLoaded} onLoad={onLoad} />
      <div
        className={`desktopAdv desktopAdv--2 ${
          !allImgLoaded ? 'skeleton' : ''
        }`}
      >
        <img
          alt="Подарочный сертификат"
          src="Images/jsb1.gif"
          onLoad={onLoad}
        />
      </div>
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
