import React, { useRef, useState } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

SwiperCore.use([Pagination, Autoplay])

const FilmSwiper = ({ mobile, films }) => {
  const [opacity, turnOpacity] = useState('opacity_0')
  const swiperRef = useRef(null)

  const params = {
    spaceBetween: 10,
    className: 'cinemaSlider__container',
    observer: true,
    observeParents: true,
    onSwiper: swiper => (swiperRef.current = swiper),
    onImagesReady: () => turnOpacity('opacity_1'),
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      250: {
        slidesPerView: 3.5,
        spaceBetween: 9,
        freeMode: true,
      },
      768: {
        freeMode: false,
        slidesPerView: 5.5,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
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
          <SwiperSlide className={'sliderSlide'} key={f.link}>
            <Link to={`/movies/${f.link}`}>
              <img
                className='opacity'
                // `./Images/top_menu/${f.link}.gif`
                src={require(`../images/top_menu/${f.link}.gif`)}
                alt={f.title}
              />
              <div style={{ position: 'relative' }}>
                <h1>{f.title}</h1>
              </div>
              <p>{f.beginDate}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FilmSwiper
