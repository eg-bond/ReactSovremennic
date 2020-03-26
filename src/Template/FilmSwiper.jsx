import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import {NavLink} from "react-router-dom";
import Media from 'react-media';

const FilmSwiper = (props) => {
    const params = {
        slidesPerView: 5.5,
        spaceBetween: 15,
        centeredSlides: false,
        observer: true,
        observeParents: true,
        containerClass: 'film-swiper swiper-container',
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
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
            250: {
                slidesPerView: 3.5,
                spaceBetween: 9
            },
            768: {
                slidesPerView: 5.5,
                spaceBetween: 8
            }
        }
    }

    let [opacity, turnOpacity] = useState(0);

    return (<>
            <div className={`top-menu ${opacity===props.films.length ? 'opacity_1' : 'opacity_0'}`}>
                <Media query="(max-width: 768px)"><h4>Фильмы</h4></Media>
                <Swiper {...params}>
                    {
                        props.films.map(f => <div key={f.link}>
                            <NavLink to={f.link}>
                                <img onLoad={() => turnOpacity(opacity + 1)} className="opacity"
                                     src={`./Images/top_menu/${f.link}.gif`} alt={`${f.link}_img`} />
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
