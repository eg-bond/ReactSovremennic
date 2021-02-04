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

// export const themeClass = (theme) => {
//     const themeObj = theme => {
//         return {
//             back: `theme__${theme}__background`,
//             elems: `theme__${theme}__elements`,
//             borders: `theme__${theme}__borders`,
//             pills: `theme__${theme}__pills`,
//             navs: `theme__${theme}__navs`
//         }
//     }
//
//     switch (theme) {
//         case 'blackWhite':
//             return themeObj('blackWhite')
//         case 'whiteBlack':
//             return themeObj('whiteBlack')
//         case 'blackRed':
//             return themeObj('blackRed')
//         case 'yellowBrown':
//             return themeObj('yellowBrown')
//         case 'brownGreen':
//             return themeObj('brownGreen')
//         default:
//             return themeObj('blackWhite')
//     }
// }