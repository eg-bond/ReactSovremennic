import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRE_SHOW_SERVICE } from '@/utils/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { scrollToNavigation } from '../helpers';
import { FilmImg } from '../Content/Cinema/FilmImg';
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
  const title = useMemo(() =>
    film.pirate ? `${film.title} ${PRE_SHOW_SERVICE}` : film.title,
  [film.title, film.pirate],
  );

  return (
    <SplideSlide className="swSlide bottomSlider__slide">
      <Link
        className="swSlide__a"
        to={`/movies/${film.link}`}
        onClick={scrollToNavigation}
      >
        <FilmImg
          age={film.age}
          containerClassName="bottomSlider__imgCont skeleton-Gray"
          link={film.link}
          pirate={film.pirate}
          title={title}
        />
        <h1 className="swSlide__h1">{title}</h1>
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
