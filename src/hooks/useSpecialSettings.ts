import { queries } from '@/utils/helpers';
import { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';
import { useChangeTheme } from './useChangeTheme';
import type { SpecialStateT } from '@/types/special';

export type UseSpecialSettingsResult = {
  fontSize: SpecialStateT['fontSize'];
  imgHidden: boolean;
  siteMode: SpecialStateT['siteMode'];
  switchFontSize: (fontSize: SpecialStateT['fontSize']) => void;
  switchImagesVisibility: (value: boolean) => void;
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void;
  switchSiteTheme: (theme: SpecialStateT['theme']) => void;
  theme: SpecialStateT['theme'];
};

export const useSpecialSettings = (): UseSpecialSettingsResult => {
  const [siteMode, setSiteMode] = useState<SpecialStateT['siteMode']>('default');
  const [theme, setTheme] = useState<SpecialStateT['theme']>('blackWhite');
  const [fontSize, setFontSize] = useState<SpecialStateT['fontSize']>('14px');
  const [imgHidden, setImgHidden] = useState(false);

  const switchSiteMode = useCallback(
    (mode: SpecialStateT['siteMode']) => setSiteMode(mode),
    [],
  );
  const switchSiteTheme = useCallback(
    (t: SpecialStateT['theme']) => setTheme(t),
    [],
  );
  const switchFontSize = useCallback(
    (fs: SpecialStateT['fontSize']) => setFontSize(fs),
    [],
  );
  const switchImagesVisibility = useCallback(
    (value: boolean) => setImgHidden(value),
    [],
  );

  // Changes siteMode to 'default' when switching from desktop to mobile
  const isMobile = useMediaQuery(queries.mobile);

  useEffect(() => {
    if (isMobile && siteMode === 'special') {
      setSiteMode('default');
    }
  }, [isMobile, siteMode]);

  // Switches the main fontSize style variable
  useEffect(() => {
    document.documentElement.style.setProperty('--htmlFontSize', fontSize);
  }, [fontSize]);

  // Changes colors if theme/siteMode changed
  useChangeTheme(theme, siteMode);

  return {
    fontSize,
    imgHidden,
    siteMode,
    theme,
    switchFontSize,
    switchImagesVisibility,
    switchSiteMode,
    switchSiteTheme,
  };
};
