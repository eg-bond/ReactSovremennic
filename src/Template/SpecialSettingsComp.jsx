import React from 'react'
import Switch from '@material-ui/core/Switch'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import Brightness1Icon from '@material-ui/icons/Brightness1'
import { scrollToTop } from '../helpers'

export const SiteModeButton = React.memo(({ siteMode, switchSiteMode }) => {
  let modeToDispatch = siteMode === 'default' ? 'special' : 'default'

  return (
    <Button
      className='specialSettings__modeButton'
      onClick={() => {
        switchSiteMode(modeToDispatch)
        scrollToTop()
      }}
      variant='contained'
      startIcon={<RemoveRedEyeOutlinedIcon />}>
      {siteMode === 'default'
        ? 'Версия для слабовидящих'
        : 'Обычная версия сайта'}
    </Button>
  )
})

const ThemeButton = ({ theme, cl, swST }) => (
  <IconButton onClick={() => swST(theme)} className={cl}>
    <Brightness1Icon />
  </IconButton>
)
export const ThemeButtons = React.memo(({ switchSiteTheme }) => {
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
})

export const FontButtons = React.memo(({ switchFontSize }) => {
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
})

export const ImgSwitcher = React.memo(
  ({ imgHidden, switchImagesVisibility }) => {
    const handleImgSwitch = () =>
      imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)

    const handlePress = e => e.key === 'Enter' && handleImgSwitch()

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
)
