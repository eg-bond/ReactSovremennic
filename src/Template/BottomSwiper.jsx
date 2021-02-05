import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";
import Media from "react-media";

const BottomSwiper = (props) => {

    const [opacity, turnOpacity] = useState(0);
    const [bottomSwiper, updateSwiper] = useState(null);

    const turnAutoplay = (action) => {
        if (bottomSwiper !== null) {
            action === "stop" ? bottomSwiper.autoplay.stop() : bottomSwiper.autoplay.start();
        }
    };

    if (props.films[0] === undefined) {
        return null;
    }

    const params = {
        slidesPerView: props.slidesPerView,
        spaceBetween: props.slidesPerView === 2 ? 100 : 20,
        centeredSlides: false,
        loop: true,
        containerClass: `bottomSwiper swiper-container ${opacity===1 ? 'opacity_1' : 'opacity_0'}`,
        wrapperClass: 'swiper-wrapper ',
        slideClass: 'swiper-slide',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            imagesReady: () => {turnOpacity(1)}
        },
    };

    return (
        <Media query="(min-width: 768px) and (min-height: 500px)">
            <div>
                <div className="swiper_bar"><h1>Сегодня в кино</h1></div>
                <div onMouseEnter={() => turnAutoplay("stop")} onMouseLeave={() => turnAutoplay("start")}>
                    <Swiper getSwiper={updateSwiper} {...params}>
                        {
                            props.films.map( f => <div key={f.link}>
                                <NavLink to={f.link}>
                                    <img className="opacity" src={`./Images/description/${f.link}_D.jpg`} alt=""/>
                                    <h1>{f.title}</h1>
                                    <p>{f.kind.split(", ")[0]}</p>
                                </NavLink>
                            </div>)
                        }
                    </Swiper>
                </div>
            </div>
        </Media>
    )
};



export default BottomSwiper;
