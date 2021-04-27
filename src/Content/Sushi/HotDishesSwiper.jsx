import React from 'react'
import Swiper from 'react-id-swiper'

const HotDishesSwiper = ({ showImg }) => {
  const params = {
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  return (
    <Swiper {...params}>
      <div>
        <img onLoad={showImg} src='./Images/sushi/hot_dishes1.gif' alt='' />
      </div>
      <div>
        <img src='./Images/sushi/hot_dishes2.gif' alt='' />
      </div>
      <div>
        <img src='./Images/sushi/hot_dishes3.gif' alt='' />
      </div>
      <div>
        <img src='./Images/sushi/hot_dishes4.gif' alt='' />
      </div>
    </Swiper>
  )
}

export default HotDishesSwiper
