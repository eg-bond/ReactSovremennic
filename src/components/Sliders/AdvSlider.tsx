import { memo } from 'react';
import { Splide } from '@splidejs/react-splide';

interface IAdvSlider {
  slides: (() => JSX.Element)[];
}

export const AdvSlider = memo<IAdvSlider>(
  function AdvSlider({ slides }) {
    return (
      <Splide
        options={{
          perPage: 1,
          perMove: 1,
          pagination: false,
          arrows: false,
          type: 'loop',
          autoplay: true,
          interval: 3500,
          pauseOnHover: true,
        }}
        className="advSlider"
      >
        {slides.map((Slide, i) => <Slide key={i} />)}
      </Splide>
    );
  });
