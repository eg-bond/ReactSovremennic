import { FilmImg } from '@/Template/FilmImg';
import { Link, useMatch } from 'react-router-dom';
import { memo, useMemo, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PRE_SHOW_SERVICE } from '@/utils/constants';
import { removeLineBreaks } from '@/utils/formatTextWithLineBreaks';
import type { CinemaStateT } from '../../REDUX/cinema/cinemaReducerT';
import * as s from './FilmsSlider.css';

export const FilmsSlider = memo<FilmSliderT>(function FilmsSlider({ films, isMobile }) {
  const matchKaraoke = useMatch({ path: 'karaoke' });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (matchKaraoke && isMobile) return null;

  return (
    <div>
      <div className={s.cinemaSlider}>
        <h4 className={`displayMobile ${s.mobileTitle}`}>Фильмы</h4>
        <div style={{ position: 'relative' }}>
          <div className={s.viewport} ref={emblaRef}>
            <div className={s.track}>
              {films.map((film, i) => (
                <Slide film={film} key={i + 'FS'} />
              ))}
            </div>
          </div>

          {!isMobile && (
            <>
              <button aria-label="Previous" className={s.arrowPrev} onClick={scrollPrev}>
                <svg className={s.arrowSvg} viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button aria-label="Next" className={s.arrowNext} onClick={scrollNext}>
                <svg className={s.arrowSvg} viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="separatorMobile" />
    </div>
  );
});

const Slide = memo(function Slide({ film }: SlideT) {
  const title = useMemo(() => {
    const base = film.pirate ? `${film.title} ${PRE_SHOW_SERVICE}` : film.title;
    return removeLineBreaks(base);
  }, [film.title, film.pirate]);

  return (
    <div className={`swSlide ${s.slide}`}>
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
    </div>
  );
});

type SlideT = {
  film: CinemaStateT['films'][0];
};
type FilmSliderT = {
  films: CinemaStateT['films']; isMobile: boolean;
};
