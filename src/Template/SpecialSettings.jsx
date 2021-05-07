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

const SiteModeButton = ({ siteMode, switchSiteMode }) => {
  let modeToDispatch = siteMode === 'default' ? 'special' : 'default'
  return (
    <Button
      onClick={() => switchSiteMode(modeToDispatch)}
      variant='contained'
      startIcon={<RemoveRedEyeOutlinedIcon />}>
      {siteMode === 'default'
        ? 'Версия для слабовидящих'
        : 'Обычная версия сайта'}
    </Button>
  )
}

function SpecialSettings({
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
  imgHidden,
  siteMode,
  switchSiteMode,
}) {
  const ThemeButton = ({ theme, cl }) => (
    <IconButton onClick={() => switchSiteTheme(theme)} className={cl}>
      <Brightness1Icon />
    </IconButton>
  )

  const handleImgSwitch = () =>
    imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)

  if (siteMode === 'default') {
    return (
      <div className={`space`}>
        <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
      </div>
    )
  }

  return (
    <div className='specialSettings__container'>
      <div className={`specialSettings__flex`}>
        <div className='specialSettings__flex__item'>
          <div className={'specialSettings__flex__title'}>Цветовая схема</div>
          <ThemeButton theme='blackWhite' cl='themeBW' />
          <ThemeButton theme='whiteBlack' cl='themeWB' />
          <ThemeButton theme='blackRed' cl='themeBR' />
          <ThemeButton theme='yellowBrown' cl='themeYB' />
          <ThemeButton theme='blueGreen' cl='themeBG' />
        </div>

        <div className={`specialSettings__flex__item`}>
          <div className={'specialSettings__flex__title'}>Размер шрифта</div>
          <ButtonGroup
            className={`specialSettings__flex__fontButtons`}
            size='large'
            variant='contained'
            aria-label='contained primary button group'>
            <Button onClick={() => switchFontSize('100')}>100%</Button>
            <Button onClick={() => switchFontSize('150')}>150%</Button>
            <Button onClick={() => switchFontSize('200')}>200%</Button>
          </ButtonGroup>
        </div>

        <div className='specialSettings__flex__item'>
          <div className={'specialSettings__flex__title'}>Изображения</div>
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
          <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = state => ({
  siteMode: state.special.siteMode,
  imgHidden: state.special.imgHidden,
})

export default compose(
  connect(mapStateToProps, {
    switchSiteMode,
    switchSiteTheme,
    switchImagesVisibility,
    switchFontSize,
  })
)(SpecialSettings)
