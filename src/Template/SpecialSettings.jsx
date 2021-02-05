import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {switchSiteTheme, switchImagesVisibility, switchFontSize} from "../REDUX/specialReduser";

    function SpecialSettings({switchSiteTheme, switchImagesVisibility, switchFontSize, imgHidden}) {

    return (
        <div className={"focus"}>
            <button onClick={() => switchSiteTheme('blackWhite')}>BlackWhite</button>
            <button onClick={() => switchSiteTheme('whiteBlack')}>WhiteBlack</button>
            <button onClick={() => switchSiteTheme('blackRed')}>BlackRed</button>
            <button onClick={() => switchSiteTheme('yellowBrown')}>YellowBrown</button>
            <button onClick={() => switchSiteTheme('blueGreen')}>BrownGreen</button>
            {imgHidden
                ? <button onClick={() => switchImagesVisibility(false)}>ShowImg</button>
                : <button onClick={() => switchImagesVisibility(true)}>HideImg</button>
            }
            <button onClick={() => switchFontSize('100')}>Font_100%</button>
            <button onClick={() => switchFontSize('150')}>Font_150%</button>
            <button onClick={() => switchFontSize('200')}>Font_200%</button>
        </div>
    );
}

let mapStateToProps = (state) => ({
    siteMode: state.special.siteMode,
    theme: state.special.theme,
    imgHidden: state.special.imgHidden,
    fontSize: state.special.fontSize
});

export default compose(
    connect(mapStateToProps, {switchSiteTheme, switchImagesVisibility, switchFontSize})
)(SpecialSettings);