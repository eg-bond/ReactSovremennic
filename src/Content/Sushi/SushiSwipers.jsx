import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Grow from '@material-ui/core/Grow'
import { trDuration } from './SushiContainer'
SwiperCore.use([Navigation, Pagination])

const sushiSwiperSlide = slideKey => {
  return (
    <SwiperSlide key={slideKey}>
      <img src={`./Images/sushi/${slideKey}.jpg`} alt={slideKey} />
    </SwiperSlide>
  )
}

const slideKeys = {
  rolls: ['rolls1', 'rolls2'],
  hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
  brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
}

const swiperParams = {
  pagination: {
    type: 'fraction',
  },
  spaceBetween: 25,
  navigation: true,
}

export const SushiSwipers = ({ swiperKey, imgVisible }) => {
  if (swiperKey === 'rolls') {
    return (
      <>
        <Grow in={imgVisible} timeout={trDuration}>
          <RollsSwiper swiperKey={swiperKey} />
        </Grow>
      </>
    )
  }
  if (swiperKey === 'brand_rolls') {
    return (
      <>
        <Grow in={imgVisible} timeout={trDuration}>
          <BrandRollsSwiper swiperKey={swiperKey} />
        </Grow>
      </>
    )
  }
  if (swiperKey === 'hot_dishes') {
    return (
      <>
        <Grow in={imgVisible} timeout={trDuration}>
          <HotDishesSwiper swiperKey={swiperKey} />
        </Grow>
      </>
    )
  }
}
export default SushiSwipers

function RollsSwiper({ swiperKey, ...growProps }) {
  return (
    <Swiper
      className={`swiper-container-sushi`}
      {...swiperParams}
      {...growProps}>
      {slideKeys[swiperKey].map(sushiSwiperSlide)}
    </Swiper>
  )
}

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
