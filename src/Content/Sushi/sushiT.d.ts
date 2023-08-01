import type { SpecialStateT } from '../../REDUX/special/specialReducerT'
import { menuButtons } from './sushiHelpers'

type SushiElemsT = typeof menuButtons

type SushiT = {
  currentImgKey: SushiElemsT[any][0]
  imgVisible: boolean
  isMobile: boolean
  progressBar: boolean
  changeImage: (key: SushiElemsT[any][0]) => void
  onLoad: () => void
}
type SushiImageT = {
  currentImgKey: SushiT['currentImgKey']
  imgVisible: SushiT['imgVisible']
  onLoad: SushiT['onLoad']
}
type CMB_T = {
  currentImgKey: SushiT['currentImgKey']
  changeImage: SushiT['changeImage']
}
type MobileSushiNavigationT = {
  changeImage: SushiT['changeImage']
  currentImgKey: SushiT['currentImgKey']
}
type PopperContentT = {
  currentImgKey: SushiT['currentImgKey']
  switchSushiImage: (key: SushiT['currentImgKey']) => void
}

export type {
  SushiT,
  SushiImageT,
  CMB_T,
  SushiElemsT,
  MobileSushiNavigationT,
  PopperContentT,
}
