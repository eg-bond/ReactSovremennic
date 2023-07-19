import { useEffect, useRef } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sushiImgSrc } from './sushiHelpers'
SwiperCore.use([Navigation, Pagination])

const slideKeys = {
  rolls: ['rolls1', 'rolls2'],
  hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
  brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
}

const sushiSwiperSlide = (slideKey, onLoad) => {
  return (
    <SwiperSlide key={slideKey}>
      <img onLoad={onLoad} src={sushiImgSrc(slideKey)} alt={slideKey} />
    </SwiperSlide>
  )
}

export const SushiSwipers = ({ swiperKey, imgVisible, onLoad }) => {
  const swiperRef = useRef(null)

  const swiperParams = {
    onSwiper: swiper => (swiperRef.current = swiper),
    pagination: {
      type: 'fraction',
    },
    spaceBetween: 25,
    navigation: true,
  }

  useEffect(() => {
    if (swiperRef.current !== null) {
      // if we move from one swiper to another - show the first slide
      swiperRef.current.slideTo(0, 0)
    }
  }, [swiperKey])

  return (
    <div className={`${imgVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
      <Swiper className={`swiper-container-sushi`} {...swiperParams}>
        {slideKeys[swiperKey].map(slideKey =>
          sushiSwiperSlide(slideKey, onLoad)
        )}
      </Swiper>
    </div>
  )
}

export default SushiSwipers