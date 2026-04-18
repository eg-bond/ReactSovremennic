import { memo } from 'react';
import { Splide } from '@splidejs/react-splide';

interface IAdvSlider {
  drag?: boolean;
  interval?: number;
  slides: (() => JSX.Element)[];
  type?: 'loop' | 'fade' | 'slide';
}

export const AdvSlider = memo<IAdvSlider>(
  function AdvSlider({
    slides,
    interval,
    type = 'loop',
    drag = true,
  }) {
    return (
      <Splide
        options={{
          perPage: 1,
          perMove: 1,
          pagination: false,
          arrows: false,
          type,
          drag,
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
