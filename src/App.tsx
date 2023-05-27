import { useCallback, useEffect } from 'react'
import './SCSS/style.scss'
import Navigation from './Template/Navigation'
import BottomSlider from './Template/BottomSlider'
import Footer from './Template/Footer'
import { setTodayScheduleItem_AC } from './REDUX/seance/seanceReducer'
import Adv from './Template/Adv'
import { createFilmsTodayArr_AC } from './REDUX/cinema/cinemaReducer'
import { switchSiteMode_AC } from './REDUX/special/specialReducer'
import { changeAppColors, modifiedClass, queries } from './helpers'
import Content from './Content/Content'
import { useAppDispatch, useAppSelector } from './REDUX/store'
import { SpecialStateT } from './REDUX/special/specialReducerT'
import FilmsSlider from './Template/FilmsSlider'
import { useMediaQuery } from './hooks'
import { useLocation } from 'react-router-dom'

const App = () => {
  const { films } = useAppSelector(state => state.cinema)
  const { filmsToday } = useAppSelector(state => state.cinema)
  const { siteMode } = useAppSelector(state => state.special)
  const { theme } = useAppSelector(state => state.special)
  const { imgHidden } = useAppSelector(state => state.special)
  const { fontSize } = useAppSelector(state => state.special)
  const dispatch = useAppDispatch()

  const switchSiteMode = useCallback((mode: SpecialStateT['siteMode']) => {
    dispatch(switchSiteMode_AC({ mode }))
  }, [])

  const createFilmsTodayArr = useCallback(() => {
    dispatch(createFilmsTodayArr_AC())
  }, [])
  const setTodayScheduleItem = useCallback(() => {
    dispatch(setTodayScheduleItem_AC())
  }, [])

  // Initialization
  useEffect(() => {
    setTodayScheduleItem()
    createFilmsTodayArr()
  }, [setTodayScheduleItem, createFilmsTodayArr])

  // Media query hook.
  const isMobile = useMediaQuery(queries.mobile)

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

  const mainContainerClasses = [
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
          <FilmsSlider films={films} isMobile={isMobile} />

          <div className='separatorMobile separatorMobile--MB' />
          <hr className='separator hidden-xs' />

          <div className={'mainContainer__content'}>
            <Content isMobile={isMobile} />
            {!isMobile && <Adv />}
          </div>

          {siteMode === 'default' && (
            <div>
              <h1 className='bottomSlider__bar'>На этой неделе в кино</h1>
              <hr className='bottomSlider__border' />
              <BottomSlider filmsToday={filmsToday || []} isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
