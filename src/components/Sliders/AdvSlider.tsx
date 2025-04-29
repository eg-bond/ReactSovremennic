import { memo } from 'react';
import { Splide } from '@splidejs/react-splide';

interface IAdvSlider {
  interval?: number;
  slides: (() => JSX.Element)[];
  type?: 'loop' | 'fade' | 'slide';
}

export const AdvSlider = memo<IAdvSlider>(
  function AdvSlider({
    slides,
    interval,
    type,
  }) {
    return (
      <Splide
        options={{
          perPage: 1,
          perMove: 1,
          pagination: false,
          arrows: false,
          type: type || 'loop',
          autoplay: true,
          interval: interval || 4000,
          pauseOnHover: true,
        }}
        className="advSlider"
      >
        {slides.map((Slide, i) => <Slide key={i} />)}
      </Splide>
    );
  },
);
