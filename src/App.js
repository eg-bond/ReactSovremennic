import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from "./Content/About/About"
import FilmSwiper from "./Template/FilmSwiper"
import { Route, useParams } from "react-router-dom"
import CinemaRoutes from "./Content/Cinema/Cinema"
import Navigation from "./Template/Navigation"
import Rules from "./Content/Rules/Rules"
import Advertising from "./Content/Advertising/Advertising"
import BottomSwiper from "./Template/BottomSwiper"
import Footer from "./Template/Footer"
import Seans from "./Content/Seans/Seans"
import Sushi from "./Content/Sushi/Sushi"
import '../node_modules/swiper/css/swiper.css'
import IndexContent from "./Content/IndexContent/IndexContent"
import './SCSS/style.scss'
import Media from 'react-media'
import AdvXS from "./Template/AdvXS"
import { initialButtonTitle, initialActiveKey, createActualDatesArr } from "./REDUX/seansReduser"
import { compose } from "redux"
import { connect } from "react-redux"
import Adv from "./Template/Adv"
import ScrollToTop from "./Template/ScrollToTop"
import { createFilmsTodayArr } from "./REDUX/cinemaReduser"
import { switchFontSize, switchSiteMode } from "./REDUX/specialReduser"
import { currentFontSizeClass, themeClasses, queries } from "./helpers"
import FilmsSpecialPage from "./Content/Films/FilmsSpecialPage"
import { useResizeDetector } from 'react-resize-detector'
import { useCallback } from 'react'

const App = React.memo(({ createActualDatesArr, initialActiveKey, initialButtonTitle, createFilmsTodayArr,
    films, filmsToday, filmsTodaySlides, switchSiteMode, siteMode, theme, imgHidden, fontSize }) => {

    let { id } = useParams();
    let currentFS = currentFontSizeClass(fontSize) || 'fontSize__100'
    const themeCl = themeClasses(theme)

    // библиотека для удобного наблюдения за ресайзом DOM элемента
    const { width, ref: observedRef } = useResizeDetector();

    const switchSiteModeHandler = useCallback(mode => {
        if (id === 'films') {
            window.location.hash = '#/'
        }
        switchSiteMode(mode);
    }, [switchSiteMode, id],);

    // Инициализационные эффекты
    useEffect(() => {
        createActualDatesArr();
        initialActiveKey();
        initialButtonTitle();
        createFilmsTodayArr();
    }, [createActualDatesArr, initialActiveKey, initialButtonTitle, createFilmsTodayArr]);

    // Переключение на стандартную версию сайта при переходе в мобильный режим
    useEffect(() => {
        if (siteMode === 'special') {
            window.matchMedia(queries.mobile).matches && switchSiteModeHandler('default')
        }
    }, [width, siteMode, switchSiteModeHandler])

    return (
        <div className={`${siteMode === 'special' ? themeCl.back : 'mainContainer'} ${themeCl.elems} ${currentFS}`}>

            <Media query={queries.mobile}>
                <ScrollToTop />
            </Media>

            <Navigation siteMode={siteMode} switchSiteMode={switchSiteModeHandler} theme={theme} themeCl={themeCl} fontSize={fontSize} />

            {/*Отступ навигации в мобильной версии*/}
            <div className="line_container" />

            <div className="separator" />

            <div ref={observedRef} className={`container wrapper ${themeCl.back} ${themeCl.borders} ${imgHidden && 'hideImages'}`}>
                <div className="row">

                    <Media query={queries.mobile}>
                        <div>
                            <AdvXS />
                            <div className="separator" />
                        </div>
                    </Media>

                    {siteMode === "default" && <Media query={queries.desktop}>
                        <FilmSwiper films={films} />
                    </Media>}

                    <Route exact path="/">
                        <Media query={queries.mobile}>
                            <FilmSwiper films={films} />
                        </Media>
                    </Route>

                    <hr className={`line_5px hidden-xs ${themeCl.borders}`} />

                    <Route exact path="/"><IndexContent siteMode={siteMode} films={films} /></Route>
                    <Route exact path="/about"><About siteMode={siteMode} /></Route>
                    <Route exact path="/rules"><Rules /></Route>
                    <Route exact path="/seans"><Seans themeCl={themeCl} siteMode={siteMode} /></Route>
                    <Route exact path="/sushi"><Sushi themeCl={themeCl} siteMode={siteMode} /></Route>
                    <Route exact path="/advertising"><Advertising /></Route>
                    <CinemaRoutes films={films} filmsToday={filmsToday} siteMode={siteMode} themeCl={themeCl} fontSize={fontSize} />
                    {siteMode === "special" && <Route exact path="/films"><FilmsSpecialPage films={films} /></Route>}

                    <Media query={queries.desktop}>
                        {id !== "sushi" && <Adv />}
                    </Media>

                    {siteMode === "default" && filmsToday !== [] && <BottomSwiper films={filmsToday} slidesPerView={filmsTodaySlides} />}

                    {id != null && (
                        <Media query={queries.mobile}>
                            <div>
                                <div className="separator" />
                                <FilmSwiper films={films} />
                            </div>
                        </Media>
                    )}

                </div>
            </div>
            <Footer themeCl={themeCl} />
        </div>
    );

})

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
    connect(mapStateToProps, { initialActiveKey, initialButtonTitle, createActualDatesArr, createFilmsTodayArr, switchSiteMode, switchFontSize })
)(App);
