import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FilmImg } from '@/Template/FilmImg';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { PRE_SHOW_SERVICE } from '@/utils/constants';
import { removeLineBreaks } from '@/utils/formatTextWithLineBreaks';
import { scrollToNavigation } from '../../helpers';
import type { CinemaStateT } from '../../REDUX/cinema/cinemaReducerT';
import * as s from './BottomSliderNew.css';

const BottomSliderNew = memo<BottomSliderT>(function BottomSliderNew({ isMobile, filmsToday }) {
  if (isMobile || filmsToday[0] === undefined) return null;
  return <Inner filmsToday={filmsToday} />;
});

// Inner split so hooks are never called conditionally
const Inner = memo<Pick<BottomSliderT, 'filmsToday'>>(function Inner({ filmsToday }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: 'start' },
    [Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false })],
  );

  return (
    <div className={s.viewport} ref={emblaRef}>
      <div className={s.track}>
        {filmsToday.map((film, i) => (
          <Slide film={film} key={i + 'BSl'} />
        ))}
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

export default BottomSliderNew;
