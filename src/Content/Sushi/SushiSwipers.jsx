import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

const sushiSwiperSlide = (slideKey, showImg) => {
  return (
    <SwiperSlide key={slideKey}>
      <img
        onLoad={showImg}
        src={require(`../../images/sushi/${slideKey}.gif`)}
        alt={slideKey}
      />
      {/* <img src={`./Images/sushi/${slideKey}.gif`} alt={slideKey} /> */}
    </SwiperSlide>
  )
}

const slideKeys = {
  hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
  brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
}

export const SushiSwipers = ({ swiperKey, showImg }) => {
  const params = {
    spaceBetween: 30,
    pagination: {
      type: 'fraction',
    },
    navigation: true,
  }

  return (
    <Swiper {...params}>
      {slideKeys[swiperKey].map(swiperKey =>
        sushiSwiperSlide(swiperKey, showImg)
      )}
    </Swiper>
  )
}

export default SushiSwipers
