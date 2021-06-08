import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Grow from '@material-ui/core/Grow'

SwiperCore.use([Navigation, Pagination])

const sushiSwiperSlide = slideKey => {
  return (
    <SwiperSlide key={slideKey}>
      <img src={require(`../../images/sushi/${slideKey}.gif`)} alt={slideKey} />
    </SwiperSlide>
  )
}

const slideKeys = {
  hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
  brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
}

export const SushiSwipers = ({ swiperKey, imgVisible }) => {
  const params = {
    spaceBetween: 30,
    pagination: {
      type: 'fraction',
    },
    navigation: true,
  }

  return (
    <Grow in={imgVisible} timeout={250}>
      <Swiper className='swiper-container-sushi' {...params}>
        {slideKeys[swiperKey].map(swiperKey => sushiSwiperSlide(swiperKey))}
      </Swiper>
    </Grow>
  )
}

export default SushiSwipers
