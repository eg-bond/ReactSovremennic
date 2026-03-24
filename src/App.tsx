import './SCSS/style.scss';
import './styles/global.css';
import './styles/sliders.css';
import { useEffect, useRef } from 'react';
import { LINKS } from '@/REDUX/cinema/cinemaReducer';
import Footer from './Template/Footer';
import Content from './Content/Content';
import { DesktopAdv } from './Template/Adv';
import Navigation from './Template/Navigation';
import { modifiedClass, queries } from './helpers';
import { useMediaQuery } from './hooks/useMediaQuery';
import { BottomSlider } from './Template/BottomSlider';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useChangeTheme } from './hooks/useChangeTheme';
import { useAppState } from './REDUX/stateHooks/useAppState';
import FilmsSliderNew from './Template/FilmsSlider/FilmsSliderNew';

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

  const mainContainerClasses = [
    modifiedClass('mainContainer', siteMode),
    'flex-wrapper',
  ].join(' ');

  return (
    <div className={mainContainerClasses}>
      <div>
        <Navigation fontSize={fontSize} siteMode={siteMode} theme={theme} />

        <div
          className="separatorMobile separatorMobile--sticky"
          ref={anchorRef}
        />

        <div className={`container wrapper ${imgHidden ? 'hideImages' : ''}`}>
          <FilmsSliderNew films={films} isMobile={isMobile} />
          {/* <FilmsSlider films={films} isMobile={isMobile} /> */}

          <div className="mainContainer__content" ref={contentRef}>
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
