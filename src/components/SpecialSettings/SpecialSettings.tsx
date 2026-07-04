import { memo } from 'react';
import * as s from './SpecialSettings.css.ts';
import { FontButtons } from './FontButtons.tsx';
import { ImgSwitcher } from './ImgSwitcher.tsx';
import { ThemeButtons } from './ThemeButtons.tsx';
import { SiteModeButton } from './SiteModeButton.tsx';
import type { UseSpecialSettingsResult } from '@/hooks/useSpecialSettings';

export const SpecialSettings = memo<{
  specialSettings: UseSpecialSettingsResult;
}>(function SpecialSettings({ specialSettings }) {
  const {
    imgHidden,
    siteMode,
    switchFontSize,
    switchImagesVisibility,
    switchSiteMode,
    switchSiteTheme,
  } = specialSettings;

  if (siteMode === 'default') {
    return (
      <div className={`${s.space} ${s.spaceButtonWrapper}`}>
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
});
