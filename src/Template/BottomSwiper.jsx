import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";

const BottomSwiper = (props) => {

    let [opacity, turnOpacity] = useState(0);

    if (props.films[0] === undefined) {
        return null;
    }

    const params = {
        slidesPerView: props.slidesPerView,
        spaceBetween: props.slidesPerView === 2 ? 100 : 20,
        centeredSlides: false,
        loop: true,
        containerClass: `swiper-bottom swiper-container slides_3 ${opacity === props.films.length ? 'opacity_1' : 'opacity_0'}`,
        wrapperClass: 'swiper-wrapper ',
        slideClass: 'swiper-slide',
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    };

    return (
        <div>
            <div className="swiper_bar hidden-xs"><h2>Сегодня в кино</h2></div>
            <Swiper {...params}>
                {
                    props.films.map( f => <div key={f.link}>
                        <NavLink to={f.link}>
                            <img onLoad={() => turnOpacity(opacity + 1)} className="opacity"
                                 src={`./Images/description/${f.link}_D.jpg`} alt=""/>
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
