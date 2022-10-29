const SET_TODAY_SCEDULE_ITEM = 'SET_TODAY_SCEDULE_ITEM'
const CHANGE_SCEDULE_ITEM = 'CHANGE_SCEDULE_ITEM'
const CREATE_ACTUAL_DATES_ARR = 'CREATE_ACTUAL_DATES_ARR'

let initialState = {
  datesArr: [
    ['day0', 'Воскресенье', '30 октября'],
    ['day1', 'Понедельник', '31 октября'],
    ['day2', 'Вторник', '1 ноября'],
    ['day3', 'Среда', '2 ноября'],
    ['day4', 'Четверг', '27 октября'],
    ['day5', 'Пятница', '28 октября'],
    ['day6', 'Суббота', '29 октября'],
  ],
  actualDatesArr: [], // массив с датами, расположенными в правильном порядке
  weekStartsFrom: 'th', // monday либо любое другое значение
  activeSceduleItemKey: '',
  buttonTitle: null,
}

export const seansReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAY_SCEDULE_ITEM:
      let date = new Date()
      let day = date.getDay()

      return {
        ...state,
        activeSceduleItemKey: state.datesArr[day][0],
        buttonTitle: state.datesArr[day][1] + ' ' + state.datesArr[day][2],
      }
    case CHANGE_SCEDULE_ITEM:
      return {
        ...state,
        activeSceduleItemKey: action.activeSceduleItemKey,
        buttonTitle: action.buttonTitle,
      }
    case CREATE_ACTUAL_DATES_ARR:
      let newArr = []
      if (state.weekStartsFrom === 'monday') {
        newArr = [...state.datesArr, state.datesArr[0]]
        newArr.shift()
      } else {
        newArr = [
          ...state.datesArr,
          state.datesArr[0],
          state.datesArr[1],
          state.datesArr[2],
          state.datesArr[3],
        ]
        newArr.splice(0, 4)
      }
      return {
        ...state,
        actualDatesArr: newArr,
      }
    default:
      return state
  }
}

export const setTodaySceduleItem = () => ({ type: SET_TODAY_SCEDULE_ITEM })
export const changeSceduleItem = (activeSceduleItemKey, buttonTitle) => ({
  type: CHANGE_SCEDULE_ITEM,
  activeSceduleItemKey,
  buttonTitle,
})
export const createActualDatesArr = () => ({ type: CREATE_ACTUAL_DATES_ARR })

export default seansReduser
