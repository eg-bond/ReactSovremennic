import { FontButtons } from './FontButtons';
import { ImgSwitcher } from './ImgSwitcher';
import { ThemeButtons } from './ThemeButtons';
import * as s from './SpecialSettings.css.ts';
import { SiteModeButton } from './SiteModeButton';
import { useSpecialState } from '../../REDUX/stateHooks/useSpecialState';

export const SpecialSettings = () => {
  const {
    siteMode,
    imgHidden,
    switchFontSize,
    switchImagesVisibility,
    switchSiteMode,
    switchSiteTheme,
  } = useSpecialState();

  if (siteMode === 'default') {
    return (
      <div className={`space ${s.spaceButtonWrapper}`}>
        <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
      </div>
    );
  }

  return (
    <div className={s.container}>
      <div className={s.flex}>
        <ThemeButtons switchSiteTheme={switchSiteTheme} />
        <FontButtons switchFontSize={switchFontSize} />
        <ImgSwitcher
          imgHidden={imgHidden}
          switchImagesVisibility={switchImagesVisibility}
        />
        <div className={`${s.flexItem} ${s.flexItemModeButton}`}>
          <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
        </div>
      </div>
    </div>
  );
};
