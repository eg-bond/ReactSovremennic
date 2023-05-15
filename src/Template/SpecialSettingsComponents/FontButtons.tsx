import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { memo } from 'react'
import { SpecialDispatchesT } from '../../REDUX/special/spacialReducerT'

const FontButtonsComp = ({
  switchFontSize,
}: {
  switchFontSize: SpecialDispatchesT['switchFontSize']
}) => {
  return (
    <div className='specialSettings__flex__item'>
      <div className={'specialSettings__flex__title'}>РАЗМЕР ШРИФТА</div>
      <ButtonGroup
        className={'specialSettings__flex__fontButtons'}
        size='large'
        variant='contained'
        aria-label='contained primary button group'>
        <Button onClick={() => switchFontSize('14px')}>100%</Button>
        <Button onClick={() => switchFontSize('21px')}>150%</Button>
        <Button onClick={() => switchFontSize('26px')}>200%</Button>
      </ButtonGroup>
    </div>
  )
}
export const FontButtons = memo(FontButtonsComp)
