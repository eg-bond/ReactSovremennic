import { memo } from 'react';
import { scrollToTop } from '../../helpers';
import * as s from './SpecialSettings.css.ts';
import type { SpecialStateT } from '../../REDUX/special/specialReducerT';

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
