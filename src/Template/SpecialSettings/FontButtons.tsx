import { memo } from 'react';
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '../../REDUX/special/specialReducerT';
import * as s from './SpecialSettings.css.ts';

const FontButtonsComp = ({
  switchFontSize,
}: {
  switchFontSize: SpecialDispatchesT['switchFontSize'];
}) => (
  <div className={s.flexItem}>
    <div className={s.flexTitle}>РАЗМЕР ШРИФТА</div>
    <div className={s.fontButtons}>
      <FontBtn FS="14px" sFS={switchFontSize} text="100%" />
      <FontBtn FS="21px" sFS={switchFontSize} text="150%" />
      <FontBtn FS="26px" sFS={switchFontSize} text="200%" />
    </div>
  </div>
);

const FontBtn = ({ text, sFS, FS }: FontBtnT) => (
  <button className={s.fontButton} onClick={() => sFS(FS)}>
    <span className={s.fontButtonLabel}>{text}</span>
  </button>
);

type FontBtnT = {
  FS: SpecialStateT['fontSize'];
  sFS: SpecialDispatchesT['switchFontSize'];
  text: string;
};

export const FontButtons = memo(FontButtonsComp);
