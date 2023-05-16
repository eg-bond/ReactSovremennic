import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { after, scrollToNavigation } from '../helpers'
import { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'

SwiperCore.use([Autoplay])

const BottomSwiper = memo<BottomSwiperT>(function BottomSwiper({
  isMobile,
  filmsToday,
}) {
  const [allImgLoaded, setImgLoaded] = useState(false)

  if (isMobile || filmsToday[0] === undefined) {
    return null
  }

  const onLoad = after(filmsToday.length, () => {
    setImgLoaded(true)
  })

  const params = {
    slidesPerView: 4,
    spaceBetween: 25,
    className: `bottomSwiper__container`,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  }

  return (
    <div className={`bottomSwiper`}>
      <Swiper {...params}>
        {filmsToday.map((film, i) =>
          bottomSwiperSlide(film, i, onLoad, allImgLoaded)
        )}
      </Swiper>
    </div>
  )
})

function bottomSwiperSlide(
  film: CinemaStateT['filmsToday'][0],
  i: number,
  onLoad: () => void,
  allImgLoaded: boolean
) {
  return (
    <SwiperSlide
      className={'swSlide bottomSwiper__slide'}
      key={film.link + 'BS' + i}>
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
    </SwiperSlide>
  )
}

export default BottomSwiper

type BottomSwiperT = {
  isMobile: boolean
  filmsToday: CinemaStateT['filmsToday']
}
