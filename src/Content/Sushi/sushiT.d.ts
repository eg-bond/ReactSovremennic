import { menuButtons } from './sushiState';
import type { MotionValue } from 'framer-motion';
import type { SpecialStateT } from '../../REDUX/special/specialReducerT';

type SushiElemsT = typeof menuButtons;

type SushiT = {
  changeImage: (key: SushiElemsT[any][0]) => void;
  currentImgKey: SushiElemsT[any][0];
  isMobile: boolean;
};
type CMB_T = {
  changeImage: SushiT['changeImage'];
  currentImgKey: SushiT['currentImgKey'];
};

type SushiMobileNavT = {
  constraintRef: React.RefObject<HTMLDivElement>;
  currentImgKey: SushiT['currentImgKey'];
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imgKey: SushiT['currentImgKey'],
    ref: React.RefObject<HTMLDivElement>
  ) => void;
  hrRef: React.RefObject<HTMLHRElement>;
  isChanging: boolean;
  sliderRef: React.RefObject<HTMLDivElement>;
  x: MotionValue<number>;
};

export type { SushiT, CMB_T, SushiElemsT, SushiMobileNavT };
