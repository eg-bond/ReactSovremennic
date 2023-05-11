import {
  switchSiteMode,
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
} from '../REDUX/specialReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  FontButtons,
  ImgSwitcher,
  SiteModeButton,
  ThemeButtons,
} from './SpecialSettingsComp'
import PropTypes from 'prop-types'

function SpecialSettings({
  switchSiteTheme,
  switchImagesVisibility,
  switchFontSize,
  imgHidden,
  siteMode,
  switchSiteMode,
}) {
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

SpecialSettings.propTypes = {
  switchSiteTheme: PropTypes.func.isRequired,
  switchImagesVisibility: PropTypes.func.isRequired,
  switchFontSize: PropTypes.func.isRequired,
  imgHidden: PropTypes.bool.isRequired,
  siteMode: PropTypes.string.isRequired,
  switchSiteMode: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
  siteMode: state.special.siteMode,
  imgHidden: state.special.imgHidden,
})

const SpecialSettingsComposed = compose(
  connect(mapStateToProps, {
    switchSiteMode,
    switchSiteTheme,
    switchImagesVisibility,
    switchFontSize,
  })
)(SpecialSettings)

export default SpecialSettingsComposed
