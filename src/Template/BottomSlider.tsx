import { memo } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
import { scrollToNavigation } from '../helpers'
import { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'
import { useImagesLoaded } from './useImagesLoaded'

const BottomSlider = memo<BottomSliderT>(function BottomSliderN({
  isMobile,
  filmsToday,
}) {
  const { allImgLoaded, onLoad } = useImagesLoaded(filmsToday)

  if (isMobile || filmsToday[0] === undefined) {
    return null
  }

  return (
    <Splide
      className={'bottomSlider'}
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
      }}>
      {filmsToday.map((item, i) => (
        <Slide
          key={i + 'BSl'}
          film={item}
          allImgLoaded={allImgLoaded}
          onLoad={onLoad}
        />
      ))}
    </Splide>
  )
})

const Slide = memo(function Slide({ film, allImgLoaded, onLoad }: SlideT) {
  return (
    <SplideSlide className={'swSlide bottomSlider__slide'}>
      <Link
        className='swSlide__a'
        onClick={scrollToNavigation}
        to={`/movies/${film.link}`}>
        <div
          className={`bottomSlider__imgCont ${
            !allImgLoaded ? 'skeleton skeleton-Gray' : ''
          }`}>
          <img
            className='swSlide__img'
            onLoad={onLoad}
            src={`./Images/description/${film.link}_D.webp`}
            alt={film.title}
          />
        </div>
        <h1 className='swSlide__h1'>{film.title}</h1>
        <p className='swSlide__p'>{film.kind.split(', ')[0]}</p>
      </Link>
    </SplideSlide>
  )
})

type SlideT = {
  film: CinemaStateT['films'][0]
  allImgLoaded: boolean
  onLoad: () => void
}

export default BottomSlider

type BottomSliderT = {
  isMobile: boolean
  filmsToday: CinemaStateT['filmsToday']
}
