import { Splide, SplideSlide } from '@splidejs/react-splide'
import { memo } from 'react'

const BarSliderSlide = ({ slideKey }: { slideKey: string }) => {
  return (
    <SplideSlide key={slideKey}>
      <div className='imgContainer skeleton'>
        <img
          className='imgContainer__img'
          src={`./Images/${slideKey}.webp`}
          alt={slideKey}
        />
      </div>
    </SplideSlide>
  )
}

const slideKeys = ['combo2', 'combo1']

const BarSlider = memo(function BarSlider() {
  return (
    <Splide
      className='barSlider'
      options={{
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        direction: 'rtl',
        autoplay: true,
        interval: 3500,
        pauseOnHover: true,
      }}>
      {slideKeys.map(key => (
        <BarSliderSlide key={key} slideKey={key} />
      ))}
    </Splide>
  )
})
export default BarSlider
