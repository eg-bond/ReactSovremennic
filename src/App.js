import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from './Content/About/About'
import FilmSwiper from './Template/FilmSwiper'
import { Route, useParams } from 'react-router-dom'
import CinemaRoutes from './Content/Cinema/Cinema'
import Navigation from './Template/Navigation'
import Rules from './Content/Rules/Rules'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import Seans from './Content/Seans/Seans'
import '../node_modules/swiper/css/swiper.css'
import IndexContent from './Content/IndexContent/IndexContent'
import './SCSS/style.scss'
import AdvXS from './Template/AdvXS'
import {
  initialButtonTitle,
  initialActiveKey,
  createActualDatesArr,
} from './REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Adv from './Template/Adv'
import ScrollToTop from './Template/ScrollToTop'
import { createFilmsTodayArr } from './REDUX/cinemaReduser'
import { queries } from './helpers'
import FilmsSpecialPage from './Content/Films/FilmsSpecialPage'
import { useSpecialContext } from './SpecialContext'
import { useMediaQuery } from '@material-ui/core'
import SushiContainer from './Content/Sushi/SushiContainer'

const App = React.memo(
  ({
    createActualDatesArr,
    initialActiveKey,
    initialButtonTitle,
    createFilmsTodayArr,
    films,
    filmsToday,
    filmsTodaySlides,
  }) => {
    let { id } = useParams()

    // Инициализационные эффекты
    useEffect(() => {
      createActualDatesArr()
      initialActiveKey()
      initialButtonTitle()
      createFilmsTodayArr()
    }, [
      createActualDatesArr,
      initialActiveKey,
      initialButtonTitle,
      createFilmsTodayArr,
    ])

    const {
      switchSiteMode,
      siteMode,
      themeCl,
      fontSize,
      imgHidden,
    } = useSpecialContext()

    let currentFS = `fontSize__${fontSize}` || 'fontSize__100'

    if (id === 'films' && siteMode === 'default') {
      window.location.hash = '#/'
    }

    const Q = {
      mobile: useMediaQuery(queries.mobile),
      desktop: useMediaQuery(queries.desktop),
    }

    // const ResizeFunc = () => {
    //   if (
    //     window.matchMedia(queries.mobile).matches &
    //     (siteMode === 'special')
    //   ) {
    //     switchSiteMode('default')
    //   }

    //   return null
    // }

    const switchModeOnResize = () => {
      Q.mobile && siteMode === 'special' && switchSiteMode('default')
    }

    const routes = () => (
      <>
        <Route exact path='/'>
          <IndexContent siteMode={siteMode} films={films} Q={Q} />
        </Route>
        <Route exact path='/about'>
          <About siteMode={siteMode} />
        </Route>
        <Route exact path='/rules'>
          <Rules />
        </Route>
        <Route exact path='/seans'>
          <Seans
            themeCl={themeCl}
            siteMode={siteMode}
            fontSize={fontSize}
            Q={Q}
          />
        </Route>
        <Route exact path='/sushi'>
          <SushiContainer Q={Q} siteMode={siteMode} />
        </Route>
        <CinemaRoutes films={films} Q={Q} />
        {siteMode === 'special' && (
          <Route exact path='/films'>
            <FilmsSpecialPage films={films} />
          </Route>
        )}
      </>
    )
    console.log('App render')
    return (
      <div
        className={`${
          siteMode === 'special' ? themeCl.back : 'mainContainer'
        } ${themeCl.elems} ${currentFS}`}>
        {Q.mobile && <ScrollToTop />}
        {/* {Q.mobile && <ResizeFunc />} */}

        <Navigation />

        {/*Отступ навигации в мобильной версии*/}
        <div className='line_container' />

        <div className='separator' />

        <div
          className={`container wrapper ${themeCl.back} ${themeCl.borders} ${
            imgHidden && 'hideImages'
          }`}>
          <div className='row'>
            {Q.mobile && (
              <>
                <AdvXS />
                <div className='separator' />
              </>
            )}

            {siteMode === 'default' && Q.desktop && (
              <FilmSwiper films={films} mobile={Q.mobile} />
            )}

            {Q.mobile && (
              <Route exact path='/'>
                <FilmSwiper films={films} />
              </Route>
            )}

            <hr className={`line_5px hidden-xs ${themeCl.borders}`} />

            {routes()}

            {Q.desktop && id !== 'sushi' && <Adv />}

            {siteMode === 'default' && filmsToday !== [] && (
              <BottomSwiper
                films={filmsToday}
                slidesPerView={filmsTodaySlides}
                desktop={Q.desktop}
              />
            )}

            {id != null && Q.mobile && (
              <>
                <div className='separator' />
                <FilmSwiper films={films} mobile={Q.mobile} />
              </>
            )}
          </div>
        </div>
        <Footer themeCl={themeCl} />
      </div>
    )
  }
)

let mapStateToProps = state => ({
  films: state.cinema.films,
  filmsToday: state.cinema.filmsToday,
  filmsTodaySlides: state.cinema.filmsTodaySlides,
})

export default compose(
  connect(mapStateToProps, {
    initialActiveKey,
    initialButtonTitle,
    createActualDatesArr,
    createFilmsTodayArr,
  })
)(App)
