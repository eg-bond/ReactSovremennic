import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { scrollToNavigation } from '../helpers';
import type { CinemaStateT } from '../REDUX/cinema/cinemaReducerT';

const BottomSlider = memo<BottomSliderT>(function BottomSliderN({ isMobile, filmsToday }) {
  if (isMobile || filmsToday[0] === undefined) {
    return null;
  }

  return (
    <Splide
      options={{
        perPage: 4,
        perMove: 1,
        pagination: false,
        gap: '2rem',
        arrows: false,
        type: 'loop',
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
      }}
      className="bottomSlider"
    >
      {filmsToday.map((item, i) => (
        <Slide film={item} key={i + 'BSl'} />
      ))}
    </Splide>
  );
});

const Slide = memo(function Slide({ film }: SlideT) {
  return (
    <SplideSlide className="swSlide bottomSlider__slide">
      <Link
        className="swSlide__a"
        to={`/movies/${film.link}`}
        onClick={scrollToNavigation}
      >
        <div className="bottomSlider__imgCont skeleton-Gray">
          <img
            alt={film.title}
            className="swSlide__img"
            src={`Images/description/${film.link}_D.webp`}
          />
        </div>
        <h1 className="swSlide__h1">{film.title}</h1>
        <p className="swSlide__p">{film.kind.split(', ')[0]}</p>
      </Link>
    </SplideSlide>
  );
});

type SlideT = {
  film: CinemaStateT['films'][0];
};

export default BottomSlider;

type BottomSliderT = {
  filmsToday: CinemaStateT['filmsToday'];
  isMobile: boolean;
};
