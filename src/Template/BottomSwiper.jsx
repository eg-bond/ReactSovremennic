import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { scrollToNavigation } from '../helpers'

SwiperCore.use([Autoplay])

const BottomSwiper = props => {
  const [opacity, turnOpacity] = useState('opacity_0')
  const swiperRef = useRef(null)

  const params = {
    slidesPerView: 4,
    spaceBetween: 25,
    className: `bottomSwiper__container`,
    loop: true,
    onSwiper: swiper => (swiperRef.current = swiper),
    onImagesReady: () => turnOpacity('opacity_1'),
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  }

  return (
    <>
      {props.desktop && (
        <div
          className={`bottomSwiper ${opacity}`}
          onMouseEnter={() => swiperRef.current.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.autoplay.start()}>
          <Swiper {...params}>
            {props.filmsToday.map(f => (
              <SwiperSlide className={'sliderSlide'} key={f.link + 'BS'}>
                <Link onClick={scrollToNavigation} to={`/movies/${f.link}`}>
                  <img
                    src={`./Images/description/${f.link}_D.jpg`}
                    alt={f.title}
                  />
                  <h1>{f.title}</h1>
                  <p>{f.kind.split(', ')[0]}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default React.memo(BottomSwiper)
