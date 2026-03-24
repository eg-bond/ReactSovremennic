import './styles/global.css';
import { useEffect, useRef } from 'react';
import { LINKS } from '@/REDUX/cinema/cinemaReducer';
import * as s from './App.css.ts';
import { queries } from './helpers';
import Content from './Content/Content';
import Footer from './components/Footer';
import { DesktopAdv } from './components/Adv';
import { Navigation } from './components/Navigation';
import { useMediaQuery } from './hooks/useMediaQuery';
import { FilmsSlider } from './components/FilmsSlider';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useChangeTheme } from './hooks/useChangeTheme';
import { BottomSlider } from './components/BottomSlider';
import { useAppState } from './REDUX/stateHooks/useAppState';

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
  } = useAppState();

  // Initialization
  useEffect(() => {
    setTodayScheduleItem();
    createFilmsTodayArr(LINKS);
  }, [setTodayScheduleItem, createFilmsTodayArr]);

  // Media query hook.
  const isMobile = useMediaQuery(queries.mobile);

  // Changes siteMode to 'default' when switching from desktop to mobile
  useEffect(() => {
    if (isMobile && siteMode === 'special') {
      switchSiteMode('default');
    }
  }, [isMobile, switchSiteMode, siteMode]);

  // Switches the main fontSize style variable
  useEffect(() => {
    document.documentElement.style.setProperty('--htmlFontSize', fontSize);
  }, [fontSize]);

  // Changes colors if theme/siteMode changed
  useChangeTheme(theme, siteMode);

  // Scrolls to top if content starts higher than anchor
  const contentRef = useRef(null);
  const anchorRef = useRef(null);
  useScrollToTop(contentRef, anchorRef);

  const mainContainerClass = [
    s.mainContainer,
    siteMode === 'default' ? s.mainContainerDefault : '',
    s.flexWrapper,
  ].join(' ');

  return (
    <div className={mainContainerClass}>
      <div>
        <Navigation fontSize={fontSize} siteMode={siteMode} theme={theme} />

        <div
          className="separatorMobile separatorMobile--sticky"
          ref={anchorRef}
        />

        <div className={`container ${s.wrapper} ${imgHidden ? 'hideImages' : ''}`}>
          <FilmsSlider films={films} isMobile={isMobile} />

          <div className={s.mainContainerContent} ref={contentRef}>
            <Content isMobile={isMobile} />
            {!isMobile && <DesktopAdv />}
          </div>

          {siteMode === 'default' && (
            <BottomSlider filmsToday={filmsToday || []} isMobile={isMobile} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
