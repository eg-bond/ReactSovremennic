import React from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const BottomSwiper = (props) => {

    if (props.films[0] == undefined) {
        return null;
    }

    const params = {
        slidesPerView: props.slidesPerView,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        containerClass: 'swiper-bottom swiper-container',
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    }

    return (
        <div className='hidden-xs'>
            <div className="swiper_bar hidden-xs"><h2>Сегодня в кино</h2></div>
            <Swiper {...params}>
                {
                    props.films.map( f => <div key={f.link}>
                        <NavLink to={f.link}>
                            <img className="opacity" src={f.topImgPath}></img>
                            <h1>{f.title}</h1>
                            <p>{f.kind.split(", ")[0]}</p>
                        </NavLink>
                    </div>)
                }
            </Swiper>
        </div>
    )
};



export default BottomSwiper;
