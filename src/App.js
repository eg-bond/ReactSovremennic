import React, { useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import FilmSwiper from './Template/FilmSwiper'
import { Route, useLocation } from 'react-router-dom'
import Navigation from './Template/Navigation'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import '../node_modules/swiper/css/swiper.css'
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
import { createFilmsTodayArr, createFilmsObject } from './REDUX/cinemaReduser'
import { queries, scrollToTop } from './helpers'
import { useSpecialContext } from './SpecialContext'
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

    const {
      switchSiteMode,
      siteMode,
      themeCl,
      fontSize,
      imgHidden,
    } = useSpecialContext()

    let { pathname } = useLocation()

    let mainContainerClasses = [
      siteMode === 'special' ? themeCl.back : 'mainContainer',
      themeCl.elems,
      `fontSize__${fontSize}` || 'fontSize__100',
    ].join(' ')

    const Q = {
      mobile: useMediaQuery(queries.mobile),
      desktop: useMediaQuery(queries.desktop),
    }

    const switchModeIfMobile = () => {
      if (Q.mobile && siteMode === 'special') {
        switchSiteMode('default')
      }
    }

    // ----------------------------------------
    switchModeIfMobile()
    if (Q.mobile || siteMode === 'special') {
      scrollToTop()
    }
    //-----------------------------------------

    console.log('App render')

    return (
      <div className={mainContainerClasses}>
        <Navigation />

        {/*Отступ навигации в мобильной версии*/}
        <div className='line_container' />
        <div className='separator' />

        <div
          className={`container wrapper ${themeCl.back} ${themeCl.borders} ${
            imgHidden && 'hideImages'
          }`}>
          <div className='row'>
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
})

export default compose(
  connect(mapStateToProps, {
    initialActiveKey,
    initialButtonTitle,
    createActualDatesArr,
    createFilmsTodayArr,
    createFilmsObject,
  })
)(App)
