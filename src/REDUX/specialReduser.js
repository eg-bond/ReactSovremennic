const SWITCH_SITE_MODE = "SWITCH_SITE_MODE"
const SWITCH_SITE_THEME = "SWITCH_SITE_THEME"
const SWITCH_IMAGES_VISIBILITY = "SWITCH_IMAGES_VISIBILITY"

let initialState = {
    siteMode: 'special',
    theme: 'blackWhite', // blackWhite, whiteBlack, blackRed, yellowBrown, brownGreen
    fontStyle: 'Times',
    fontSize: 100/150/200,
    imgHidden: false
}


export const specialReduser = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_SITE_MODE:
            return {...state, siteMode: action.mode}
        case SWITCH_SITE_THEME:
            return {...state, theme: action.theme}
        case SWITCH_IMAGES_VISIBILITY:
            return {...state, imgHidden: action.value}
        default:
            return state;
    }
}

export const switchSiteMode = (mode) => {
    return {
        type: SWITCH_SITE_MODE,
        mode
    }
}
export const switchSiteTheme = (theme) => {
    return {
        type: SWITCH_SITE_THEME,
        theme
    }
}
export const switchImagesVisibility = (value) => {
    return {
        type: SWITCH_IMAGES_VISIBILITY,
        value
    }
}

export default specialReduser;