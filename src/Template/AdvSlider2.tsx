import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useImagesLoaded } from '../hooks/useImagesLoaded';

const SushiSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => (
  <SplideSlide>
    <Link className="linkWrapper" tabIndex={2} to="/sushi">
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="бар"
          src="Images/sushi_adv.webp"
          onLoad={onLoad}
        />
      </div>
    </Link>
  </SplideSlide>
);

const SpringSalesSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => (
  <SplideSlide>
    <Link className="linkWrapper" tabIndex={2} to="/sushi">
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="весенние скидки"
          src="Images/spring_sales.webp"
          onLoad={onLoad}
        />
      </div>
    </Link>
  </SplideSlide>
);

const LottenSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => (
  <SplideSlide>
    <a className="linkWrapper" href="https://lotten.ru" tabIndex={2}>
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition  ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="lotten кадастровые услуги"
          src="Images/lotten_adv.webp"
          onLoad={onLoad}
        />
      </div>
    </a>
  </SplideSlide>
);

const AdvSlider2 = memo(function BarSlider() {
  const { allImgLoaded, onLoad } = useImagesLoaded(3);
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
        interval: 3000,
        pauseOnHover: true,
      }}
      className="advSlider"
    >
      <LottenSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
      <SushiSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
      <SpringSalesSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
    </Splide>
  );
});
export default AdvSlider2;
