import React from 'react';
import Swiper from 'react-id-swiper';


const SushiSwiper = () => {
    const params = {
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        // containerClass: 'sushi-swiper-container swiper-container',
        // wrapperClass: 'sushi-swiper-wrapper',
        // slideClass: 'sushi-swiper-slide, swiper-slide',
        // buttonClass: swiper-button-black,

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
                <img src="./Images/sushi/hot_dishes1.jpg"></img>
            </div>
            <div>
                <img src="./Images/sushi/hot_dishes2.jpg"></img>
            </div>
            <div >
                <img src="./Images/sushi/hot_dishes3.jpg"></img>
            </div>
            <div>
                <img src="./Images/sushi/hot_dishes4.jpg"></img>
            </div>
        </Swiper>
    )
};

export default SushiSwiper;
