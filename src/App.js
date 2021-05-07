import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
<<<<<<< HEAD
import FilmSwiper from './Template/FilmSwiper'
import { Route, useLocation } from 'react-router-dom'
import Navigation from './Template/Navigation'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import '../node_modules/swiper/css/swiper.css'
import './SCSS/style.scss'
=======
import About from './Content/About/About'
import FilmSwiper from './Template/FilmSwiper'
import { Route, useParams } from 'react-router-dom'
import CinemaRoutes from './Content/Cinema/Cinema'
import Navigation from './Template/Navigation'
import Rules from './Content/Rules/Rules'
import Advertising from './Content/Advertising/Advertising'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import Seans from './Content/Seans/Seans'
import Sushi from './Content/Sushi/Sushi'
import '../node_modules/swiper/css/swiper.css'
import IndexContent from './Content/IndexContent/IndexContent'
import './SCSS/style.scss'
import Media from 'react-media'
>>>>>>> master
import AdvXS from './Template/AdvXS'
import {
  initialButtonTitle,
  initialActiveKey,
  createActualDatesArr,
} from './REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Adv from './Template/Adv'
<<<<<<< HEAD
import { createFilmsTodayArr, createFilmsObject } from './REDUX/cinemaReduser'
import { switchSiteMode, switchFontSize } from './REDUX/specialReduser'
import { queries, scrollToTop, themeClasses } from './helpers'
import { useMediaQuery } from '@material-ui/core'
import Content from './Content/Content'
=======
import ScrollToTop from './Template/ScrollToTop'
import { createFilmsTodayArr } from './REDUX/cinemaReduser'
import { switchFontSize, switchSiteMode } from './REDUX/specialReduser'
import { currentFontSizeClass, themeClasses, queries } from './helpers'
import FilmsSpecialPage from './Content/Films/FilmsSpecialPage'
import { useCallback } from 'react'
>>>>>>> master

