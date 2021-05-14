import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/swiper/css/swiper.css'
import './SCSS/style.scss'
import FilmSwiper from './Template/FilmSwiper'
import { Route, useLocation } from 'react-router-dom'
import Navigation from './Template/Navigation'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import AdvXS from './Template/AdvXS'
import {
  initialButtonTitle,
  initialActiveKey,
  createActualDatesArr,
} from './REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Adv from './Template/Adv'
import { createFilmsTodayArr, createFilmsObject } from './REDUX/cinemaReduser'
import { switchSiteMode, switchFontSize } from './REDUX/specialReduser'
import { queries, scrollToTop, themeClasses } from './helpers'
import { useMediaQuery } from '@material-ui/core'
import Content from './Content/Content'

const App = React.memo(
  ({
    createActualDatesArr,
    initialActiveKey,
    initialButtonTitle,
    createFilmsTodayArr,
    films,
    filmsToday,
    filmsTodaySlides,
    filmsObject,
    createFilmsObject,
    switchSiteMode,
    siteMode,
    theme,
    imgHidden,
    fontSize,
  }) => {
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

    // Queries
    const Q = {
      mobile: useMediaQuery(queries.mobile),
      desktop: useMediaQuery(queries.desktop),
    }
    // Меняет версию сайта на 'default' при переходе с десктопной версии в мобильную
    useEffect(() => {
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
        <div className='separator' />

        <div
          className={`container wrapper ${themeCl.back} ${themeCl.borders} ${
            imgHidden && 'hideImages'
          }`}>
          <div className='row'>
            {/* {Q.mobile && <AdvXS />} */}

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
  filmsObject: state.cinema.filmsObject,
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
    createFilmsObject,
    switchSiteMode,
    switchFontSize,
  })
)(App)
