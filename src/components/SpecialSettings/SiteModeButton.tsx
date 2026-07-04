import { memo } from 'react';
import { scrollToTop } from '@/utils/helpers.ts';
import * as s from './SpecialSettings.css.ts';
import type { SpecialStateT } from '@/types/special';

const SiteModeButtonComp = ({
  siteMode,
  switchSiteMode,
  switchSiteTheme,
}: {
  siteMode: SpecialStateT['siteMode'];
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void;
  switchSiteTheme: (mode: SpecialStateT['theme']) => void;
}) => {
  const modeToDispatch = siteMode === 'default' ? 'special' : 'default';

  return (
    <button
      className={s.modeButton}
      onClick={() => {
        switchSiteMode(modeToDispatch);
        switchSiteTheme('blackWhite');
        scrollToTop();
      }}
    >
      {siteMode === 'default'
        ? 'ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ'
        : 'ОБЫЧНАЯ ВЕРСИЯ САЙТА'}
    </button>
  );
};

export const SiteModeButton = memo(SiteModeButtonComp);
