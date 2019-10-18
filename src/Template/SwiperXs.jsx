import React from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const SwiperXs = () => {
    const params = {
        slidesPerView: 3.5,
        spaceBetween: 10,
        centeredSlides: false,
        freeMode: true,
        containerClass: 'film-swiper-xs swiper-container',
    }

    return (
        <div className="visible-xs">

                <div className="dropdown-menu-xs float-left">
                    <h4>
                        Фильмы
                    </h4>
                    <Swiper {...params}>
                        <div>
                            <NavLink to='/joker'>
                                <img className="opacity" src="./Images/top_menu/Joker.gif"></img>
                                <h1>Оно 2</h1>
                                <p>с 5 сентября</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/maleficent">
                                <img className="opacity" src="./Images/top_menu/OnoTwo.gif"></img>
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
                    </Swiper>
                </div>




        </div>

    )
};

export default SwiperXs;