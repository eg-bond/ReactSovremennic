import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FilmImg } from '@/Template/FilmImg';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { PRE_SHOW_SERVICE } from '@/utils/constants';
import { removeLineBreaks } from '@/utils/formatTextWithLineBreaks';
import { scrollToNavigation } from '../../helpers';
import type { CinemaStateT } from '../../REDUX/cinema/cinemaReducerT';
import * as s from './BottomSlider.css';

export const BottomSlider = memo<BottomSliderT>(function BottomSlider({ isMobile, filmsToday }) {
  if (isMobile || filmsToday[0] === undefined) return null;
  return <Inner filmsToday={filmsToday} />;
});

// Embla loop requires enough slides to fill viewport twice.
// With perPage=4, we need at least 8 slides. Duplicate if needed.
const MIN_LOOP_SLIDES = 8;

const Inner = memo<Pick<BottomSliderT, 'filmsToday'>>(function Inner({ filmsToday }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: 'start', containScroll: false, dragFree: true },
    [Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false })],
  );

  const slides = filmsToday.length < MIN_LOOP_SLIDES
    ? Array
        .from({ length: Math.ceil(MIN_LOOP_SLIDES / filmsToday.length) }, () => filmsToday)
        .flat()
    : filmsToday;

  return (
    <div>
      <h1 className={s.bar}>Скоро в кино</h1>
      <hr className={s.border} />
      <div className={s.viewport} ref={emblaRef}>
        <div className={s.track}>
          {slides.map((film, i) => (
            <Slide film={film} key={i + 'BSl'} />
          ))}
        </div>
      </div>
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
      <Link className="swSlide__a" to={`/movies/${film.link}`} onClick={scrollToNavigation}>
        <FilmImg
          age={film.age}
          containerClassName={`${s.imgCont} skeleton-Gray`}
          link={film.link}
          pirate={film.pirate}
          rounded={false}
          title={title}
        />
        <h1 className={s.slideH1}>{title}</h1>
        <p className={s.slideP}>{film.kind.split(', ')[0]}</p>
      </Link>
    </div>
  );
});

type SlideT = {
  film: CinemaStateT['films'][0];
};
type BottomSliderT = {
  filmsToday: CinemaStateT['filmsToday']; isMobile: boolean;
};
