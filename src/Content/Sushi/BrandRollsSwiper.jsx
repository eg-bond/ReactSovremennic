import React from 'react';
import Swiper from 'react-id-swiper';

const BrandRollsSwiper = () => {
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
                <img src="./Images/sushi/brand_rolls1.gif" alt=""/>
            </div>
            <div>
                <img src="./Images/sushi/brand_rolls2.gif" alt=""/>
            </div>
            <div >
                <img src="./Images/sushi/brand_rolls3.gif" alt=""/>
            </div>
        </Swiper>
    )
};

export default BrandRollsSwiper;
