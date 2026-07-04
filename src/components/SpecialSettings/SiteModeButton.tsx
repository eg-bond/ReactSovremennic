import { memo } from 'react';
import { scrollToTop } from '@/utils/helpers.ts';
import * as s from './SpecialSettings.css.ts';
import type { SpecialStateT } from '@/types/special';

const SiteModeButtonComp = ({ siteMode, switchSiteMode }: {
  siteMode: SpecialStateT['siteMode'];
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void;
}) => {
  const modeToDispatch = siteMode === 'default' ? 'special' : 'default';

  return (
    <button
      className={s.modeButton}
      onClick={() => {
        switchSiteMode(modeToDispatch);
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
