import React from 'react';
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
            1200: {
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5.5,
            },
            250: {
                slidesPerView: 3.5
            }
        }
    }


    return (<>
            <div className='top-menu'>
                <Media query="(max-width: 768px)"><h4>Фильмы</h4></Media>
                <Swiper {...params}>
                    {
                        props.films.map(f => <div key={f.link}>
                            <NavLink to={f.link}>
                                <img className="opacity" src={f.topImgPath}></img>
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