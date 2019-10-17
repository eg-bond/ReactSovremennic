import React from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const TopSwiper = () => {
    const params = {
        slidesPerView: 5.5,
        spaceBetween: 15,
        centeredSlides: false,
        observer: true,
        observeParents: true,
        containerClass: 'film-swiper swiper-container',
        wrapperClass: 'top-swiper-wrapper',
        slideClass: 'top-swiper-slide',
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            992: {
                spaceBetween: 8
            },
            1200: {
                spaceBetween: 10
            }
        }
    }

    return (
        <div className='top-menu hidden-xs'>
            <Swiper {...params}>
                <div>
                    <NavLink to='/joker'>
                        <img className="opacity" src="./Images/top_menu/Joker.gif"></img>
                        <h1>Оно 2</h1>
                        <p>с 5 сентября</p>
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

export default TopSwiper;
