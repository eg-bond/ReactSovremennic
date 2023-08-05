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

export type { SushiT, CMB_T, SushiElemsT }
