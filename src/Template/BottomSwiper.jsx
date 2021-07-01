import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

const BottomSwiper = props => {
  // const [opacity, turnOpacity] = useState('opacity_0')
  const swiperRef = useRef(null)

  // console.log(props)

  // if (props.filmsToday[0] === undefined) {
  //   return null
  // }

  const params = {
    slidesPerView: props.slidesPerView,
    spaceBetween: props.slidesPerView === 3 ? 55 : 20,
    className: `bottomSwiper__container`,
    loop: true,
    onSwiper: swiper => (swiperRef.current = swiper),
    // onImagesReady: () => turnOpacity('opacity_1'),
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  }

  return (
    <>
      {props.desktop && (
        <div
          className={`bottomSwiper`}
          data-testid='bottom_swiper'
          // className={`bottomSwiper ${opacity}`}
          onMouseEnter={() => swiperRef.current.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.autoplay.start()}>
          <Swiper {...params}>
            {props.filmsToday.map(f => (
              <SwiperSlide className={'sliderSlide'} key={f.link + 'BS'}>
                <Link to={`/movies/${f.link}`}>
                  <img
                    src={`./Images/description/${f.link}_D.jpg`}
                    alt={f.title}
                  />
                  <h1>{f.title}</h1>
                  <p>{f.kind.split(', ')[0]}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default React.memo(BottomSwiper)
