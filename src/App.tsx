import './styles/global.css';
import { useRef } from 'react';
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
import { BottomSlider } from './components/BottomSlider';
import { useSpecialSettings } from './hooks/useSpecialSettings';

const App = () => {
  // ---- Special/accessibility state ----
  const specialSettings = useSpecialSettings();
  const {
    siteMode,
    fontSize,
    imgHidden,
  } = specialSettings;

  // Media query hook.
  const isMobile = useMediaQuery(queries.mobile);

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
        <Navigation specialSettings={specialSettings} />

        <SeparatorMobile ref={anchorRef} variant="sticky" />

        <div className={`container ${s.wrapper} ${imgHidden ? 'hideImages' : ''}`}>
          <FilmsSlider isMobile={isMobile} />

          <div className={s.mainContainerContent} ref={contentRef}>
            <Content fontSize={fontSize} isMobile={isMobile} siteMode={siteMode} />
            {!isMobile && <DesktopAdv />}
          </div>

          {siteMode === 'default' && <BottomSlider isMobile={isMobile} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
