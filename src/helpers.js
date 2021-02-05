export const modifiedClass = (cl, siteMode) => `${cl} ${siteMode === 'default' ? cl + '__default' : cl + '__special'}`

export const themeClasses = theme => {
    return {
        back: `theme__${theme}__background`,
        elems: `theme__${theme}__elements`,
        borders: `theme__${theme}__borders`,
        pills: `theme__${theme}__pills`,
        navs: `theme__${theme}__navs`,
        footer: `theme__${theme}__footer`,

    }
}

export const currentFontSizeClass = fontSize => `fontSize__${fontSize}`

export const themeLogo = (theme) => {
    switch (theme) {
        case 'blackWhite':
            return 'logo'
        case 'whiteBlack':
            return 'logoWB'
        case 'blackRed':
            return 'logoBR'
        case 'yellowBrown':
            return 'logoYB'
        case 'blueGreen':
            return 'logoBG'
        default:
            return 'logo'
    }
}