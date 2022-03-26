import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Grow from '@material-ui/core/Grow'
import { trDuration } from './SushiContainer'
SwiperCore.use([Navigation, Pagination])

const sushiSwiperSlide = slideKey => {
  return (
    <SwiperSlide key={slideKey}>
      <img src={`./Images/sushi/${slideKey}.gif`} alt={slideKey} />
    </SwiperSlide>
  )
}

const slideKeys = {
  hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
  brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
}

const swiperParams = {
  spaceBetween: 30,
  pagination: {
    type: 'fraction',
  },
  navigation: true,
}

export const SushiSwipers = ({ swiperKey, imgVisible }) => {
  return (
    // prettier-ignore
    <Grow in={imgVisible} timeout={trDuration}>
      {swiperKey === 'brand_rolls' 
        ? <BrandRollsSwiper swiperKey={swiperKey} />
        : <HotDishesSwiper swiperKey={swiperKey} />}      
    </Grow>
  )
}
export default SushiSwipers

function BrandRollsSwiper({ swiperKey, ...growProps }) {
  return (
    <Swiper
      className={`swiper-container-sushi`}
      {...swiperParams}
      {...growProps}>
      {slideKeys[swiperKey].map(sushiSwiperSlide)}
    </Swiper>
  )
}

function HotDishesSwiper({ swiperKey, ...growProps }) {
  return (
    <Swiper
      className={`swiper-container-sushi`}
      {...swiperParams}
      {...growProps}>
      {slideKeys[swiperKey].map(sushiSwiperSlide)}
    </Swiper>
  )
}
