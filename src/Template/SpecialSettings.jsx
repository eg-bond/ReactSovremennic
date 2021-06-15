import React from 'react'
import Switch from '@material-ui/core/Switch'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import Brightness1Icon from '@material-ui/icons/Brightness1'
import {
  switchSiteMode,
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
} from '../REDUX/specialReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'

const SiteModeButton = ({ siteMode, switchSiteMode, fontSize }) => {
  let modeToDispatch = siteMode === 'default' ? 'special' : 'default'
  const siteModeHandler = () => {
    if (fontSize !== '14px') {
      switchFontSize('14px')
    }
    switchSiteMode(modeToDispatch)
  }

  return (
    <Button
      className='specialSettings__modeButton'
      onClick={() => siteModeHandler()}
      variant='contained'
      startIcon={<RemoveRedEyeOutlinedIcon />}>
      {siteMode === 'default'
        ? 'Версия для слабовидящих'
        : 'Обычная версия сайта'}
    </Button>
  )
}

const ThemeButton = React.memo(({ theme, cl, switchSiteTheme }) => (
  <IconButton onClick={() => switchSiteTheme(theme)} className={cl}>
    <Brightness1Icon />
  </IconButton>
))

function SpecialSettings({
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
  imgHidden,
  siteMode,
  switchSiteMode,
  theme,
  fontSize,
}) {
  const handleImgSwitch = () =>
    imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)

  if (siteMode === 'default') {
    return (
      <div className={`space`}>
        <SiteModeButton
          siteMode={siteMode}
          switchSiteMode={switchSiteMode}
          fontSize={fontSize}
        />
      </div>
    )
  }

  return (
    <div className={`specialSettings__container 'theme__${theme}__borders'`}>
      <div className={`specialSettings__flex`}>
        <div className='specialSettings__flex__item'>
          <div className={'specialSettings__flex__title'}>ЦВЕТОВАЯ СХЕМА</div>
          <ThemeButton
            theme='blackWhite'
            cl='themeBW'
            switchSiteTheme={switchSiteTheme}
          />
          <ThemeButton
            theme='whiteBlack'
            cl='themeWB'
            switchSiteTheme={switchSiteTheme}
          />
          <ThemeButton
            theme='blackRed'
            cl='themeBR'
            switchSiteTheme={switchSiteTheme}
          />
          <ThemeButton
            theme='yellowBrown'
            cl='themeYB'
            switchSiteTheme={switchSiteTheme}
          />
          <ThemeButton
            theme='blueGreen'
            cl='themeBG'
            switchSiteTheme={switchSiteTheme}
          />
        </div>

        <div className={`specialSettings__flex__item`}>
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

        <div className='specialSettings__flex__item'>
          <div className={'specialSettings__flex__title'}>ИЗОБРАЖЕНИЯ</div>
          <span className={'specialSettings__switchOff'}>Выкл.</span>
          <Switch
            onClick={handleImgSwitch}
            checked={!imgHidden}
            onKeyPress={e => e.key === 'Enter' && handleImgSwitch()}
            color='default'
            name='imgSwitcher'
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span className={'specialSettings__switchOn'}>Вкл.</span>
        </div>

        <div className='specialSettings__flex__item specialSettings__flex__modeButton'>
          <SiteModeButton
            siteMode={siteMode}
            switchSiteMode={switchSiteMode}
            fontSize={fontSize}
          />
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = state => ({
  siteMode: state.special.siteMode,
  imgHidden: state.special.imgHidden,
  theme: state.special.theme,
  fontSize: state.special.fontSize,
})

export default compose(
  connect(mapStateToProps, {
    switchSiteMode,
    switchSiteTheme,
    switchImagesVisibility,
    switchFontSize,
  })
)(React.memo(SpecialSettings))
