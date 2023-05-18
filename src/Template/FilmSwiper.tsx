import { memo, useState, useEffect, useCallback } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { after } from '../helpers'
import type { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'
import type { SpecialStateT } from '../REDUX/special/spacialReducerT'
import type { SwiperT } from './SwiperT'

SwiperCore.use([Pagination, Autoplay])

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
  const [disabledArrow, setDisabledArrow] = useState(
    'none' as 'none' | 'left' | 'right'
  )
  // console.log(disabledArrow)
  const onFocus = useCallback(
    e => {
      if ('on' in swiper) {
        const elPar = e.target.offsetParent

        if (![...elPar.classList].includes('swiper-slide-visible')) {
          if (Number(e.relatedTarget.id[0]) - Number(e.target.id[0]) < 0) {
            swiper.slideNext()
          } else {
            swiper.slidePrev()
          }
          // console.log(e.relatedTarget)
          // console.log(e.target.relatedTarget.id)
        }
      }
    },
    [swiper]
  )
  // turns on/off autoplay when switching from mobile to desktop
  useEffect(() => {
    if ('on' in swiper) {
      swiper.on('progress', function ({ isEnd, isBeginning }) {
        // console.log('progressEv')

        if (isBeginning) {
          setDisabledArrow('left')
          return
        }
        if (isEnd) {
          setDisabledArrow('right')
          return
        }
        setDisabledArrow('none')
      })
      // swiper.on('slideChange', function () {
      //   console.log('some')
      // })
    }

    return () => {
      // unsub???
    }
  }, [swiper])

  // useEffect(() => {
  //   !isMobile ? swiper?.autoplay?.start() : swiper?.autoplay?.stop()
  // }, [isMobile, swiper])
  // turns on/off autoplay when siteMode changes
  // useEffect(() => {
  //   siteMode === 'default'
  //     ? swiper?.autoplay?.start()
  //     : swiper?.autoplay?.stop()
  // }, [siteMode, swiper])

  const onLoad = after(films.length, () => {
    setImgLoaded(true)
  })

  const nextSlideKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') swiper.slidePrev()
  }
  const prevSlideKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') swiper.slideNext()
  }

  return (
    <div className={`cinemaSlider`}>
      <h4 className='displayMobile'>Фильмы</h4>
      {!isMobile && (
        <>
          <div
            // tabIndex={0}
            className={`arrow arrow__left `}
            //@ts-ignore
            onKeyDown={nextSlideKey}
            onClick={() => swiper.slidePrev()}>
            <div
              className={`arrow-top ${
                disabledArrow === 'left' ? 'arrow-disabled' : ''
              }`}></div>
            <div
              className={`arrow-bottom ${
                disabledArrow === 'left' ? 'arrow-disabled' : ''
              }`}></div>
          </div>
          <div
            tabIndex={0}
            className='arrow arrow__right'
            //@ts-ignore
            onKeyDown={prevSlideKey}
            onClick={() => swiper.slideNext()}>
            <div
              className={`arrow-top ${
                disabledArrow === 'right' ? 'arrow-disabled' : ''
              }`}></div>
            <div
              className={`arrow-bottom ${
                disabledArrow === 'right' ? 'arrow-disabled' : ''
              }`}></div>
          </div>
        </>
      )}
      <Swiper
        className={'cinemaSlider__container'}
        onSwiper={swiper => setSwiper(swiper)}
        spaceBetween={10}
        pagination={{
          type: 'bullets',
          dynamicBullets: true,
        }}
        watchSlidesProgress={true}
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
        {films.map((item, i) =>
          filmSwiperSlide(item, i, allImgLoaded, onLoad, onFocus)
        )}
      </Swiper>
    </div>
  )
})

function filmSwiperSlide(
  film: CinemaStateT['films'][0],
  i: number,
  allImgLoaded: boolean,
  onLoad: () => void,
  onFocus: () => void
) {
  return (
    <SwiperSlide
      className={'swSlide cinemaSlider__slide'}
      key={film.link + 'FS'}>
      <Link
        id={i + 'FS'}
        onFocus={onFocus}
        className='swSlide__a'
        to={`movies/${film.link}`}>
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
