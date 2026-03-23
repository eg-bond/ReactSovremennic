import { memo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import * as s from './BarSliderNew.css';

const slideKeys = ['kombo1', 'kombo2'];

const BarSliderNew = memo(function BarSliderNew() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: 'ltr' },
    [Autoplay({ delay: 3500, stopOnMouseEnter: true, stopOnInteraction: false })],
  );

  return (
    <div className={s.viewport} ref={emblaRef}>
      <div className={s.track}>
        {slideKeys.map(key => (
          <div className={s.slide} key={key}>
            <img
              srcSet={`Images/kombo/${key}_sm.webp 500w,
                       Images/kombo/${key}_md.webp 680w,
                       Images/kombo/${key}_lg.webp 1920w`}
              alt={key}
              className={`swSlide__img ${s.img}`}
              src={`Images/kombo/${key}_lg.webp`}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default BarSliderNew;
