import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import { Link } from 'react-router-dom'

const BottomSwiper = props => {
  const [opacity, turnOpacity] = useState('opacity_0')
  const [bottomSwiper, updateSwiper] = useState(null)

  const turnAutoplay = action => {
    if (bottomSwiper !== null) {
      action === 'stop'
        ? bottomSwiper.autoplay.stop()
        : bottomSwiper.autoplay.start()
    }
  }

  if (props.filmsToday[0] === undefined) {
    return null
  }

  const params = {
    slidesPerView: props.slidesPerView,
    spaceBetween: props.slidesPerView === 3 ? 55 : 20,
    centeredSlides: false,
    loop: true,
    containerClass: `bottomSwiper swiper-container ${opacity}`,
    wrapperClass: 'swiper-wrapper ',
    slideClass: 'swiper-slide',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      imagesReady: () => turnOpacity('opacity_1'),
    },
  }

  return (
    <>
      {props.desktop && (
        <div>
          <div className='swiper_bar'>
            <h1>Сегодня в кино</h1>
          </div>
          <div
            onMouseEnter={() => turnAutoplay('stop')}
            onMouseLeave={() => turnAutoplay('start')}>
            <Swiper getSwiper={updateSwiper} {...params}>
              {props.filmsToday.map(f => (
                <div key={f.link}>
                  <Link to={`/cinema/${f.link}`}>
                    <img
                      className='opacity'
                      src={`./Images/description/${f.link}_D.jpg`}
                      alt=''
                    />
                    <h1>{f.title}</h1>
                    <p>{f.kind.split(', ')[0]}</p>
                  </Link>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default BottomSwiper
