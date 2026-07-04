import './styles/global.css';
import { filmsArray, LINKS } from '@/data/films';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SeparatorMobile } from '@/components/SeparatorMobile';
import * as s from './App.css.ts';
import Content from './Content/Content';
import Footer from './components/Footer';
import { queries } from './utils/helpers.ts';
import { DesktopAdv } from './components/Adv';
import { Navigation } from './components/Navigation';
import { useMediaQuery } from './hooks/useMediaQuery';
import { FilmsSlider } from './components/FilmsSlider';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useChangeTheme } from './hooks/useChangeTheme';
import { BottomSlider } from './components/BottomSlider';
import type { SpecialStateT } from './types/special';

const App = () => {
  // ---- Cinema state (derived from static data) ----
  const films = filmsArray;
  const filmsToday = useMemo(
    () => filmsArray.filter(film => LINKS.includes(film.link)),
    [],
  );

  // ---- Special/accessibility state ----
  const [siteMode, setSiteMode] = useState<SpecialStateT['siteMode']>('default');
  const [theme, setTheme] = useState<SpecialStateT['theme']>('blackWhite');
  const [fontSize, setFontSize] = useState<SpecialStateT['fontSize']>('14px');
  const [imgHidden, setImgHidden] = useState(false);

  const switchSiteMode = (mode: SpecialStateT['siteMode']) => setSiteMode(mode);
  const switchSiteTheme = (t: SpecialStateT['theme']) => setTheme(t);
  const switchFontSize = (fs: SpecialStateT['fontSize']) => setFontSize(fs);
  const switchImagesVisibility = (value: boolean) => setImgHidden(value);

  // Initialization — no longer needed for cinema (computed via useMemo)
  // but we keep the effect for any future init logic

  // Media query hook.
  const isMobile = useMediaQuery(queries.mobile);

  // Changes siteMode to 'default' when switching from desktop to mobile
  useEffect(() => {
    if (isMobile && siteMode === 'special') {
      setSiteMode('default');
      setTheme('blackWhite');
    }
  }, [isMobile, siteMode]);

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
        <Navigation
          fontSize={fontSize}
          imgHidden={imgHidden}
          siteMode={siteMode}
          switchFontSize={switchFontSize}
          switchImagesVisibility={switchImagesVisibility}
          switchSiteMode={switchSiteMode}
          switchSiteTheme={switchSiteTheme}
          theme={theme}
        />

        <SeparatorMobile ref={anchorRef} variant="sticky" />

        <div className={`container ${s.wrapper} ${imgHidden ? 'hideImages' : ''}`}>
          <FilmsSlider films={films} isMobile={isMobile} />

          <div className={s.mainContainerContent} ref={contentRef}>
            <Content fontSize={fontSize} isMobile={isMobile} siteMode={siteMode} />
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
