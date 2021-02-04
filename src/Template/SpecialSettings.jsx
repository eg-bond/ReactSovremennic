import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {switchSiteTheme} from "../REDUX/specialReduser";

    function SpecialSettings({switchSiteTheme}) {

    return (
        <div>
            <button onClick={() => switchSiteTheme('blackWhite')}>BlackWhite</button>
            <button onClick={() => switchSiteTheme('whiteBlack')}>WhiteBlack</button>
            <button onClick={() => switchSiteTheme('blackRed')}>BlackRed</button>
            <button onClick={() => switchSiteTheme('yellowBrown')}>YellowBrown</button>
            <button onClick={() => switchSiteTheme('brownGreen')}>BrownGreen</button>
        </div>
    );
}

// export default SpecialSettings;
let mapStateToProps = (state) => ({
    siteMode: state.special.siteMode,
    theme: state.special.theme
});

export default compose(
    connect(mapStateToProps, {switchSiteTheme})
)(SpecialSettings);