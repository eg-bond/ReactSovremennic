import React, {useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from "./Content/About/About";
import FilmSwiper from "./Template/FilmSwiper";
import {Route, useParams} from "react-router-dom";
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
import {useMediaQuery} from "react-responsive";
import Media from 'react-media';
import AdvXS from "./Template/AdvXS";
import {initialButtonTitle, initialActiveKey, createActualDatesArr} from "./REDUX/seansReduser";
import {compose} from "redux";
import {connect} from "react-redux";
import Adv from "./Template/Adv";
import ScrollToTop from "./Content/Cinema/Scroll";
import {createFilmsTodayArr} from "./REDUX/cinemaReduser";


const App = (props) => {

    useEffect(() => {
        props.createActualDatesArr();
        props.initialActiveKey();
        props.initialButtonTitle();
        props.createFilmsTodayArr();
    }, []);

    let { id } = useParams();

    return (
            <div>
                <Media query="(max-width: 768px)">
                    <ScrollToTop />
                </Media>
                <Navigation />

                <div id="menu_anchor" className="container line_container">
                    <div className="row">
                        <hr className="line_5px"/>
                    </div>
                </div>

                <div className="separator"/>

                <div className="container wrapper">
                    <div className="row">

                        <Media query="(min-width: 768px)">
                            <FilmSwiper films = {props.films}/>
                        </Media>

                        <Route exact path="/">
                            <Media query="(max-width: 768px)">
                                <FilmSwiper films = {props.films}/>
                            </Media>
                        </Route>

                        <hr className="line_5px hidden-xs"/>

                        <Route exact path="/"><IndexContent /></Route>
                        <Route exact path="/about"><About /></Route>
                        <Route exact path="/rules"><Rules /></Route>
                        <Route exact path="/seans"><Seans /></Route>
                        <Route exact path="/sushi"><Sushi /></Route>
                        <Cinema films={props.films} filmsToday={props.filmsToday}/>

                        {id != "sushi" && <Adv/>}

                        {
                            props.filmsToday != [] &&
                            <Media query="(min-width: 768px)">
                                <BottomSwiper films={props.filmsToday} slidesPerView={props.filmsTodaySlides}/>
                            </Media>
                        }

                        {id != null && (
                            <Media query="(max-width: 768px)">
                                <div>
                                    <div className="separator"/>
                                    <FilmSwiper films={props.films}/>
                                    <div className="separator"/>
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

let mapStateToProps = (state) => ({
    films: state.cinema.films,
    filmsToday: state.cinema.filmsToday,
    filmsTodaySlides: state.cinema.filmsTodaySlides,
});


export default compose(
    connect(mapStateToProps, {initialActiveKey, initialButtonTitle, createActualDatesArr, createFilmsTodayArr})
)(App);
