import { IconButton } from '@material-ui/core'
import { memo } from 'react'
import Brightness1Icon from '@material-ui/icons/Brightness1'
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '../../REDUX/special/spacialReducerT'

const ThemeButtonsComp = ({
  switchSiteTheme,
}: {
  switchSiteTheme: SpecialDispatchesT['switchSiteTheme']
}) => {
  return (
    <div className='specialSettings__flex__item'>
      <div className={'specialSettings__flex__title'}>ЦВЕТОВАЯ СХЕМА</div>
      <ThemeButton theme='blackWhite' cl='themeBW' swST={switchSiteTheme} />
      <ThemeButton theme='whiteBlack' cl='themeWB' swST={switchSiteTheme} />
      <ThemeButton theme='blackBlue' cl='themeBR' swST={switchSiteTheme} />
      <ThemeButton theme='yellowBrown' cl='themeYB' swST={switchSiteTheme} />
      <ThemeButton theme='blueGreen' cl='themeBG' swST={switchSiteTheme} />
    </div>
  )
}

const ThemeButton = ({ theme, cl, swST }: ThemeButtonT) => (
  <IconButton onClick={() => swST(theme)} className={cl}>
    <Brightness1Icon />
  </IconButton>
)

type ThemeButtonT = {
  theme: SpecialStateT['theme']
  cl: 'themeBW' | 'themeWB' | 'themeBR' | 'themeYB' | 'themeBG'
  swST: SpecialDispatchesT['switchSiteTheme']
}

export const ThemeButtons = memo(ThemeButtonsComp)
