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
                <img src="./Images/sushi/hot_dishes1.gif" alt="hot_dishes_1"/>
            </div>
            <div>
                <img src="./Images/sushi/hot_dishes2.gif" alt="hot_dishes_2"/>
            </div>
            <div >
                <img src="./Images/sushi/hot_dishes3.gif" alt="hot_dishes_3"/>
            </div>
            <div>
                <img src="./Images/sushi/hot_dishes4.gif" alt="hot_dishes_4"/>
            </div>
        </Swiper>
    )
};

export default SushiSwiper;
