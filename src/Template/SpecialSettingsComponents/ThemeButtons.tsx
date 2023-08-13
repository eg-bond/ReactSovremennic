import { memo } from 'react'
import type {
  SpecialDispatchesT,
  SpecialStateT,
} from '../../REDUX/special/specialReducerT'

const ThemeButtonsComp = ({
  switchSiteTheme,
}: {
  switchSiteTheme: SpecialDispatchesT['switchSiteTheme']
}) => {
  return (
    <div className='specialSettings__flex__item'>
      <div className={'specialSettings__flex__title'}>ЦВЕТОВАЯ СХЕМА</div>
      <div>
        <ThemeButton theme='blackWhite' swST={switchSiteTheme} />
        <ThemeButton theme='whiteBlack' swST={switchSiteTheme} />
        <ThemeButton theme='blackBlue' swST={switchSiteTheme} />
        <ThemeButton theme='yellowBrown' swST={switchSiteTheme} />
        <ThemeButton theme='blueGreen' swST={switchSiteTheme} />
      </div>
    </div>
  )
}

const ThemeButton = ({ theme, swST }: ThemeButtonT) => (
  <button onClick={() => swST(theme)} className={`roundBtn ${theme}`}>
    <span className={`roundBtn__innerCircle ${theme}`}></span>
  </button>
)

type ThemeButtonT = {
  theme: SpecialStateT['theme']
  swST: SpecialDispatchesT['switchSiteTheme']
}

export const ThemeButtons = memo(ThemeButtonsComp)
