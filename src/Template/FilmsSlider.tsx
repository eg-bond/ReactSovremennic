import { memo, useMemo } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { PRE_SHOW_SERVICE } from '@/utils/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FilmImg } from '../Content/Cinema/FilmImg';
import { useMobilePaddings } from './useMobilePaddings';
import { useImagesLoaded } from '../hooks/useImagesLoaded';
import type { CinemaStateT } from '../REDUX/cinema/cinemaReducerT';

const FilmsSlider = memo<FilmSliderT>(function FilmsSlider({ films, isMobile }) {
  const { onLoad } = useImagesLoaded(films.length || 0);
  // adds paddings to mobile slider to make it look like 3.5 slides
  useMobilePaddings(isMobile);
  const matchKaraoke = useMatch({ path: 'karaoke' });

  if (matchKaraoke && isMobile) return null;

  return (
    <div>
      <div className="cinemaSlider">
        <h4 className="displayMobile">Фильмы</h4>
        <Splide
          options={{
            perPage: isMobile ? 3 : 5,
            perMove: 1,
            pagination: false,
            gap: isMobile ? '2vw' : '0.6rem',
            arrows: isMobile ? false : true,
          }}
        >
          {films.map((item, i) => (
            <Slide
              film={item}
              key={i + 'FS'}
              onLoad={onLoad}
            />
          ))}
        </Splide>
      </div>

      <div className="separatorMobile" />
    </div>

  );
});

const Slide = memo(function Slide({ film, onLoad }: SlideT) {
  const title = useMemo(() =>
    film.pirate ? `${film.title} ${PRE_SHOW_SERVICE}` : film.title,
  [film.title, film.pirate],
  );

  return (
    <SplideSlide className="swSlide cinemaSlider__slide">
      <Link className="swSlide__a" to={`movies/${film.link}`}>
        <FilmImg
          age={film.age}
          containerClassName="cinemaSlider__imgCont skeleton-Gray"
          link={film.link}
          pirate={film.pirate}
          title={title}
          onLoad={onLoad}
        />
        <h1 className="swSlide__h1">{title}</h1>
        <p className="swSlide__p">{film.beginDate}</p>
      </Link>
    </SplideSlide>
  );
});

export default FilmsSlider;

type SlideT = {
  film: CinemaStateT['films'][0];
  onLoad: () => void;
};

type FilmSliderT = {
  films: CinemaStateT['films'];
  isMobile: boolean;
};
