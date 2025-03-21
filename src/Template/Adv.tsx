import { memo } from 'react';
import { useMatch } from 'react-router-dom';
import AdvSlider from './AdvSlider';
import { SushiWorkModal } from './SushiWork';
import { useImagesLoaded } from '../hooks/useImagesLoaded';

const AdvContent = memo(function AdvContent() {
  const { allImgLoaded, onLoad } = useImagesLoaded(2);

  return (
    <div className="content__gridRightItem--1fr contentMT">
      <a href="https://vk.com/sushikinno">
        <div
          className={`desktopAdv opacity_on_hover ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          style={{ paddingBottom: '130%' }}
        >
          <img
            alt="DJ Сергей Рунов 22 марта"
            src="Images/runov.webp"
            onLoad={onLoad}
          />
        </div>
      </a>
      <SushiWorkModal loaded={allImgLoaded} onLoad={onLoad} />
      <AdvSlider />
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
