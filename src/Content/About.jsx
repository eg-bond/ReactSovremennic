import React from 'react';
import s from './About.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import TopSwiper from "../Template/TopSwiper";
import SwiperDefault from "../Template/SwiperDefault";


function About() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="space"></div>
                    <nav role="navigation" className="navbar_custom navigation">

                        <a href="index.html"><img src="./Images/logo.jpg"
                                                  className="col-lg-2 col-md-2 col-sm-2 col-xs-3 logo"></img></a>

                        <div id="navbarcollapse" className="navbar-collapse col-lg-10 col-md-10 col-sm-10 col-xs-9">
                            <ul className="nav nav-pills">
                                <li><a href="seans.html">Расписание</a></li>
                                <li className="active"><a href="about.html">О кинотеатре</a></li>
                                <li><a href="rules.html">Правила работы</a></li>
                                <li><a href="sushi.html">Суши-бар "КИН-НО"</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/*<TopSwiper />*/}
            <SwiperDefault />


            <div>Line5px</div>
            <div>separator-xs</div>
            <div>
                <div>
                    row
                    <div>
                        top_swiper
                    </div>
                    hr
                    <div>
                        about_content
                    </div>
                    <div>
                        adv
                    </div>
                    <div>separator-xs</div>
                    <div>
                        bottom_swiper
                    </div>
                </div>
            </div>
            <div>footer</div>
            <div>skripts</div>
        </div>
    );
}

export default About;