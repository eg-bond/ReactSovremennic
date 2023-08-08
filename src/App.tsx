import { useEffect } from 'react'
import './SCSS/style.scss'
import Navigation from './Template/Navigation'
import BottomSlider from './Template/BottomSlider'
import Footer from './Template/Footer'
import Adv from './Template/Adv'
import { modifiedClass, queries } from './helpers'
import Content from './Content/Content'
import FilmsSlider from './Template/FilmsSlider'
import { useAppState } from './REDUX/stateHooks/useAppState'
import { useMediaQuery } from './hooks/useMediaQuery'
import { useChangeTheme } from './hooks/useChangeTheme'

const App = () => {
  const {
    films,
    filmsToday,
    siteMode,
    theme,
    imgHidden,
    fontSize,
    switchSiteMode,
    createFilmsTodayArr,
    setTodayScheduleItem,
  } = useAppState()

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

  // Switches the main fontSize style variable
  useEffect(() => {
    document.documentElement.style.setProperty('--htmlFontSize', fontSize)
  }, [fontSize])

  // Changes colors if theme/siteMode changed
  useChangeTheme(theme, siteMode)

  const mainContainerClasses = [
    modifiedClass('mainContainer', siteMode),
    'flex-wrapper',
  ].join(' ')

  return (
    <div className={mainContainerClasses}>
      <div>
        <Navigation siteMode={siteMode} fontSize={fontSize} theme={theme} />

        <div className='separatorMobile' />

        <div className={`container wrapper ${imgHidden ? 'hideImages' : ''}`}>
          <FilmsSlider films={films} isMobile={isMobile} />

          <div className='separatorMobile separatorMobile--sticky' />

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
