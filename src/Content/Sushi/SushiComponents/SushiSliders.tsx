import { useEffect, useRef } from 'react'
import { sushiElems, sushiImgSrc } from '../sushiHelpers'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import type { SushiElemsT } from '../sushiT'

export const SushiSliders = ({
  sliderKey,
  imgVisible,
  onLoad,
}: {
  sliderKey: keyof SushiElemsT['slidersKeys']
  imgVisible: boolean
  onLoad: () => void
}) => {
  const splideRef = useRef({})

  // go to first slide if one slider changes to another
  useEffect(() => {
    if ('splide' in splideRef.current) {
      //@ts-ignore
      splideRef.current.splide.Components.Controller.go(0)
    }
  }, [sliderKey])

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
        {sushiElems.slidersKeys[sliderKey].map(slideKey => (
          <SplideSlide key={slideKey}>
            <img
              className='sushi_page__img'
              onLoad={onLoad}
              src={sushiImgSrc(slideKey)}
              alt={slideKey}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default SushiSliders
