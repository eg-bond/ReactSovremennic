import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from "./Content/About/About";
import TopSwiper from "./Template/TopSwiper";
import {BrowserRouter, Route} from "react-router-dom";
import Cinema from "./Content/Cinema/Cinema";
import Navigation from "./Template/Navigation/Navigation";
import Rules from "./Content/Rules/Rules";
import BottomSwiper from "./Template/BottomSwiper";
import Footer from "./Template/Footer";
import Seans from "./Content/Seans/Seans";
import Sushi from "./Content/Sushi/Sushi";
import '../node_modules/swiper/css/swiper.css';
import IndexContent from "./Content/IndexContent/IndexContent";
import './App.css';
import SwiperXs from "./Template/SwiperXs";

const films = [ // Массив с данными по всем фильмам

    { title: 'Джокер',
        beginDate: 'с 3 октября',
        endDate: 'по 23 октября',
        kind: 'Триллер',
        topImgPath: './Images/top_menu/joker.gif',
        bottomImgPath: 'films/description/joker_D.jpg',
        playerCode: 'jGfiPs9zuhE',
        link: 'joker' },

    { title: 'Гемини',
        beginDate: 'с 10 октября',
        endDate: 'по 30 октября',
        kind: 'Боевик',
        topImgPath: './Images/top_menu/gemini.gif',
        bottomImgPath: 'films/description/gemini_D.jpg',
        playerCode: 'Io6_zfPA1BE',
        link: 'gemini' },

    { title: 'Малефисента: Владычица тьмы',
        beginDate: 'с 17 октября',
        endDate: 'по 6 ноября',
        kind: 'Фэнтези',
        topImgPath: './Images/top_menu/maleficent.gif',
        bottomImgPath: 'films/description/maleficent_D.jpg',
        playerCode: 'L0ttxMz-tyo',
        link: 'maleficent' },

    { title: 'Zомбилэнд: Контрольный Выстрел',
        beginDate: 'с 24 октября',
        endDate: 'по 6 ноября',
        kind: 'Боевик',
        topImgPath: './Images/top_menu/zombieland.gif',
        bottomImgPath: 'films/description/zombieland_D.jpg',
        playerCode: 'E3CPPp8CXHM',
        link: 'zombieland' },

    { title: 'Терминатор: Темные судьбы',
        beginDate: 'с 31 октября',
        endDate: 'по 13 ноября',
        kind: 'Боевик',
        topImgPath: './Images/top_menu/terminator.gif',
        bottomImgPath: 'films/description/terminator_D.jpg',
        playerCode: 'A36LahZNUiE',
        link: 'terminator' },

    { title: 'Девятая',
        beginDate: 'с 7 ноября',
        endDate: 'по 20 ноября',
        kind: 'Триллер',
        topImgPath: './Images/top_menu/nine.gif',
        bottomImgPath: 'films/description/nine_D.jpg',
        playerCode: '6CdM9JrcYRg',
        link: 'nine' },

    { title: 'Доктор Сон',
        beginDate: 'с 7 ноября',
        endDate: 'по 27 ноября',
        kind: 'Ужасы',
        topImgPath: './Images/top_menu/sleep.gif',
        bottomImgPath: 'films/description/sleep_D.jpg',
        playerCode: 'bkhjbv9UbPI',
        link: 'sleep' }
]

const filmsToday = [ // Массив с данными по всем фильмам

    { title: 'Джокер',
        beginDate: 'с 3 октября',
        endDate: 'по 23 октября',
        kind: 'Триллер',
        topImgPath: 'films/top_menu/joker.gif',
        bottomImgPath: 'films/description/joker_D.jpg',
        playerCode: 'jGfiPs9zuhE',
        link: 'joker.html' },

    { title: 'Гемини',
        beginDate: 'с 10 октября',
        endDate: 'по 30 октября',
        kind: 'Боевик',
        topImgPath: 'films/top_menu/gemini.gif',
        bottomImgPath: 'films/description/gemini_D.jpg',
        playerCode: 'Io6_zfPA1BE',
        link: 'gemini.html' },

    { title: 'Малефисента: Владычица тьмы',
        beginDate: 'с 17 октября',
        endDate: 'по 6 ноября',
        kind: 'Фэнтези',
        topImgPath: 'films/top_menu/maleficent.gif',
        bottomImgPath: 'films/description/maleficent_D.jpg',
        playerCode: 'L0ttxMz-tyo',
        link: 'maleficent.html' }
]

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />

                <div id="menu_anchor" className="container line_container">
                    <div className="row">
                        <hr className="line_5px"></hr>
                    </div>
                </div>
                <div className="separator"></div>

                <div className="container wrapper">
                    <div className="row">
                        <TopSwiper films = {films}/>
                        <hr className="line_5px hidden-xs"></hr>

                        <Route exact path='/' component={IndexContent}/>
                        <Route path='/about' component={About}/>
                        <Route path='/rules' component={Rules}/>
                        <Route path='/seans' component={Seans}/>
                        <Route path='/sushi' component={Sushi}/>
                        <Cinema />


                        <BottomSwiper />

                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
