import seansReduser from "./seansReduser";

const SWITCH_SITE_MODE = "SWITCH_SITE_MODE"

let initialState = {
    siteMode: 'special',
    themeClass: 'theme__BlackWhite', // blackWhite, whiteBlack, blackRed, yellowBrown, brownGreen
    fontStyle: 'Times',
    fontSize: 100/150/200,
    showImg: true
}


export const specialReduser = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_SITE_MODE:
            console.log(state)
            return {...state, siteMode: action.mode}
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

export default specialReduser;