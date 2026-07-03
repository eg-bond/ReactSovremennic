import { memo } from 'react';
import * as s from './SpecialSettings.css.ts';
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '@/REDUX/special/specialReducerT';

const ThemeButtonsComp = ({
  switchSiteTheme,
}: {
  switchSiteTheme: SpecialDispatchesT['switchSiteTheme'];
}) => (
  <div className={s.flexItem}>
    <div className={s.flexTitle}>ЦВЕТОВАЯ СХЕМА</div>
    <div>
      <ThemeButton swST={switchSiteTheme} theme="blackWhite" />
      <ThemeButton swST={switchSiteTheme} theme="whiteBlack" />
      <ThemeButton swST={switchSiteTheme} theme="blackBlue" />
      <ThemeButton swST={switchSiteTheme} theme="yellowBrown" />
      <ThemeButton swST={switchSiteTheme} theme="blueGreen" />
    </div>
  </div>
);

const ThemeButton = ({ theme, swST }: ThemeButtonT) => (
  <button
    className={`${s.roundBtn} ${s.themeColors[theme].btn}`}
    onClick={() => swST(theme)}
  >
    <span className={`${s.roundBtnInnerCircle} ${s.themeColors[theme].inner}`} />
  </button>
);

type ThemeButtonT = {
  swST: SpecialDispatchesT['switchSiteTheme'];
  theme: SpecialStateT['theme'];
};

export const ThemeButtons = memo(ThemeButtonsComp);
