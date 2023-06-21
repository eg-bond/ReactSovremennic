import { SiteModeButton } from './SpecialSettingsComponents/SiteModeButton'
import { ThemeButtons } from './SpecialSettingsComponents/ThemeButtons'
import { FontButtons } from './SpecialSettingsComponents/FontButtons'
import { ImgSwitcher } from './SpecialSettingsComponents/ImgSwitcher'
import { useSpecialState } from './useSpecialState'

function SpecialSettings() {
  const {
    siteMode,
    imgHidden,
    switchFontSize,
    switchImagesVisibility,
    switchSiteMode,
    switchSiteTheme,
  } = useSpecialState()

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
