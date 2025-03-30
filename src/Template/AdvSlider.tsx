import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useImagesLoaded } from '../hooks/useImagesLoaded';

const KaraokeSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => (
  <SplideSlide>
    <a
      className="linkWrapper"
      href="https://vk.com/sushikinno"
      tabIndex={2}
    >
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="караоке"
          src="Images/karaoke.webp"
          onLoad={onLoad}
        />
      </div>
    </a>
  </SplideSlide>
);

const GlamoramaSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => (
  <SplideSlide>

    <a
      className="linkWrapper"
      href="https://vk.com/away.php?to=https%3A%2F%2Fafisha.nethouse.ru%2Fevent%2Fglamorama&utf=1"
      tabIndex={2}
    >
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition  ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="гламорама"
          src="Images/glamorama.webp"
          onLoad={onLoad}
        />
      </div>
    </a>
  </SplideSlide>
);

const AdvSlider = memo(function BarSlider() {
  const { allImgLoaded, onLoad } = useImagesLoaded(2);
  return (
    <Splide
      options={{
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        // direction: 'rtl',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
      }}
      className="advSlider"
    >
      <GlamoramaSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
      <KaraokeSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
    </Splide>
  );
});
export default AdvSlider;
