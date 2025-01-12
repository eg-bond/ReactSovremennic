import { memo } from 'react';
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '../../REDUX/special/specialReducerT';

const ThemeButtonsComp = ({
  switchSiteTheme,
}: {
  switchSiteTheme: SpecialDispatchesT['switchSiteTheme'];
}) => {
  return (
    <div className="specialSettings__flex__item">
      <div className="specialSettings__flex__title">ЦВЕТОВАЯ СХЕМА</div>
      <div>
        <ThemeButton swST={switchSiteTheme} theme="blackWhite" />
        <ThemeButton swST={switchSiteTheme} theme="whiteBlack" />
        <ThemeButton swST={switchSiteTheme} theme="blackBlue" />
        <ThemeButton swST={switchSiteTheme} theme="yellowBrown" />
        <ThemeButton swST={switchSiteTheme} theme="blueGreen" />
      </div>
    </div>
  );
};

const ThemeButton = ({ theme, swST }: ThemeButtonT) => (
  <button className={`roundBtn ${theme}`} onClick={() => swST(theme)}>
    <span className={`roundBtn__innerCircle ${theme}`}></span>
  </button>
);

type ThemeButtonT = {
  swST: SpecialDispatchesT['switchSiteTheme'];
  theme: SpecialStateT['theme'];
};

export const ThemeButtons = memo(ThemeButtonsComp);
