import React from 'react'
import {
  switchSiteMode,
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
} from '../REDUX/specialReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  FontButtons,
  ImgSwitcher,
  SiteModeButton,
  ThemeButtons,
} from './SpecialSettingsComp'

function SpecialSettings({
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
  imgHidden,
  siteMode,
  switchSiteMode,
  theme,
}) {
  if (siteMode === 'default') {
    return (
      <div className={`space`}>
        <SiteModeButton siteMode={siteMode} switchSiteMode={switchSiteMode} />
      </div>
    )
  }

  return (
    <div className={`specialSettings__container 'theme__${theme}__borders'`}>
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
