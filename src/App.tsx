import { useEffect } from 'react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './SCSS/style.scss'
import FilmSwiper from './Template/FilmSwiper'
import Navigation from './Template/Navigation'
import BottomSwiper from './Template/BottomSwiper'
import Footer from './Template/Footer'
import { setTodayScheduleItem_A } from './REDUX/seance/seanceReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Adv from './Template/Adv'
import { createFilmsTodayArr, createFilmsObject } from './REDUX/cinemaReducer'
import { switchSiteMode, switchFontSize } from './REDUX/specialReducer'
import { changeAppColors, modifiedClass, queries } from './helpers'
import { useMediaQuery } from '@material-ui/core'
import Content from './Content/Content'

const App = ({
  // createActualDatesArr,
  setTodayScheduleItem_A,
  createFilmsTodayArr,
  films,
  filmsToday,
  filmsObject,
  createFilmsObject,
  switchSiteMode,
  siteMode,
  theme,
  imgHidden,
  fontSize,
}) => {
  // Initialization
  useEffect(() => {
    // createActualDatesArr()
    setTodayScheduleItem_A()
    createFilmsTodayArr()
  }, [setTodayScheduleItem_A, createFilmsTodayArr])

  // Media query hook.
  let isMobile = useMediaQuery(queries.mobile)

  // Changes siteMode to 'default' when switching from desktop to mobile
  useEffect(() => {
    if (isMobile && siteMode === 'special') {
      switchSiteMode('default')
    }
  }, [isMobile, switchSiteMode, siteMode])

  // // Switches the main fontSize style variable
  useEffect(() => {
    document.documentElement.style.setProperty('--htmlFontSize', fontSize)
  }, [fontSize])

  // Changes colors if theme/siteMode changed
  useEffect(() => {
    changeAppColors(theme, siteMode)
  }, [theme, siteMode])

  let mainContainerClasses = [
    modifiedClass('mainContainer', siteMode),
    'flex-wrapper',
  ].join(' ')

  return (
    <div className={mainContainerClasses}>
      <div>
        <Navigation siteMode={siteMode} fontSize={fontSize} theme={theme} />

        {/*Navigation menu margin for mobile*/}
        <div className='navigation__containerXs' />

        <div className='separatorMobile' />

        <div className={`container wrapper ${imgHidden ? 'hideImages' : ''}`}>
          {siteMode === 'default' && (
            <FilmSwiper films={films} mobile={isMobile} />
          )}

          <div className='separatorMobile separatorMobile--MB' />
          <hr className='separator hidden-xs' />

          <div className={'mainContainer__content'}>
            <Content
              siteMode={siteMode}
              isMobile={isMobile}
              filmsObject={filmsObject}
              createFilmsObject={createFilmsObject}
              fontSize={fontSize}
            />
            {!isMobile && <Adv />}
          </div>

          {siteMode === 'default' && (
            <div>
              <h1 className='bottomSwiper__bar'>На этой неделе в кино</h1>
              <hr className={`bottomSwiper__border`} />
              <BottomSwiper filmsToday={filmsToday || []} isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
      <Footer isMobile={isMobile} siteMode={siteMode} />
    </div>
  )
}

let mapStateToProps = state => ({
  films: state.cinema.films,
  filmsToday: state.cinema.filmsToday,
  filmsObject: state.cinema.filmsObject,
  siteMode: state.special.siteMode,
  theme: state.special.theme,
  imgHidden: state.special.imgHidden,
  fontSize: state.special.fontSize,
})

const AppComposed = compose(
  connect(mapStateToProps, {
    setTodayScheduleItem_A,
    // createActualDatesArr,
    createFilmsTodayArr,
    createFilmsObject,
    switchSiteMode,
    switchFontSize,
  })
)(App)

export default AppComposed
