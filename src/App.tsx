import './SCSS/style.scss';
import { useEffect, useRef } from 'react';
import Adv from './Template/Adv';
import Footer from './Template/Footer';
import Content from './Content/Content';
import Navigation from './Template/Navigation';
import FilmsSlider from './Template/FilmsSlider';
import BottomSlider from './Template/BottomSlider';
import { modifiedClass, queries } from './helpers';
import { useMediaQuery } from './hooks/useMediaQuery';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useChangeTheme } from './hooks/useChangeTheme';
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
    createFilmsTodayArr();
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

  const mainContainerClasses = [
    modifiedClass('mainContainer', siteMode),
    'flex-wrapper',
  ].join(' ');

  return (
    <div className={mainContainerClasses}>
      <div>
        <Navigation fontSize={fontSize} siteMode={siteMode} theme={theme} />

        <div className="separatorMobile" />

        <div className={`container wrapper ${imgHidden ? 'hideImages' : ''}`}>
          <FilmsSlider films={films} isMobile={isMobile} />

          <div
            className="separatorMobile separatorMobile--sticky"
            ref={anchorRef}
          />

          <div className="mainContainer__content" ref={contentRef}>
            <Content isMobile={isMobile} />
            {!isMobile && <Adv />}
          </div>

          {siteMode === 'default' && (
            <div>
              <h1 className="bottomSlider__bar">На этой неделе в кино</h1>
              <hr className="bottomSlider__border" />
              <BottomSlider filmsToday={filmsToday || []} isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
