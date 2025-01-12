import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMobilePaddings } from './useMobilePaddings';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import type { CinemaStateT } from '../REDUX/cinema/cinemaReducerT';

const FilmsSlider = memo<FilmSliderT>(function FilmsSlider({ films, isMobile }) {
  const { allImgLoaded, onLoad } = useImagesLoaded(films.length || 0);
  // adds paddings to mobile slider to make it look like 3.5 slides
  useMobilePaddings(isMobile);

  return (
    <div className="cinemaSlider">
      <h4 className="displayMobile">Фильмы</h4>
      <Splide
        options={{
          perPage: isMobile ? 3 : 5,
          perMove: 1,
          pagination: false,
          gap: isMobile ? '2vw' : '0.6rem',
          // arrows: false,
          arrows: isMobile ? false : true,
        }}
      >
        {films.map((item, i) => (
          <Slide
            allImgLoaded={allImgLoaded}
            film={item}
            key={i + 'FS'}
            onLoad={onLoad}
          />
        ))}
      </Splide>
    </div>
  );
});

const Slide = memo(function Slide({
  film,
allImgLoaded,
onLoad,
}: SlideT) {
  return (
    <SplideSlide className="swSlide cinemaSlider__slide">
      <Link className="swSlide__a" to={`movies/${film.link}`}>
        <div
          className={`cinemaSlider__imgCont skeleton-Gray ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
        >
          <img
            alt={film.title}
            className="swSlide__img"
            src={`Images/top_menu/${film.link}.webp`}
            onLoad={onLoad}
          />
        </div>
        <h1 className="swSlide__h1">{film.title}</h1>
        <p className="swSlide__p">{film.beginDate}</p>
      </Link>
    </SplideSlide>
  );
});

export default FilmsSlider;

type SlideT = {
  allImgLoaded: boolean;
  film: CinemaStateT['films'][0];
  onLoad: () => void;
};

type FilmSliderT = {
  films: CinemaStateT['films'];
  isMobile: boolean;
};
