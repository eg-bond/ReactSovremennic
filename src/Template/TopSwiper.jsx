import React from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const TopSwiper = (props) => {
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
                        <img className="opacity" src={props.films[0]['topImgPath']}></img>
                        <h1>{props.films[0]['title']}</h1>
                        <p>{props.films[0]['beginDate']}</p>
                    </NavLink>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src={props.films[1]['topImgPath']}></img>
                        <h1>{props.films[1]['title']}</h1>
                        <p>{props.films[1]['beginDate']}</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src={props.films[2]['topImgPath']}></img>
                        <h1>{props.films[2]['title']}</h1>
                        <p>{props.films[2]['beginDate']}</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src={props.films[3]['topImgPath']}></img>
                        <h1>{props.films[3]['title']}</h1>
                        <p>{props.films[3]['beginDate']}</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src={props.films[4]['topImgPath']}></img>
                        <h1>{props.films[4]['title']}</h1>
                        <p>{props.films[4]['beginDate']}</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src={props.films[5]['topImgPath']}></img>
                        <h1>{props.films[5]['title']}</h1>
                        <p>{props.films[5]['beginDate']}</p>
                    </a>
                </div>
                <div>
                    <a href="OnoTwo.html">
                        <img className="opacity" src={props.films[6]['topImgPath']}></img>
                        <h1>{props.films[6]['title']}</h1>
                        <p>{props.films[6]['beginDate']}</p>
                    </a>
                </div>

            </Swiper>
        </div>
    )
};

export default TopSwiper;
