import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import { Link } from 'react-router-dom'

const FilmSwiper = ({ mobile, films }) => {
  const [opacity, turnOpacity] = useState('opacity_0')
  const [filmSwiper, updateSwiper] = useState(null)

  const turnAutoplay = action => {
    if (filmSwiper !== null) {
      action === 'stop'
        ? filmSwiper.autoplay.stop()
        : filmSwiper.autoplay.start()
    }
  }

  const params = {
    slidesPerView: 5.5,
    spaceBetween: 15,
    centeredSlides: false,
    observer: true,
    observeParents: true,
    containerClass: 'filmSwiper swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    pagination: {
      el: '.swiper-pagination',
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
        slidesPerView: 5.5,
        spaceBetween: 8,
        freeMode: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
    },
    on: {
      imagesReady: () => turnOpacity('opacity_1'),
    },
  }

  return (
    <div
      onMouseEnter={() => turnAutoplay('stop')}
      onMouseLeave={() => turnAutoplay('start')}
      className={`cinemaSlider ${opacity}`}>
      {mobile && <h4>Фильмы</h4>}
      <Swiper getSwiper={updateSwiper} {...params}>
        {films.map(f => (
          <div key={f.link}>
            <Link to={`/cinema/${f.link}`}>
              <img
                className='opacity'
                src={`./Images/top_menu/${f.link}.gif`}
                alt={f.title}
              />
              <h1>{f.title}</h1>
              <p>{f.beginDate}</p>
            </Link>
          </div>
        ))}
      </Swiper>
    </div>
  )
}

export default FilmSwiper
