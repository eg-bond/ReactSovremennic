import React, {useEffect, useState} from 'react';
import Seans from "./Seans";

const SeansContainer = () => {

    const datesArr = [
        ["day1", "Понедельник", "7 октября"],
        ["day2", "Вторник", "8 октября"],
        ["day3", "Среда", "9 октября"],
        ["day4", "Четверг", "10 октября"],
        ["day5", "Пятница", "11 октября"],
        ["day6", "Суббота", "12 октября"],
        ["day0", "Воскресенье", "6 октября"]
    ]

    const findActiveKey = () => {
        let date = new Date();
        let day = date.getDay();
        for (let i = 0; i <= 6; i++) {
            if (i == day) {
                return `day${i}`;
            }
        }
    }

    let activeKey = findActiveKey();

    let [todayDate, setTodayDate] = useState("Дата");

    useEffect(() => {
        let todayItem = datesArr.find((item) => item[0] == activeKey);
        setTodayDate(todayItem[1] +" "+ todayItem[2]);
    }, [activeKey]);

    console.log(activeKey);

    return (
        <Seans datesArr={datesArr} activeKey={activeKey} todayDate={todayDate}/>
    );

}

export default SeansContainer;