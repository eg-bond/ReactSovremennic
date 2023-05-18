import { Splide, SplideSlide } from '@splidejs/react-splide'
import type { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'
import { Link } from 'react-router-dom'
import { memo, useState, useCallback } from 'react'
import { after } from '../helpers'

const FilmsSlider = memo<FilmSwiperT>(function FilmsSlider({
  films,
  isMobile,
}) {
  const [allImgLoaded, setImgLoaded] = useState(false)

  const onLoad = useCallback(
    () =>
      after(films.length, () => {
        setImgLoaded(true)
      }),
    []
  )

  return (
    <Splide
      className={'cinemaSlider'}
      options={{
        perPage: isMobile ? 3 : 5,
        drag: isMobile ? 'free' : true,
        perMove: 1,
        pagination: false,
        gap: '0.6rem',
        arrows: isMobile ? false : true,
      }}>
      {films.map((item, i) => (
        <Slide
          key={i + 'FS'}
          film={item}
          allImgLoaded={allImgLoaded}
          onLoad={onLoad}
        />
      ))}
    </Splide>
  )
})

const Slide = memo(function Slide({ film, allImgLoaded, onLoad }: SlideT) {
  console.log('one slide')
  return (
    <SplideSlide className={'swSlide cinemaSlider__slide'}>
      <Link className='swSlide__a' to={`movies/${film.link}`}>
        <div
          className={`cinemaSlider__imgCont ${
            !allImgLoaded ? 'skeleton skeleton-Gray' : ''
          }`}>
          <img
            className='spSlide__img'
            onLoad={onLoad}
            src={`./Images/top_menu/${film.link}.webp`}
            alt={film.title}
          />
        </div>
        <h1 className='swSlide__h1'>{film.title}</h1>
        <p className='swSlide__p'>{film.beginDate}</p>
      </Link>
    </SplideSlide>
  )
})

export default FilmsSlider

type SlideT = {
  film: CinemaStateT['films'][0]
  allImgLoaded: boolean
  onLoad: () => void
}

type FilmSwiperT = {
  films: CinemaStateT['films']
  isMobile: boolean
}
