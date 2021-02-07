const SWITCH_SITE_MODE = "SWITCH_SITE_MODE"
const SWITCH_SITE_THEME = "SWITCH_SITE_THEME"
const SWITCH_IMAGES_VISIBILITY = "SWITCH_IMAGES_VISIBILITY"
const SWITCH_FONT_SIZE = "SWITCH_FONT_SIZE"

let initialState = {
    siteMode: 'special',
    theme: 'blackWhite',
    fontStyle: 'Times',
    fontSize: '100',
    imgHidden: false
}


export const specialReduser = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_SITE_MODE:
            return action.mode === 'default'
                ? {...initialState, siteMode: action.mode}
                : {...state, siteMode: action.mode}
        case SWITCH_SITE_THEME:
            return {...state, theme: action.theme}
        case SWITCH_IMAGES_VISIBILITY:
            return {...state, imgHidden: action.value}
        case SWITCH_FONT_SIZE:
            return {...state, fontSize: action.fontSize}
        default:
            return state;
    }
}

export const switchSiteMode = (mode) => ({type: SWITCH_SITE_MODE, mode})
export const switchSiteTheme = (theme) => ({type: SWITCH_SITE_THEME, theme})
export const switchImagesVisibility = (value) => ({type: SWITCH_IMAGES_VISIBILITY, value})
export const switchFontSize = (fontSize) => ({type: SWITCH_FONT_SIZE, fontSize})


export default specialReduser;