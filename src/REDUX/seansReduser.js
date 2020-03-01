const INITIAL_ACTIVE_KEY = "INITIAL_ACTIVE_KEY";

let initialState = {
    datesArr: [
        ["day0", "Воскресенье", "6 октября"],
        ["day1", "Понедельник", "7 октября"],
        ["day2", "Вторник", "8 октября"],
        ["day3", "Среда", "9 октября"],
        ["day4", "Четверг", "10 октября"],
        ["day5", "Пятница", "11 октября"],
        ["day6", "Суббота", "12 октября"]
    ],
    activeKey: "",
    buttonTitle:""
}

// const findActiveKey = () => {
//     let date = new Date();
//     let day = date.getDay();
//     // for (let i = 0; i <= 6; i++) {
//     //     if (i == day) {
//     //         return `day${i}`;
//     //     }
//     // }
//     return initialState.datesArr[day][0]
// }

export const seansReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_ACTIVE_KEY:
            let date = new Date();
            let day = date.getDay();
            return {
                ...state,
                activeKey: state.datesArr[day][0]
            }

        default:
            return state;
    }
}

export const initialActiveKey = () => {
    return {
        type: INITIAL_ACTIVE_KEY
    }
}

export default seansReduser;
//
// let activeKey = findActiveKey();
//
// let [todayDate, setTodayDate] = useState("Дата");
//
// useEffect(() => {
//     let todayItem = datesArr.find((item) => item[0] == activeKey);
//     setTodayDate(todayItem[1] +" "+ todayItem[2]);
// }, [activeKey]);


