import { memo, useState, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
import { after, scrollToNavigation } from '../helpers'
import { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'

const BottomSwiperN = memo<BottomSwiperT>(function BottomSwiperN({
  isMobile,
  filmsToday,
}) {
  const [allImgLoaded, setImgLoaded] = useState(false)

  //deps!!!!!!!!!!!
  const onLoad = useCallback(
    () =>
      after(filmsToday.length, () => {
        setImgLoaded(true)
      }),
    []
  )

  if (isMobile || filmsToday[0] === undefined) {
    return null
  }

  return (
    <Splide
      className={'bottomSwiper'}
      options={{
        perPage: 4,
        perMove: 1,
        pagination: false,
        gap: '2rem',
        arrows: false,
        // slideFocus: false,
        // navigation: false,
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
  // skeleton не убирается!!!!!!!!!!!!!!!!
  return (
    <SplideSlide className={'swSlide bottomSwiper__slide'}>
      <Link
        className='swSlide__a'
        onClick={scrollToNavigation}
        to={`/movies/${film.link}`}>
        <div
          className={`bottomSwiper__imgCont ${
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

export default BottomSwiperN

type BottomSwiperT = {
  isMobile: boolean
  filmsToday: CinemaStateT['filmsToday']
}
