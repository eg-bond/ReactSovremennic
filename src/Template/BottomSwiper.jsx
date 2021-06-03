import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay])

const BottomSwiper = props => {
  const [opacity, turnOpacity] = useState('opacity_0')
  const swiperRef = useRef(null)

  if (props.filmsToday[0] === undefined) {
    return null
  }

  const params = {
    slidesPerView: props.slidesPerView,
    spaceBetween: props.slidesPerView === 3 ? 55 : 20,
    className: `bottomSwiper ${opacity}`,
    loop: true,
    onSwiper: swiper => (swiperRef.current = swiper),
    onImagesReady: () => turnOpacity('opacity_1'),
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  }
  return (
    <>
      {props.desktop && (
        <div className='bottomSwiperContainer'>
          <div className='swiper_bar'>
            <h1>Сегодня в кино</h1>
          </div>
          <div
            onMouseEnter={() => swiperRef.current.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.autoplay.start()}>
            <Swiper {...params}>
              {props.filmsToday.map(f => (
                <SwiperSlide className={'sliderSlide'} key={f.link}>
                  <Link to={`/movies/${f.link}`}>
                    <img
                      className='opacity'
                      // src={`./Images/description/${f.link}_D.jpg`}
                      src={require(`../images/description/${f.link}_D.jpg`)}
                      alt=''
                    />
                    <h1>{f.title}</h1>
                    <p>{f.kind.split(', ')[0]}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default BottomSwiper
