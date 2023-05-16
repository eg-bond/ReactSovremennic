import { memo, useState, useEffect } from 'react'
import SwiperCore, { Pagination, Autoplay, Keyboard, Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Link } from 'react-router-dom'
import { after } from '../helpers'
import type { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'
import type { SpecialStateT } from '../REDUX/special/spacialReducerT'
import type { SwiperT } from './SwiperT'

SwiperCore.use([Pagination, Autoplay, Keyboard, Navigation])

type FilmSwiperT = {
  films: CinemaStateT['films']
  siteMode: SpecialStateT['siteMode']
  isMobile: boolean
}

const FilmSwiper = memo<FilmSwiperT>(function FilmSwiper({
  films,
  siteMode,
  isMobile,
}) {
  const [allImgLoaded, setImgLoaded] = useState(false)
  // saves swiper instance
  const [swiper, setSwiper] = useState({} as SwiperT)
  // turns on/off autoplay when switching from mobile to desktop
  useEffect(() => {
    !isMobile ? swiper?.autoplay?.start() : swiper?.autoplay?.stop()
  }, [isMobile, swiper])
  // turns on/off autoplay when siteMode changes
  useEffect(() => {
    siteMode === 'default'
      ? swiper?.autoplay?.start()
      : swiper?.autoplay?.stop()
  }, [siteMode, swiper])

  const onLoad = after(films.length, () => {
    setImgLoaded(true)
  })

  const nextSlide = () => {
    swiper.slidePrev()
  }
  const prevSlide = () => {
    swiper.slideNext()
  }

  return (
    <div className={`cinemaSlider`}>
      <h4 className='displayMobile'>Фильмы</h4>
      <Swiper
        className={'cinemaSlider__container'}
        onSwiper={swiper => setSwiper(swiper)}
        spaceBetween={10}
        keyboard={true}
        // pagination={{
        //   dynamicBullets: true,
        //   clickable: true,
        // }}
        // navigation={true}
        // autoplay={{
        //   delay: 3500,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          250: {
            slidesPerView: 3.5,
            spaceBetween: 9,
            freeMode: true,
          },
          768: {
            freeMode: false,
            slidesPerView: 5,
          },
        }}>
        {films.map(item => filmSwiperSlide(item, allImgLoaded, onLoad))}
      </Swiper>
      <div className='swiper-button-prev' onClick={nextSlide}></div>
      <div className='swiper-button-next' onClick={prevSlide}></div>

      <div className='arrow'>
        <div className='arrow-top'></div>
        <div className='arrow-bottom'></div>
      </div>
      <div className='arrow'>
        <div className='arrow-top'></div>
        <div className='arrow-bottom'></div>
      </div>
    </div>
  )
})

function filmSwiperSlide(
  film: CinemaStateT['films'][0],
  allImgLoaded: boolean,
  onLoad: () => void
) {
  return (
    <SwiperSlide
      className={'swSlide cinemaSlider__slide'}
      key={film.link + 'FS'}>
      <Link className='swSlide__a' to={`movies/${film.link}`}>
        <div
          className={`cinemaSlider__imgCont ${
            !allImgLoaded ? 'skeleton skeleton-Gray' : ''
          }`}>
          <img
            className='swSlide__img'
            onLoad={onLoad}
            src={`./Images/top_menu/${film.link}.webp`}
            alt={film.title}
          />
        </div>
        <h1 className='swSlide__h1'>{film.title}</h1>
        <p className='swSlide__p'>{film.beginDate}</p>
      </Link>
    </SwiperSlide>
  )
}

export default FilmSwiper
