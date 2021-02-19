import React, {useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from "./Content/About/About";
import FilmSwiper from "./Template/FilmSwiper";
import {Route, useParams} from "react-router-dom";
import Cinema from "./Content/Cinema/Cinema";
import Navigation from "./Template/Navigation";
import Rules from "./Content/Rules/Rules";
import Advertising from "./Content/Advertising/Advertising";
import BottomSwiper from "./Template/BottomSwiper";
import Footer from "./Template/Footer";
import Seans from "./Content/Seans/Seans";
import Sushi from "./Content/Sushi/Sushi";
import '../node_modules/swiper/css/swiper.css';
import IndexContent from "./Content/IndexContent/IndexContent";
import './SCSS/style.scss';
import Media from 'react-media';
import AdvXS from "./Template/AdvXS";
import {initialButtonTitle, initialActiveKey, createActualDatesArr} from "./REDUX/seansReduser";
import {compose} from "redux";
import {connect} from "react-redux";
import Adv from "./Template/Adv";
import ScrollToTop from "./Template/ScrollToTop";
import {createFilmsTodayArr} from "./REDUX/cinemaReduser";
import {switchFontSize, switchSiteMode} from "./REDUX/specialReduser";
import {currentFontSizeClass, modifiedClass, themeClasses} from "./helpers";
import FilmsSpecialPage from "./Content/Films/FilmsSpecialPage";

const App = ({createActualDatesArr, initialActiveKey, initialButtonTitle, createFilmsTodayArr,
                 films, filmsToday, filmsTodaySlides, switchSiteMode, siteMode, theme, imgHidden,
                 switchFontSize, fontSize}) => {

    useEffect(() => {
        createActualDatesArr();
        initialActiveKey();
        initialButtonTitle();
        createFilmsTodayArr();
        // switchFontSize(fontSize);
    }, [createActualDatesArr, initialActiveKey, initialButtonTitle, createFilmsTodayArr]);

    let { id } = useParams();
    // style={{backgroundImage: "url(./Images/main_image.jpg)"}}
    const classHandler = (cl) => modifiedClass(cl, siteMode)
    const themeCl = themeClasses(theme)
    let currentFS = currentFontSizeClass(fontSize) || 'fontSize__100'

    return (
        <div className={`${classHandler("mainContainer")} ${siteMode === 'special' ? themeCl.back : ''} ${themeCl.elems} ${currentFS}`}>
            <Media query="(max-width: 767.5px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                <ScrollToTop/>
            </Media>
            <Navigation siteMode={siteMode} switchSiteMode={switchSiteMode} theme={theme} themeCl={themeCl} fontSize={fontSize}/>

            <div id="menu_anchor" className="container line_container">
                <div className="row">
                    {/*<hr className="line_5px"/>*/}
                </div>
            </div>

            <div className="separator"/>

            <div className={`container wrapper ${themeCl.back} ${themeCl.borders} ${imgHidden && 'hideImages'}`}>
                <div className="row">

                    <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                        <div>
                            <AdvXS/>
                            <div className="separator"/>
                        </div>
                    </Media>

                    {siteMode === "default" && <Media query="(min-width: 768px) and (min-height: 500px)">
                        <FilmSwiper films={films}/>
                    </Media>}

                    <Route exact path="/">
                        <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                            <FilmSwiper films={films}/>
                        </Media>
                    </Route>

                    <hr className={`line_5px hidden-xs ${themeCl.borders}`}/>

                    <Route exact path="/"><IndexContent siteMode={siteMode} films={films}/></Route>
                    <Route exact path="/about"><About siteMode={siteMode}/></Route>
                    <Route exact path="/rules"><Rules/></Route>
                    <Route exact path="/seans"><Seans themeCl={themeCl}/></Route>
                    <Route exact path="/sushi"><Sushi themeCl={themeCl} siteMode={siteMode}/></Route>
                    {siteMode === "special" && <Route exact path="/films"><FilmsSpecialPage films={films}/></Route>}
                    <Route exact path="/advertising"><Advertising /></Route>
                    <Cinema films={films} filmsToday={filmsToday} siteMode={siteMode} themeCl={themeCl}/>

                    <Media query="(min-width: 768px) and (min-height: 500px)">
                        {id !== "sushi" && <Adv/>}
                    </Media>

                    {siteMode === "default" && filmsToday !== [] && <BottomSwiper films={filmsToday} slidesPerView={filmsTodaySlides}/>}

                    {id != null && (
                        <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                            <div>
                                <div className="separator"/>
                                <FilmSwiper films={films}/>
                            </div>
                        </Media>
                    )}

                </div>
            </div>
            <Footer themeCl={themeCl}/>
        </div>
    );

}

let mapStateToProps = (state) => ({
    films: state.cinema.films,
    filmsToday: state.cinema.filmsToday,
    filmsTodaySlides: state.cinema.filmsTodaySlides,
    siteMode: state.special.siteMode,
    theme: state.special.theme,
    imgHidden: state.special.imgHidden,
    fontSize: state.special.fontSize
});

export default compose(
    connect(mapStateToProps, {initialActiveKey, initialButtonTitle, createActualDatesArr, createFilmsTodayArr, switchSiteMode, switchFontSize})
)(App);
