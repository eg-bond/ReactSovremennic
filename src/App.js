import React, { useEffect } from 'react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import './SCSS/style.scss'
import FilmSwiper from './Template/FilmSwiper'
import { useLocation } from 'react-router-dom'
import Navigation from './Template/Navigation'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import {
  initialButtonTitle,
  setTodaySceduleItem,
  createActualDatesArr,
} from './REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Adv from './Template/Adv'
import { createFilmsTodayArr, createFilmsObject } from './REDUX/cinemaReduser'
import { switchSiteMode, switchFontSize } from './REDUX/specialReduser'
import { changeAppColors, modifiedClass, queries, scrollToTop } from './helpers'
import { useMediaQuery } from '@material-ui/core'
import Content from './Content/Content'

const App = React.memo(
  ({
    createActualDatesArr,
    setTodaySceduleItem,
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
      setTodaySceduleItem()
      initialButtonTitle()
      createFilmsTodayArr()
    }, [
      createActualDatesArr,
      setTodaySceduleItem,
      initialButtonTitle,
      createFilmsTodayArr,
    ])

    let { pathname } = useLocation()

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
      if (fontSize !== '14px') {
        switchFontSize('14px')
      }
    }, [Q.mobile, switchSiteMode, siteMode, fontSize, switchFontSize])

    // Автоматический скролл наверх для мобильной версии
    if (Q.mobile || siteMode === 'special') {
      scrollToTop()
    }

    // Изменение размера шрифта
    useEffect(() => {
      document.documentElement.style.setProperty('--htmlFontSize', fontSize)
    }, [fontSize])
    // Изменение цветовых схем
    useEffect(() => {
      changeAppColors(theme, siteMode)
    }, [theme, siteMode, changeAppColors])

    let mainContainerClasses = [
      modifiedClass('mainContainer', siteMode),
      'flex-wrapper',
    ].join(' ')

    return (
      <div className={mainContainerClasses}>
        <div>
          <Navigation
            siteMode={siteMode}
            fontSize={fontSize}
            theme={theme}
            Q={Q}
          />

          {/*Отступ навигации в мобильной версии*/}
          <div className='navigation__containerXs' />
          <div className='separatorMobile' />

          <div className={`container wrapper ${imgHidden ? 'hideImages' : ''}`}>
            {siteMode === 'default' && (
              <FilmSwiper films={films} mobile={Q.mobile} />
            )}

            <div className='separatorMobile separatorMobile--MB' />
            <hr className={`separator hidden-xs`} />

            <div className={'mainContainer__content'}>
              <Content
                siteMode={siteMode}
                Q={Q}
                filmsObject={filmsObject}
                createFilmsObject={createFilmsObject}
                fontSize={fontSize}
                pathname={pathname}
              />
              {Q.desktop && pathname !== '/sushi' && <Adv />}
            </div>

            {siteMode === 'default' && (
              <div>
                <h1 className='bottomSwiper__bar'>Сегодня в кино</h1>
                <hr className={`bottomSwiper__border`} />
                <BottomSwiper
                  filmsToday={filmsToday}
                  slidesPerView={filmsTodaySlides}
                  desktop={Q.desktop}
                />
              </div>
            )}
          </div>
        </div>
        <Footer />
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
    setTodaySceduleItem,
    initialButtonTitle,
    createActualDatesArr,
    createFilmsTodayArr,
    createFilmsObject,
    switchSiteMode,
    switchFontSize,
  })
)(App)
