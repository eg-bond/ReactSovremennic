import React from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const BottomSwiper = () => {
    const params = {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        containerClass: 'bottom-swiper swiper-container',
        wrapperClass: 'bottom-swiper-wrapper',
        slideClass: 'bottom-swiper-slide',
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    }

    return (
        <div className='container hidden-xs'>
            <div className="swiper_bar hidden-xs"><h2>Сегодня в кино</h2></div>
            <Swiper {...params}>
                <div>
                    <NavLink to='/cinema'>
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>Мульт</p>
                    </NavLink>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
                    </a>
                </div>
            </Swiper>
        </div>
    )
};

export default BottomSwiper;
