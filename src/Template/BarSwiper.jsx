import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

const barSwiperSlide = slideKey => {
  return (
    <SwiperSlide key={slideKey}>
      <img src={`./Images/${slideKey}.webp`} alt={slideKey} />
    </SwiperSlide>
  )
}

const slideKeys = ['bar_combo_3', 'bar_combo_2', 'bar_combo_1']

const BarSwiper = () => {
  return (
    <Swiper
      className='swiper-container-bar'
      loop='true'
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
        pauseOnMouseEnter: true,
      }}>
      {slideKeys.map(barSwiperSlide)}
    </Swiper>
  )
}
export default BarSwiper