import {
  switchSiteMode_AC,
  switchSiteTheme_AC,
  switchImagesVisibility_AC,
  switchFontSize_AC,
} from '../REDUX/special/specialReducer'

import { useAppDispatch, useAppSelector } from '../REDUX/store'
import { useCallback } from 'react'
import { SpecialStateT } from '../REDUX/special/spacialReducerT'
import { SiteModeButton } from './SpecialSettingsComponents/SiteModeButton'
import { ThemeButtons } from './SpecialSettingsComponents/ThemeButtons'
import { FontButtons } from './SpecialSettingsComponents/FontButtons'
import { ImgSwitcher } from './SpecialSettingsComponents/ImgSwitcher'

function SpecialSettings() {
  const { siteMode } = useAppSelector(state => state.special)
  const { imgHidden } = useAppSelector(state => state.special)
  const dispatch = useAppDispatch()

  const switchSiteTheme = useCallback((theme: SpecialStateT['theme']) => {
    dispatch(switchSiteTheme_AC({ theme }))
  }, [])
  const switchImagesVisibility = useCallback((value: boolean) => {
    dispatch(switchImagesVisibility_AC({ value }))
  }, [])
  const switchFontSize = useCallback((fontSize: SpecialStateT['fontSize']) => {
    dispatch(switchFontSize_AC({ fontSize }))
  }, [])
  const switchSiteMode = useCallback((mode: SpecialStateT['siteMode']) => {
    dispatch(switchSiteMode_AC({ mode }))
  }, [])

  if (siteMode === 'default') {
    return (
      <div className={`space`}>
        <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
      </div>
    )
  }

  return (
    <div className={`specialSettings__container`}>
      <div className={`specialSettings__flex`}>
        <ThemeButtons switchSiteTheme={switchSiteTheme} />

        <FontButtons switchFontSize={switchFontSize} />

        <ImgSwitcher
          imgHidden={imgHidden}
          switchImagesVisibility={switchImagesVisibility}
        />

        <div className='specialSettings__flex__item specialSettings__flex__modeButton'>
          <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
        </div>
      </div>
    </div>
  )
}

export default SpecialSettings
