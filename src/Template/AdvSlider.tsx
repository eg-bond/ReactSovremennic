import { memo, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useImagesLoaded } from '../hooks/useImagesLoaded';

// const Slide = ({
//   allImgLoaded,
//   onLoad,
//   img_name,
//   alt,
// }: {
//   allImgLoaded: boolean;
//   alt: string;
//   img_name: string;
//   onLoad: () => void;
// }) => (
//   <SplideSlide>
//     <a className="linkWrapper" href="https://vk.com/sushikinno" tabIndex={2}>
//       <div className="imgContainer opacity_on_hover">
//         <img
//           className={`imgContainer__img transition ${
//             !allImgLoaded ? 'skeleton' : ''
//           }`}
//           alt={alt}
//           src={`Images/${img_name}.webp`}
//           onLoad={onLoad}
//         />
//       </div>
//     </a>
//   </SplideSlide>
// );

export function SushiWorkModal({ loaded = true, onLoad = () => {} }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={`desktopAdv desktopAdv--5 ${!loaded ? 'skeleton' : ''} `}>
        <img
          alt="суши_работа"
          src="Images/work_sushi_sm.webp"
          onClick={() => setOpen(true)}
          onLoad={onLoad}
        />
      </div>

      <div
        className="overlay"
        style={{ display: open ? 'block' : 'none' }}
        onClick={handleClose}
      >
        <div className="modal">
          <img
            alt="суши_работа"
            className="modal__img"
            src="Images/work_sushi.webp"
          />
        </div>
      </div>
    </div>
  );
}

const AfishaSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => {
  return (
    <SplideSlide>
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="афиша"
          src="Images/afisha.webp"
          onLoad={onLoad}
        />
      </div>
    </SplideSlide>
  );
};

const KaraokeSlide = ({ allImgLoaded, onLoad }: {
  allImgLoaded: boolean;
  onLoad: () => void;
}) => (
  <SplideSlide>
    <a
      className="linkWrapper"
      href="https://vk.com/sushikinno?z=photo-46510864_457242824%2Fd9d80b69328fbe3c52"
      tabIndex={2}
    >
      <div className="imgContainer opacity_on_hover">
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          alt="детское караоке"
          src="Images/child_caraoke.webp"
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
      <GlamoramaSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
      <KaraokeSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
      <AfishaSlide allImgLoaded={allImgLoaded} onLoad={onLoad} />
    </Splide>
  );
});
export default AdvSlider;
