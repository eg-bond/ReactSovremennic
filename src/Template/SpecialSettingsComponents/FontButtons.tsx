import { memo } from 'react';
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '../../REDUX/special/specialReducerT';

const FontButtonsComp = ({
  switchFontSize,
}: {
  switchFontSize: SpecialDispatchesT['switchFontSize'];
}) => {
  return (
    <div className="specialSettings__flex__item">
      <div className="specialSettings__flex__title">РАЗМЕР ШРИФТА</div>
      <div className="fontButtons">
        <FontBtn FS="14px" sFS={switchFontSize} text="100%" />
        <FontBtn FS="21px" sFS={switchFontSize} text="150%" />
        <FontBtn FS="26px" sFS={switchFontSize} text="200%" />
      </div>
    </div>
  );
};

const FontBtn = ({
  text,
  sFS,
  FS,
}: FontBtnT) => {
  return (
    <button className="fontButtons__button" onClick={() => sFS(FS)}>
      <span className="fontButtons__label ">{text}</span>
    </button>
  );
};

type FontBtnT = {
  FS: SpecialStateT['fontSize'];
  sFS: SpecialDispatchesT['switchFontSize'];
  text: string;
};

export const FontButtons = memo(FontButtonsComp);
