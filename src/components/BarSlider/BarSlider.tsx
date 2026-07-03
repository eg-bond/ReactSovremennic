import { memo } from 'react';
// import Autoplay from 'embla-carousel-autoplay';
import { SUSHI_BAR_URL } from '@/utils/constants';
// import useEmblaCarousel from 'embla-carousel-react';
import * as s from './BarSlider.css';

// const slideKeys = ['kombo1', 'kombo2'];

// export const BarSlider = memo(function BarSlider() {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, direction: 'ltr' },
//     [Autoplay({ delay: 3500, stopOnMouseEnter: true, stopOnInteraction: false })],
//   );

//   return (
//     <div className={s.viewport} ref={emblaRef}>
//       <div className={s.track}>
//         {slideKeys.map(key => (
//           <div className={s.slide} key={key}>
//             <img
//               srcSet={`/Images/kombo/${key}_sm.webp 500w,
//                        /Images/kombo/${key}_md.webp 680w,
//                        /Images/kombo/${key}_lg.webp 1920w`}

//               alt={key}
//               className={`swSlide__img ${s.img}`}
//               src={`/Images/kombo/${key}_lg.webp`}

//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });

export const BarSlider = memo(function BarSlider() {
  return (
    <div className={s.viewport}>
      <div className={s.track}>
        <div className={s.slide}>
          <a
            className={s.link}
            href={SUSHI_BAR_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="Суши доставка"
              className={s.img}
              src="/Images/kombo/sushi_delivery.webp"
            />
          </a>
        </div>
      </div>
    </div>
  );
});
