import React, { useState } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

SwiperCore.use([Pagination, Autoplay])

const FilmSwiper = ({ mobile, films }) => {
  const [opacity, turnOpacity] = useState('opacity_0')

  let autoplayOptions = () => {
    const options = {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    }
    // If desktop is used - turn on autoplay with options above
    return mobile === false ? options : false
  }

  const params = {
    spaceBetween: 10,
    className: 'cinemaSlider__container',
    observer: true,
    observeParents: true,
    onImagesReady: () => turnOpacity('opacity_1'),
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: autoplayOptions(),
    breakpoints: {
      250: {
        slidesPerView: 3.5,
        spaceBetween: 9,
        freeMode: true,
      },
      768: {
        freeMode: false,
        slidesPerView: 5,
      },
    },
  }

  return (
    <div className={`cinemaSlider`}>
      {mobile && <h4>Фильмы</h4>}
      <Swiper {...params}>{films.map(filmSwiperSlide)}</Swiper>
    </div>
  )
}

function filmSwiperSlide(film) {
  return (
    <SwiperSlide className={'sliderSlide'} key={film.link + 'FS'}>
      <Link to={`movies/${film.link}`}>
        <img src={`./Images/top_menu/${film.link}.webp`} alt={film.title} />
        <div style={{ position: 'relative' }}>
          <h1>{film.title}</h1>
        </div>
        <p>{film.beginDate}</p>
      </Link>
    </SwiperSlide>
  )
}

export default React.memo(FilmSwiper)
