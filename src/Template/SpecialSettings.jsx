import React from 'react'
import Switch from '@material-ui/core/Switch'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined'
import Brightness1Icon from '@material-ui/icons/Brightness1'
import { useSpecialContext } from '../SpecialContext'

function SpecialSettings() {
  const {
    switchSiteTheme,
    switchImagesVisibility,
    switchFontSize,
    imgHidden,
    siteMode,
    switchSiteMode,
  } = useSpecialContext()

  let modeToDispatch = siteMode === 'default' ? 'special' : 'default'

  const handleImgSwitch = () =>
    imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true)
  const handleImgSwitch_Enter = key => key === 'Enter' && handleImgSwitch()

  if (siteMode === 'default') {
    return (
      <div className={`space`}>
        <Button
          onClick={() => switchSiteMode(modeToDispatch)}
          variant='contained'
          startIcon={<RemoveRedEyeOutlinedIcon />}>
          {siteMode === 'default'
            ? 'Версия для слабовидящих'
            : 'Обычная версия сайта'}
        </Button>
      </div>
    )
  } else {
    return (
      <div className='specialSettings__container'>
        <div className={`specialSettings__flex`}>
          <div className='specialSettings__flex__item'>
            <div className={'specialSettings__flex__title'}>Цветовая схема</div>

            <IconButton
              onClick={() => switchSiteTheme('blackWhite')}
              className='themeBW'>
              <Brightness1Icon />
            </IconButton>
            <IconButton
              onClick={() => switchSiteTheme('whiteBlack')}
              className={'themeWB'}>
              <Brightness1Icon />
            </IconButton>
            <IconButton
              onClick={() => switchSiteTheme('blackRed')}
              className={'themeBR'}>
              <Brightness1Icon />
            </IconButton>
            <IconButton
              onClick={() => switchSiteTheme('yellowBrown')}
              className={'themeYB'}>
              <Brightness1Icon />
            </IconButton>
            <IconButton
              onClick={() => switchSiteTheme('blueGreen')}
              size={'medium'}
              className={'themeBG'}>
              <Brightness1Icon />
            </IconButton>
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
              onKeyPress={e => handleImgSwitch_Enter(e.key)}
              color='default'
              name='imgSwitcher'
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span className={'specialSettings__switchOn'}>Вкл.</span>
          </div>

          <div className='specialSettings__flex__item specialSettings__flex__modeButton'>
            <Button
              onClick={() => switchSiteMode(modeToDispatch)}
              variant='contained'
              startIcon={<RemoveRedEyeOutlinedIcon />}>
              {siteMode === 'default'
                ? 'Версия для слабовидящих'
                : 'Обычная версия сайта'}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default SpecialSettings
