import React, {useEffect, useState} from 'react';
import Seans from "./Seans";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeActiveKey, changeButtonTitle, initialActiveKey, initialButtonTitle} from "../../REDUX/seansReduser";

const SeansContainer = (props) => {

    const datesArr = [
        ["day1", "Понедельник", "7 октября"],
        ["day2", "Вторник", "8 октября"],
        ["day3", "Среда", "9 октября"],
        ["day4", "Четверг", "10 октября"],
        ["day5", "Пятница", "11 октября"],
        ["day6", "Суббота", "12 октября"],
        ["day0", "Воскресенье", "6 октября"]
    ]

    // const findActiveKey = () => {
    //     let date = new Date();
    //     let day = date.getDay();
    //     for (let i = 0; i <= 6; i++) {
    //         if (i == day) {
    //             return `day${i}`;
    //         }
    //     }
    // }

    // let activeKey = findActiveKey();
    // let activeKey = props.activeKey;

    // let [todayDate, setTodayDate] = useState("Дата");

    // useEffect(() => {
    //     debugger;
    //     let todayItem = props.datesArr.find((item) => item[0] == props.activeKey);
    //     setTodayDate(todayItem[1] +" "+ todayItem[2]);
    // }, [props.activeKey]);

    // console.log(activeKey);

    return (
        <Seans datesArr={datesArr}
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