const App = React.memo(
  ({
    createActualDatesArr,
    initialActiveKey,
    initialButtonTitle,
    createFilmsTodayArr,
    films,
    filmsToday,
    filmsTodaySlides,
<<<<<<< HEAD
    filmsObject,
    createFilmsObject,
=======
>>>>>>> master
    switchSiteMode,
    siteMode,
    theme,
    imgHidden,
    fontSize,
  }) => {
<<<<<<< HEAD
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

    let { pathname } = useLocation()
    const themeCl = themeClasses(theme)

    let mainContainerClasses = [
      siteMode === 'special' ? themeCl.back : 'mainContainer',
      themeCl.elems,
      `fontSize__${fontSize}` || 'fontSize__100',
    ].join(' ')
=======
    let { id } = useParams()
    let currentFS = currentFontSizeClass(fontSize) || 'fontSize__100'
    const themeCl = themeClasses(theme)

    if (id === 'films' && siteMode === 'default') {
      window.location.hash = '#/'
    }

    const switchSiteModeHandler = useCallback(
      mode => {
        switchSiteMode(mode)
      },
      [switchSiteMode]
    )
>>>>>>> master

    // Queries
    const Q = {
      mobile: useMediaQuery(queries.mobile),
      desktop: useMediaQuery(queries.desktop),
    }
    // Меняет версию сайта на 'default' при переходе с десктопной версии в мобильную
    useEffect(() => {
<<<<<<< HEAD
      if (Q.mobile && siteMode === 'special') {
        switchSiteMode('default')
      }
    }, [Q.mobile, switchSiteMode, siteMode])

    // Автоматический скролл наверх для мобильной версии
    if (Q.mobile || siteMode === 'special') {
      scrollToTop()
    }

    return (
      <div className={mainContainerClasses}>
        <Navigation siteMode={siteMode} fontSize={fontSize} theme={theme} />

        {/*Отступ навигации в мобильной версии*/}
        <div className='line_container' />
=======
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

    const ResizeFunc = () => {
      window.matchMedia(queries.mobile).matches &&
        switchSiteModeHandler('default')
      return null
    }

    return (
      <div
        className={`${
          siteMode === 'special' ? themeCl.back : 'mainContainer'
        } ${themeCl.elems} ${currentFS}`}>
        <Media query={queries.mobile}>
          <ScrollToTop />
        </Media>

        <Media query={queries.mobile}>
          <ResizeFunc />
        </Media>

        <Navigation
          siteMode={siteMode}
          switchSiteMode={switchSiteModeHandler}
          theme={theme}
          themeCl={themeCl}
          fontSize={fontSize}
        />

        {/*Отступ навигации в мобильной версии*/}
        <div className='line_container' />

>>>>>>> master
        <div className='separator' />

        <div
          className={`container wrapper ${themeCl.back} ${themeCl.borders} ${
            imgHidden && 'hideImages'
          }`}>
          <div className='row'>
<<<<<<< HEAD
            {Q.mobile && <AdvXS />}

            {siteMode === 'default' && Q.desktop && (
              <FilmSwiper films={films} mobile={Q.mobile} />
            )}

            {Q.mobile && (
              <Route exact path='/'>
                <FilmSwiper films={films} mobile={Q.mobile} />
              </Route>
            )}

            <hr className={`line_5px hidden-xs ${themeCl.borders}`} />

            <Content
              siteMode={siteMode}
              Q={Q}
              filmsObject={filmsObject}
              createFilmsObject={createFilmsObject}
              themeCl={themeCl}
              fontSize={fontSize}
            />

            {Q.desktop && pathname !== '/sushi' && <Adv />}

            {siteMode === 'default' && (
              <BottomSwiper
                filmsToday={filmsToday}
                slidesPerView={filmsTodaySlides}
                desktop={Q.desktop}
              />
            )}

            {pathname !== '/' && Q.mobile && (
              <>
                <div className='separator' />
                <FilmSwiper films={films} mobile={Q.mobile} />
              </>
=======
            <Media query={queries.mobile}>
              <div>
                <AdvXS />
                <div className='separator' />
              </div>
            </Media>

            {siteMode === 'default' && (
              <Media query={queries.desktop}>
                <FilmSwiper films={films} />
              </Media>
            )}

            <Route exact path='/'>
              <Media query={queries.mobile}>
                <FilmSwiper films={films} />
              </Media>
            </Route>

            <hr className={`line_5px hidden-xs ${themeCl.borders}`} />

            <Route exact path='/'>
              <IndexContent siteMode={siteMode} films={films} />
            </Route>
            <Route exact path='/about'>
              <About siteMode={siteMode} />
            </Route>
            <Route exact path='/rules'>
              <Rules />
            </Route>
            <Route exact path='/seans'>
              <Seans themeCl={themeCl} siteMode={siteMode} />
            </Route>
            <Route exact path='/sushi'>
              <Sushi themeCl={themeCl} siteMode={siteMode} />
            </Route>
            <Route exact path='/advertising'>
              <Advertising />
            </Route>
            <CinemaRoutes
              films={films}
              filmsToday={filmsToday}
              siteMode={siteMode}
              themeCl={themeCl}
              fontSize={fontSize}
            />
            {siteMode === 'special' && (
              <Route exact path='/films'>
                <FilmsSpecialPage
                  films={films}
                  url_Id={id}
                  siteMode={siteMode}
                />
              </Route>
            )}

            <Media query={queries.desktop}>{id !== 'sushi' && <Adv />}</Media>

            {siteMode === 'default' && filmsToday !== [] && (
              <BottomSwiper
                films={filmsToday}
                slidesPerView={filmsTodaySlides}
              />
            )}

            {id != null && (
              <Media query={queries.mobile}>
                <div>
                  <div className='separator' />
                  <FilmSwiper films={films} />
                </div>
              </Media>
>>>>>>> master
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
<<<<<<< HEAD
  filmsObject: state.cinema.filmsObject,
=======
>>>>>>> master
  siteMode: state.special.siteMode,
  theme: state.special.theme,
  imgHidden: state.special.imgHidden,
  fontSize: state.special.fontSize,
})

export default compose(
  connect(mapStateToProps, {
    initialActiveKey,
    initialButtonTitle,
    createActualDatesArr,
    createFilmsTodayArr,
<<<<<<< HEAD
    createFilmsObject,
=======
>>>>>>> master
    switchSiteMode,
    switchFontSize,
  })
)(App)
