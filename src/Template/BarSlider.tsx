import { Splide, SplideSlide } from '@splidejs/react-splide'
import { memo } from 'react'

const BarSliderSlide = ({ slideKey }: { slideKey: string }) => {
  return (
    <SplideSlide key={slideKey}>
      <div className='imgContainer'>
        <img
          className='imgContainer__img transition'
          src={`./Images/kombo/${slideKey}_lg.webp`}
          srcSet={`./Images/kombo/${slideKey}_sm.webp 500w,
                   ./Images/kombo/${slideKey}_md.webp 680w,
                   ./Images/kombo/${slideKey}_lg.webp 1920w`}
          alt={slideKey}
        />
      </div>
    </SplideSlide>
  )
}

const slideKeys = ['kombo1', 'kombo2']

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
