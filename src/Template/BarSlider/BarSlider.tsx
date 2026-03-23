import { memo } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import * as s from './BarSlider.css';

const BarSliderSlide = ({ slideKey }: {
  slideKey: string;
}) => {
  return (
    <SplideSlide key={slideKey}>
      <div className={s.imgContainer16x9}>
        <img
          srcSet={`Images/kombo/${slideKey}_sm.webp 500w,
                   Images/kombo/${slideKey}_md.webp 680w,
                   Images/kombo/${slideKey}_lg.webp 1920w`}
          alt={slideKey}
          className={`swSlide__img ${s.imgContainerImg}`}
          src={`Images/kombo/${slideKey}_lg.webp`}
        />
      </div>
    </SplideSlide>
  );
};

const slideKeys = ['kombo1', 'kombo2'];

const BarSlider = memo(function BarSlider() {
  return (
    <Splide
      options={{
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        direction: 'rtl',
        autoplay: true,
        interval: 3500,
        pauseOnHover: true,
      }}
      className={s.barSlider}
    >
      {slideKeys.map(key => (
        <BarSliderSlide key={key} slideKey={key} />
      ))}
    </Splide>
  );
});

export default BarSlider;
