import { memo } from 'react'
import Switch from '@material-ui/core/Switch'
import { SpecialDispatchesT } from '../../REDUX/special/spacialReducerT'

const ImgSwitcherComp = ({
  imgHidden,
  switchImagesVisibility,
}: {
  imgHidden: boolean
  switchImagesVisibility: SpecialDispatchesT['switchImagesVisibility']
}) => {
  const handleImgSwitch = () =>
    imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)

  const handlePress = (e: React.KeyboardEvent) =>
    e.key === 'Enter' && handleImgSwitch()

  return (
    <div className='specialSettings__flex__item'>
      <div className={'specialSettings__flex__title'}>ИЗОБРАЖЕНИЯ</div>
      <span className={'specialSettings__switchOff'}>Выкл.</span>
      <Switch
        onClick={handleImgSwitch}
        checked={!imgHidden}
        onKeyPress={handlePress}
        color='default'
      />
      <span className={'specialSettings__switchOn'}>Вкл.</span>
    </div>
  )
}
export const ImgSwitcher = memo(ImgSwitcherComp)
