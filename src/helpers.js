export const modifiedClass = (cl, siteMode) => `${cl} ${siteMode === 'default' ? cl + '__default' : cl + '__special'}`

export const themeClass = (theme) => {
    switch (theme) {
        case 'blackWhite':
            return {
                back: 'theme__blackWhite__background',
                elems: 'theme__blackWhite__elements',
                borders: 'theme__blackWhite__borders',
                pills: 'theme__blackWhite__pills',
                navs: 'theme__blackWhite__navs'
            }
        case 'whiteBlack':
            return {
                back: 'theme__whiteBlack__background',
                elems: 'theme__whiteBlack__elements',
                borders: 'theme__whiteBlack__borders',
                pills: 'theme__whiteBlack__pills',
                navs: 'theme__whiteBlack__navs'
            }
        case 'blackRed':
            return {
                back: 'theme__blackRed__background',
                elems: 'theme__blackRed__elements',
                borders: 'theme__blackRed__borders',
                pills: 'theme__blackRed__pills',
                navs: 'theme__blackRed__navs'
            }
        default:
            return {
                back: 'theme__blackWhite__background',
                elems: 'theme__blackWhite__elements',
                borders: 'theme__blackWhite__borders',
                pills: 'theme__blackWhite__pills',
                navs: 'theme__blackWhite__navs'
            }
    }
}