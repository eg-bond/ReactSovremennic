import { memo } from 'react';
import { SUSHI_BAR_URL } from '@/utils/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// const BarSliderSlide = ({ slideKey }: {
//   slideKey: string;
// }) => {
//   return (
//     <SplideSlide key={slideKey}>
//       <div className="imgContainer_16na9">
//         <img
//           srcSet={`Images/kombo/${slideKey}_sm.webp 500w,
//                    Images/kombo/${slideKey}_md.webp 680w,
//                    Images/kombo/${slideKey}_lg.webp 1920w`}
//           alt={slideKey}
//           className="imgContainer__img transition"
//           src={`Images/kombo/${slideKey}_lg.webp`}
//         />
//       </div>
//     </SplideSlide>
//   );
// };

const DeliverySlide = ({ slideKey }: {
  slideKey: string;
}) => {
  return (
    <SplideSlide key={slideKey}>
      <div className="imgContainer_16na9">
        <a href={SUSHI_BAR_URL} rel="noopener noreferrer" target="_blank">
          <img
            alt={slideKey}
            className="imgContainer__img transition"
            src={`Images/kombo/${slideKey}.webp`}
          />
        </a>
      </div>
    </SplideSlide>
  );
};

const slideKeys = ['sushi_delivery'];

const BarSlider = memo(function BarSlider() {
  return (
    <Splide
      options={{
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        // delivery -----------
        drag: false,
        // bar ----------------
        // type: 'loop',
        // direction: 'rtl',
        // autoplay: true,
        // interval: 3500,
        // pauseOnHover: true,
      }}
      className="barSlider"
    >
      {slideKeys.map(key => (
        <DeliverySlide key={key} slideKey={key} />
      ))}
    </Splide>
  );
});
export default BarSlider;
