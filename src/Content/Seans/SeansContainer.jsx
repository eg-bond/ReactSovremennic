import React from 'react';
import Seans from "./Seans";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeActiveKey, changeButtonTitle, initialButtonTitle} from "../../REDUX/seansReduser";

const SeansContainer = (props) => {

    return (
        <Seans datesArr={props.datesArr}
               activeKey={props.activeKey}
               buttonTitle={props.buttonTitle}
               changeButtonTitle={props.changeButtonTitle}
               changeActiveKey={props.changeActiveKey}
               initialButtonTitle={props.initialButtonTitle} />
    );

}

let mapStateToProps = (state) => ({
    datesArr: state.seansPage.actualDatesArr,
    activeKey: state.seansPage.activeKey,
    buttonTitle: state.seansPage.buttonTitle
});


export default compose(
    connect(mapStateToProps, {changeButtonTitle, changeActiveKey, initialButtonTitle})
)(SeansContainer);