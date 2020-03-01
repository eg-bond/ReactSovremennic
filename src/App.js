import React, {useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from "./Content/About/About";
import FilmSwiper from "./Template/FilmSwiper";
import {BrowserRouter, Route, useParams} from "react-router-dom";
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
import {useMediaQuery} from "react-responsive";
import MediaFragment from "./Content/MediaFragment";
import Media from 'react-media';
import AdvXS from "./Template/AdvXS";
import SeansContainer from "./Content/Seans/SeansContainer";
import {initialActiveKey} from "./REDUX/seansReduser";
import {compose} from "redux";
import {connect} from "react-redux";


const films = [ // Массив с данными по всем фильмам

    { title: 'Джокер',
        beginDate: 'с 3 октября',
        endDate: 'по 23 октября',
        kind: 'Триллер',
        topImgPath: './Images/top_menu/joker.gif',
        bottomImgPath: 'Images/description/joker_D.jpg',
        playerCode: 'jGfiPs9zuhE',
        link: 'joker' },

    { title: 'Гемини',
        beginDate: 'с 10 октября',
        endDate: 'по 30 октября',
        kind: 'Боевик',
        topImgPath: './Images/top_menu/gemini.gif',
        bottomImgPath: 'Images/description/gemini_D.jpg',
        playerCode: 'Io6_zfPA1BE',
        link: 'gemini' },

    { title: 'Малефисента: Владычица тьмы',
        beginDate: 'с 17 октября',
        endDate: 'по 6 ноября',
        kind: 'Фэнтези',
        topImgPath: './Images/top_menu/maleficent.gif',
        bottomImgPath: 'Images/description/maleficent_D.jpg',
        playerCode: 'L0ttxMz-tyo',
        link: 'maleficent' },

    { title: 'Zомбилэнд: Контрольный Выстрел',
        beginDate: 'с 24 октября',
        endDate: 'по 6 ноября',
        kind: 'Боевик',
        topImgPath: './Images/top_menu/zombieland.gif',
        bottomImgPath: 'Images/description/zombieland_D.jpg',
        playerCode: 'E3CPPp8CXHM',
        link: 'zombieland' },

    { title: 'Терминатор: Темные судьбы',
        beginDate: 'с 31 октября',
        endDate: 'по 13 ноября',
        kind: 'Боевик',
        topImgPath: './Images/top_menu/terminator.gif',
        bottomImgPath: 'Images/description/terminator_D.jpg',
        playerCode: 'A36LahZNUiE',
        link: 'terminator' },

    { title: 'Девятая',
        beginDate: 'с 7 ноября',
        endDate: 'по 20 ноября',
        kind: 'Триллер',
        topImgPath: './Images/top_menu/nine.gif',
        bottomImgPath: 'Images/description/nine_D.jpg',
        playerCode: '6CdM9JrcYRg',
        link: 'nine' },

    { title: 'Доктор Сон',
        beginDate: 'с 7 ноября',
        endDate: 'по 27 ноября',
        kind: 'Ужасы',
        topImgPath: './Images/top_menu/sleep.gif',
        bottomImgPath: 'Images/description/sleep_D.jpg',
        playerCode: 'bkhjbv9UbPI',
        link: 'sleep' }
]

const filmsToday = [ // Массив с данными по всем фильмам

    { title: 'Джокер',
        beginDate: 'с 3 октября',
        endDate: 'по 23 октября',
        kind: 'Триллер',
        topImgPath: 'Images/top_menu/joker.gif',
        bottomImgPath: 'Images/description/joker_D.jpg',
        playerCode: 'jGfiPs9zuhE',
        link: 'joker' },

    { title: 'Гемини',
        beginDate: 'с 10 октября',
        endDate: 'по 30 октября',
        kind: 'Боевик',
        topImgPath: 'Images/top_menu/gemini.gif',
        bottomImgPath: 'Images/description/gemini_D.jpg',
        playerCode: 'Io6_zfPA1BE',
        link: 'gemini' },

    { title: 'Малефисента: Владычица тьмы',
        beginDate: 'с 17 октября',
        endDate: 'по 6 ноября',
        kind: 'Фэнтези',
        topImgPath: 'Images/top_menu/maleficent.gif',
        bottomImgPath: 'Images/description/maleficent_D.jpg',
        playerCode: 'L0ttxMz-tyo',
        link: 'maleficent' },

    { title: 'Девятая',
        beginDate: 'с 7 ноября',
        endDate: 'по 20 ноября',
        kind: 'Триллер',
        topImgPath: './Images/top_menu/nine.gif',
        bottomImgPath: 'Images/description/nine_D.jpg',
        playerCode: '6CdM9JrcYRg',
        link: 'nine' }
]

const App = (props) => {

    useEffect(() => {
        props.initialActiveKey();
    }, []);

    let { id } = useParams();
    return (
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


                        <Media query="(min-width: 768px)">
                            <FilmSwiper films = {films}/>
                        </Media>
                        <Route exact path="/">
                            <Media query="(max-width: 768px)">
                                <FilmSwiper films = {films}/>
                            </Media>
                        </Route>

                        <hr className="line_5px hidden-xs"></hr>

                        <Route exact path="/"><IndexContent films = {films}/></Route>
                        <Route exact path="/about"><About films = {films}/></Route>
                        <Route exact path="/rules"><Rules films = {films}/></Route>
                        <Route exact path="/seans"><SeansContainer films = {films}/></Route>
                        <Route exact path="/sushi"><Sushi films = {films}/></Route>
                        <Cinema />


                        <Media query="(min-width: 768px)">
                            <BottomSwiper films ={filmsToday}/>
                        </Media>
                        {id != null && (
                            <Media query="(max-width: 768px)">
                                <div>
                                    <div className="separator"></div>
                                    <FilmSwiper films={films}/>
                                    <div className="separator"></div>
                                    <AdvXS />
                                </div>
                            </Media>
                        )}



                    </div>
                </div>
                <Footer />
            </div>

    );
}


export default compose(
    connect(null, {initialActiveKey})
)(App);
