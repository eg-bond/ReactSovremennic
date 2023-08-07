import type { MotionValue } from 'framer-motion'
import type { SpecialStateT } from '../../REDUX/special/specialReducerT'
import { menuButtons } from './sushiHelpers'

type SushiElemsT = typeof menuButtons

type SushiT = {
  currentImgKey: SushiElemsT[any][0]
  isMobile: boolean
  changeImage: (key: SushiElemsT[any][0]) => void
}
type CMB_T = {
  currentImgKey: SushiT['currentImgKey']
  changeImage: SushiT['changeImage']
}

type SushiMobileNavT = {
  x: MotionValue<number>
  constraintRef: React.RefObject<HTMLDivElement>
  sliderRef: React.RefObject<HTMLDivElement>
  hrRef: React.RefObject<HTMLHRElement>
  isChanging: boolean
  currentImgKey: SushiT['currentImgKey']
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imgKey: SushiT['currentImgKey'],
    ref: React.RefObject<HTMLDivElement>
  ) => void
}

export type { SushiT, CMB_T, SushiElemsT, SushiMobileNavT }
