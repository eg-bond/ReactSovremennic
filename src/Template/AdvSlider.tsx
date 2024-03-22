import { Splide, SplideSlide } from '@splidejs/react-splide'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useImagesLoaded } from '../hooks/useImagesLoaded'

const SushiSlide = ({
  allImgLoaded,
  onLoad,
}: {
  allImgLoaded: boolean
  onLoad: () => void
}) => (
  <SplideSlide>
    <Link tabIndex={2} className={'linkWrapper'} to='/sushi'>
      <div className={`imgContainer`}>
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          onLoad={onLoad}
          src='./Images/74.webp'
          alt='бар'
        />
      </div>
    </Link>
  </SplideSlide>
)

const LottenSlide = ({
  allImgLoaded,
  onLoad,
}: {
  allImgLoaded: boolean
  onLoad: () => void
}) => (
  <SplideSlide>
    <a href='https://lotten.ru' tabIndex={2} className={'linkWrapper'}>
      <div className={`imgContainer`}>
        <img
          className={`imgContainer__img transition ${
            !allImgLoaded ? 'skeleton' : ''
          }`}
          onLoad={onLoad}
          src='./Images/lotten.webp'
          alt='lotten кадастровые услуги'
        />
      </div>
    </a>
  </SplideSlide>
)

const AdvSlider = memo(function BarSlider() {
  const { allImgLoaded, onLoad } = useImagesLoaded(2)
  return (
    <Splide
      className='advSlider'
      options={{
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        // direction: 'rtl',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
      }}>
      <LottenSlide onLoad={onLoad} allImgLoaded={allImgLoaded} />
      <SushiSlide onLoad={onLoad} allImgLoaded={allImgLoaded} />
    </Splide>
  )
})
export default AdvSlider
