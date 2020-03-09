import React from 'react';
import Swiper from 'react-id-swiper';


const SushiSwiper = () => {
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
        }
    }

    return (
        <Swiper {...params}>
            <div>
                <img src="./Images/sushi/hot_dishes1.jpg"/>
            </div>
            <div>
                <img src="./Images/sushi/hot_dishes2.jpg"/>
            </div>
            <div >
                <img src="./Images/sushi/hot_dishes3.jpg"/>
            </div>
            <div>
                <img src="./Images/sushi/hot_dishes4.jpg"/>
            </div>
        </Swiper>
    )
};

export default SushiSwiper;
