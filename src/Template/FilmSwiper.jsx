import React, { useRef, useState } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

SwiperCore.use([Pagination, Autoplay])

const FilmSwiper = ({ mobile, films }) => {
  const [opacity, turnOpacity] = useState('opacity_0')
  const swiperRef = useRef(null)

  const params = {
    slidesPerView: 5.5,
    spaceBetween: 10,
    className: 'filmSwiper',
    observer: true,
    observeParents: true,
    onSwiper: swiper => (swiperRef.current = swiper),
    onImagesReady: () => turnOpacity('opacity_1'),
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      768: {
        freeMode: false,
      },
      250: {
        slidesPerView: 3.5,
        spaceBetween: 9,
        freeMode: true,
      },
    },
  }

  return (
    <div
      onMouseEnter={() => swiperRef.current.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.autoplay.start()}
      className={`cinemaSlider ${opacity}`}>
      {mobile && <h4>Фильмы</h4>}
      <Swiper {...params}>
        {films.map(f => (
          <SwiperSlide key={f.link}>
            <Link to={`/movies/${f.link}`}>
              <img
                className='opacity'
                // `./Images/top_menu/${f.link}.gif`
                src={require(`../images/top_menu/${f.link}.gif`)}
                alt={f.title}
              />
              <h1>{f.title}</h1>
              <p>{f.beginDate}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FilmSwiper
