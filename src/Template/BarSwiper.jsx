import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

const barSwiperSlide = slideKey => {
  return (
    <SwiperSlide key={slideKey}>
      <div className='imgContainer skeleton'>
        <img src={`./Images/${slideKey}.webp`} alt={slideKey} />
      </div>
    </SwiperSlide>
  )
}

const slideKeys = ['kombo2', 'kombo1']

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
