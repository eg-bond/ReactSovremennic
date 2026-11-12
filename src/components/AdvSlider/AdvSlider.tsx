import { memo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import * as s from './AdvSlider.css';

interface IAdvSlider {
  aspectRatio?: '2/3' | '16/9';
  interval?: number;
  slides: (() => JSX.Element)[];
  type?: 'loop' | 'fade' | 'slide';
}

export const AdvSlider = memo<IAdvSlider>(
  function AdvSlider({
    slides,
    interval,
    type,
    aspectRatio = '2/3',
  }) {
    const [emblaRef] = useEmblaCarousel(
      {
        loop: type !== 'fade',
        slidesToScroll: 1,
      },
      [Autoplay({ delay: interval || 4000, stopOnMouseEnter: true, stopOnInteraction: false })],
    );

    return (
      <div
        className={`${s.advSlider} ${aspectRatio === '16/9' ? s.advSliderWide : ''} embla`}
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((Slide, i) => (
            <div className="embla__slide" key={i}>
              <Slide />
            </div>
          ))}
        </div>
      </div>
    );
  },
);
