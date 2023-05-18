import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

// SwiperCore.use([Autoplay])

const barSwiperSlide = (slideKey: string) => {
  return (
    <SwiperSlide key={slideKey}>
      <div className='imgContainer skeleton'>
        <img src={`./Images/${slideKey}.webp`} alt={slideKey} />
      </div>
    </SwiperSlide>
  )
}
// const barSwiperSlide = (slideKey: string) => {
//   return (
//     <SwiperSlide key={slideKey}>
//       <div className='imgContainer skeleton'>
//         <img src={`./Images/${slideKey}.webp`} alt={slideKey} />
//       </div>
//     </SwiperSlide>
//   )
// }

const slideKeys = ['combo2', 'combo1']

const BarSwiper = () => {
  return (
    // <Swiper
    //   className='swiper-container-bar'
    //   loop={true}
    //   autoplay={{
    //     delay: 4000,
    //     disableOnInteraction: false,
    //     reverseDirection: true,
    //     pauseOnMouseEnter: true,
    //   }}>
    //   {slideKeys.map(barSwiperSlide)}
    // </Swiper>
    <Splide
      className='swiper-container-bar'
      options={{
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
        type: 'loop',
        autoplay: true,
        interval: 3500,
        pauseOnHover: true,
        pauseOnFocus: true,
      }}>
      {slideKeys.map(barSwiperSlide)}
    </Splide>
  )
}
export default BarSwiper
