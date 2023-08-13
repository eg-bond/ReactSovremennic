import { memo } from 'react'
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '../../REDUX/special/specialReducerT'

const FontButtonsComp = ({
  switchFontSize,
}: {
  switchFontSize: SpecialDispatchesT['switchFontSize']
}) => {
  return (
    <div className='specialSettings__flex__item'>
      <div className={'specialSettings__flex__title'}>РАЗМЕР ШРИФТА</div>
      <div className='fontButtons'>
        <FontBtn text={'100%'} sFS={switchFontSize} FS={'14px'} />
        <FontBtn text={'150%'} sFS={switchFontSize} FS={'21px'} />
        <FontBtn text={'200%'} sFS={switchFontSize} FS={'26px'} />
      </div>
    </div>
  )
}

const FontBtn = ({ text, sFS, FS }: FontBtnT) => {
  return (
    <button className='fontButtons__button' onClick={() => sFS(FS)}>
      <span className='fontButtons__label '>{text}</span>
    </button>
  )
}

type FontBtnT = {
  text: string
  sFS: SpecialDispatchesT['switchFontSize']
  FS: SpecialStateT['fontSize']
}

export const FontButtons = memo(FontButtonsComp)
