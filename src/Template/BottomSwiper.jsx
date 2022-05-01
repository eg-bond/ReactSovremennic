import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { scrollToNavigation } from '../helpers'

SwiperCore.use([Autoplay])

const BottomSwiper = ({ desktop, filmsToday }) => {
  const [opacity, turnOpacity] = useState('opacity_0')

  if (!desktop) {
    return null
  }

  const params = {
    slidesPerView: 4,
    spaceBetween: 25,
    className: `bottomSwiper__container`,
    loop: true,
    onImagesReady: () => turnOpacity('opacity_1'),
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  }

  return (
    <div className={`bottomSwiper ${opacity}`}>
      <Swiper {...params}>{filmsToday.map(bottomSwiperSlide)}</Swiper>
    </div>
  )
}

function bottomSwiperSlide(film) {
  return (
    <SwiperSlide className={'sliderSlide'} key={film.link + 'BS'}>
      <Link onClick={scrollToNavigation} to={`/movies/${film.link}`}>
        <img
          src={`./Images/description/${film.link}_D.webp`}
          alt={film.title}
        />
        <h1>{film.title}</h1>
        <p>{film.kind.split(', ')[0]}</p>
      </Link>
    </SwiperSlide>
  )
}

export default React.memo(BottomSwiper)
