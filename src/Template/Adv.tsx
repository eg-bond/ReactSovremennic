import { memo } from 'react';
import { useMatch } from 'react-router-dom';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import { SushiWorkModal } from './SushiWork';
import AdvSlider from './AdvSlider';

const AdvContent = memo(function AdvContent() {
  const { allImgLoaded, onLoad } = useImagesLoaded(2);

  return (
    <div className='content__gridRightItem--1fr contentMT'>
      <SushiWorkModal loaded={allImgLoaded} onLoad={onLoad} />
      <AdvSlider />
      <div
        className={`desktopAdv desktopAdv--2 ${
          !allImgLoaded ? 'skeleton' : ''
        }`}>
        <img
          onLoad={onLoad}
          src='Images/jsb1.gif'
          alt='Подарочный сертификат'
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
