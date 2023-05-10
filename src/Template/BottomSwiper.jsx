import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { after, scrollToNavigation } from '../helpers'

SwiperCore.use([Autoplay])

const BottomSwiper = memo(function BottomSwiper({ desktop, filmsToday }) {
  const [allImgLoaded, setImgLoaded] = useState(false)

  if (!desktop || filmsToday[0] === undefined) {
    return null
  }

  const onLoad = after(filmsToday.length, () => {
    setImgLoaded(true)
  })

  const params = {
    slidesPerView: 4,
    spaceBetween: 25,
    className: `bottomSwiper__container`,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  }

  return (
    <div className={`bottomSwiper`}>
      <Swiper {...params}>
        {filmsToday.map((film, i) =>
          bottomSwiperSlide(film, i, onLoad, allImgLoaded)
        )}
      </Swiper>
    </div>
  )
})

function bottomSwiperSlide(film, i, onLoad, allImgLoaded) {
  return (
    <SwiperSlide
      className={'sliderSlide bottomSwiper__slide'}
      key={film.link + 'BS' + i}>
      <Link onClick={scrollToNavigation} to={`/movies/${film.link}`}>
        <div
          className={`bottomSwiper__slide__imgCont ${
            !allImgLoaded ? 'skeleton skeleton-Gray' : ''
          }`}>
          <img
            onLoad={onLoad}
            src={`./Images/description/${film.link}_D.webp`}
            alt={film.title}
          />
        </div>
        <h1>{film.title}</h1>
        <p>{film.kind.split(', ')[0]}</p>
      </Link>
    </SwiperSlide>
  )
}

export default BottomSwiper
