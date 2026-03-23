import { memo, useMemo } from 'react';
import { FilmImg } from '@/Template/FilmImg';
import { Link, useMatch } from 'react-router-dom';
import { PRE_SHOW_SERVICE } from '@/utils/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { removeLineBreaks } from '@/utils/formatTextWithLineBreaks';
import { useMobilePaddings } from '../useMobilePaddings';
import type { CinemaStateT } from '../../REDUX/cinema/cinemaReducerT';
import * as s from './FilmsSlider.css';

const FilmsSlider = memo<FilmSliderT>(function FilmsSlider({ films, isMobile }) {
  useMobilePaddings(isMobile);
  const matchKaraoke = useMatch({ path: 'karaoke' });

  if (matchKaraoke && isMobile) return null;

  return (
    <div>
      <div className={s.cinemaSlider}>
        <h4 className={`displayMobile ${s.mobileTitle}`}>Фильмы</h4>
        <Splide
          options={{
            perPage: isMobile ? 3 : 5,
            perMove: 1,
            pagination: false,
            gap: isMobile ? '2vw' : '0.6rem',
            arrows: !isMobile,
          }}
          className={s.splideWithArrows}
        >
          {films.map((item, i) => (
            <Slide film={item} key={i + 'FS'} />
          ))}
        </Splide>
      </div>

      <div className="separatorMobile" />
    </div>
  );
});

const Slide = memo(function Slide({ film }: SlideT) {
  const title = useMemo(() => {
    const baseTitle = film.pirate
      ? `${film.title} ${PRE_SHOW_SERVICE}`
      : film.title;
    return removeLineBreaks(baseTitle);
  }, [film.title, film.pirate]);

  return (
    <SplideSlide className="swSlide">
      <Link className="swSlide__a" to={`movies/${film.link}`}>
        <FilmImg
          age={film.age}
          containerClassName={`${s.imgCont} skeleton-Gray`}
          link={film.link}
          pirate={film.pirate}
          title={title}
        />
        <h1 className={s.slideH1}>{title}</h1>
        <p className={s.slideP}>{film.beginDate}</p>
      </Link>
    </SplideSlide>
  );
});

type SlideT = {
  film: CinemaStateT['films'][0];
};
type FilmSliderT = {
  films: CinemaStateT['films'];
  isMobile: boolean;
};

export default FilmsSlider;
