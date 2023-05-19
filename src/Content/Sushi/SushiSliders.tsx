import { useEffect, useRef } from 'react'
import { sushiImgSrc } from './sushiHelpers'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const slideKeys = {
  rolls: ['rolls1', 'rolls2'],
  hot_dishes: ['hot_dishes1', 'hot_dishes2', 'hot_dishes3', 'hot_dishes4'],
  brand_rolls: ['brand_rolls1', 'brand_rolls2', 'brand_rolls3'],
} as const

type slideKeysT = typeof slideKeys

const sushiSwiperSlide = (
  slideKey: slideKeysT[keyof slideKeysT][any],
  onLoad: () => void
) => {
  return (
    <SplideSlide key={slideKey}>
      <img onLoad={onLoad} src={sushiImgSrc(slideKey)} alt={slideKey} />
    </SplideSlide>
  )
}

export const SushiSliders = ({
  swiperKey,
  imgVisible,
  onLoad,
}: SushiSlidersT) => {
  const splideRef = useRef(null)

  useEffect(() => {
    //@ts-ignore
    if ('splide' in splideRef.current) {
      //@ts-ignore
      splideRef.current.splide.Components.Controller.go(0)
    }
  }, [swiperKey])

  return (
    <div className={`${imgVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
      <Splide
        ref={splideRef}
        className='sushiSlider'
        options={{
          perPage: 1,
          perMove: 1,
          gap: '2rem',
          start: 0,
        }}>
        {slideKeys[swiperKey].map(slideKey =>
          sushiSwiperSlide(slideKey, onLoad)
        )}
      </Splide>
    </div>
  )
}

export default SushiSliders

type SushiSlidersT = {
  // завязать на основной объект
  swiperKey: keyof typeof slideKeys
  imgVisible: boolean
  onLoad: () => void
}
