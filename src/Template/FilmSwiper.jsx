import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";
import Media from 'react-media';

const FilmSwiper = (props) => {
    const [opacity, turnOpacity] = useState(0);
    const [filmSwiper, updateSwiper] = useState(null);

    const turnAutoplay = (action) => {
        if (filmSwiper !== null) {
            action === "stop" ? filmSwiper.autoplay.stop() : filmSwiper.autoplay.start();
        }
    };

    const params = {
        slidesPerView: 5.5,
        spaceBetween: 15,
        centeredSlides: false,
        observer: true,
        observeParents: true,
        containerClass: 'filmSwiper swiper-container',
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },

        breakpoints: {
            250: {
                slidesPerView: 3.5,
                spaceBetween: 9,
                freeMode: true
            },
            768: {
                slidesPerView: 5.5,
                spaceBetween: 8,
                freeMode: false,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
            }
        },
        on: {
            imagesReady: function () {
                turnOpacity(1);
            },
        }
    };

    return (<>
                <div onMouseEnter={() => turnAutoplay("stop")} onMouseLeave={() => turnAutoplay("start")}
                     className={`cinemaSlider ${opacity===1 ? 'opacity_1' : 'opacity_0'}`}>
                    <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)"><h4>Фильмы</h4></Media>
                    <Swiper getSwiper={updateSwiper} {...params}>
                        {
                            props.films.map(f => <div key={f.link}>
                                <NavLink to={f.link}>
                                    <img className="opacity"
                                         src={`./Images/top_menu/${f.link}.gif`} alt={f.title}/>
                                    <h1>{f.title}</h1>
                                    <p>{f.beginDate}</p>
                                </NavLink>
                            </div>)
                        }
                    </Swiper>
                </div>
        </>
    )
};

export default FilmSwiper;
