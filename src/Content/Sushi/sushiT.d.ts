import { number } from 'prop-types'
import { SpecialStateT } from '../../REDUX/special/spacialReducerT'
import { sushiElems } from './sushiHelpers'

type SushiElemsT = typeof sushiElems

type SushiT = {
  sushiElems: SushiElemsT
  currentImgKey:
    | SushiT['sushiElems']['default'][any][0]
    | SushiT['sushiElems']['special'][any][0]
  changeImage: (key: string) => void
  imgVisible: boolean
  progressBar: boolean
  siteMode: SpecialStateT['siteMode']
  isMobile: boolean
  showProgressBar: React.Dispatch<React.SetStateAction<boolean>>
  clearPBTimeout: () => void
}
type SushiImageT = {
  swiperKeys: SushiT['sushiElems']['swiperKeys']
  currentImgKey: SushiT['currentImgKey']
  imgVisible: SushiT['imgVisible']
  showProgressBar: SushiT['showProgressBar']
  clearPBTimeout: SushiT['clearPBTimeout']
}
type CMB_T = {
  sushiElems: SushiT['sushiElems']
  currentImgKey: SushiT['currentImgKey']
  changeImage: SushiT['changeImage']
  siteMode: SushiT['siteMode']
}
type MobileSushiNavigationT = {
  changeImage: SushiT['changeImage']
  currentImgKey: SushiT['currentImgKey']
  defaultSushiArr: SushiT['sushiElems']['default']
}
type PopperContentT = {
  switchSushiImage: (key: SushiT['currentImgKey']) => void
  currentImgKey: SushiT['currentImgKey']
  defaultSushiArr: SushiT['sushiElems']['default']
}

export type {
  SushiT,
  SushiImageT,
  CMB_T,
  SushiElemsT,
  MobileSushiNavigationT,
  PopperContentT,
}
