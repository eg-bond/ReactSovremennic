import React from 'react'
import Swiper from 'react-id-swiper'

export const SwiperSlide = ({ slideKey }) => {
  return (
    <div className='swiper-slide'>
      <img src={`./Images/sushi/${slideKey}.gif`} alt={slideKey} />
    </div>
  )
}

const HotDishesSwiper = ({ showImg }) => {
  const params = {
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      imagesReady: () => showImg(),
    },
  }

  return (
    <Swiper {...params}>
      <SwiperSlide slideKey='hot_dishes1' />
      <SwiperSlide slideKey='hot_dishes2' />
      <SwiperSlide slideKey='hot_dishes3' />
      <SwiperSlide slideKey='hot_dishes4' />
    </Swiper>
  )
}

export default HotDishesSwiper
