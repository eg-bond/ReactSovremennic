import { memo } from 'react';
import { scrollToTop } from '../../helpers';
import type { SpecialStateT } from '../../REDUX/special/specialReducerT';

const SiteModeButtonComp = ({ siteMode, switchSiteMode }: {
  siteMode: SpecialStateT['siteMode'];
  switchSiteMode: (mode: SpecialStateT['siteMode']) => void;
}) => {
  const modeToDispatch = siteMode === 'default' ? 'special' : 'default';

  return (
    <button
      className="specialSettings__modeButton"
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
