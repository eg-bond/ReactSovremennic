import { memo, useState } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { after } from '../helpers'
import { CinemaStateT } from '../REDUX/cinema/cinemaReducerT'

SwiperCore.use([Pagination, Autoplay])

const FilmSwiper = memo(function FilmSwiper({
  films,
}: {
  films: CinemaStateT['films']
}) {
  const [allImgLoaded, setImgLoaded] = useState(false)

  const onLoad = after(films.length, () => {
    setImgLoaded(true)
  })

  const params = {
    spaceBetween: 10,
    className: 'cinemaSlider__container',
    observer: true,
    observeParents: true,
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: false,
    breakpoints: {
      250: {
        slidesPerView: 3.5,
        spaceBetween: 9,
        freeMode: true,
      },
      768: {
        freeMode: false,
        slidesPerView: 5,
        autoplay: {
          enabled: true,
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
      },
    },
  }

  return (
    <div className={`cinemaSlider`}>
      <h4 className='displayMobile'>Фильмы</h4>
      <Swiper {...params}>
        {films.map(item => filmSwiperSlide(item, allImgLoaded, onLoad))}
      </Swiper>
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
      className={'sliderSlide cinemaSlider__slide'}
      key={film.link + 'FS'}>
      <Link to={`movies/${film.link}`}>
        <div
          className={`cinemaSlider__slide__imgCont ${
            !allImgLoaded ? 'skeleton skeleton-Gray' : ''
          }`}>
          <img
            onLoad={onLoad}
            src={`./Images/top_menu/${film.link}.webp`}
            alt={film.title}
          />
        </div>
        <h1>{film.title}</h1>
        <p>{film.beginDate}</p>
      </Link>
    </SwiperSlide>
  )
}

export default FilmSwiper
