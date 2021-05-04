import React from 'react'
import Swiper from 'react-id-swiper'
import { SwiperSlide } from './HotDishesSwiper'

const BrandRollsSwiper = ({ showImg }) => {
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
      <SwiperSlide slideKey='brand_rolls1' />
      <SwiperSlide slideKey='brand_rolls2' />
      <SwiperSlide slideKey='brand_rolls3' />
    </Swiper>
  )
}

export default BrandRollsSwiper
