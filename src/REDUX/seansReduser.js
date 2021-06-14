const SET_TODAY_SCEDULE_ITEM = 'SET_TODAY_SCEDULE_ITEM'
const CHANGE_SCEDULE_ITEM_KEY = 'CHANGE_SCEDULE_ITEM_KEY'
const INITIAL_BUTTON_TITLE = 'INITIAL_BUTTON_TITLE'
const CHANGE_BUTTON_TITLE = 'CHANGE_BUTTON_TITLE'
const CREATE_ACTUAL_DATES_ARR = 'CREATE_ACTUAL_DATES_ARR'

let initialState = {
  datesArr: [
    ['day0', 'Воскресенье', '30 мая'],
    ['day1', 'Понедельник', '31 мая'],
    ['day2', 'Вторник', '1 июня'],
    ['day3', 'Среда', '2 июня'],
    ['day4', 'Четверг', '27 мая'],
    ['day5', 'Пятница', '28 мая'],
    ['day6', 'Суббота', '29 мая'],
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
      }
    case CHANGE_SCEDULE_ITEM_KEY:
      return {
        ...state,
        activeSceduleItemKey: action.activeSceduleItemKey,
      }
    case INITIAL_BUTTON_TITLE:
      let todayItem = state.datesArr.find(
        item => item[0] === state.activeSceduleItemKey
      )
      return {
        ...state,
        buttonTitle: todayItem[1] + ' ' + todayItem[2],
      }
    case CHANGE_BUTTON_TITLE:
      return {
        ...state,
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
export const changeSceduleItemKey = activeSceduleItemKey => ({
  type: CHANGE_SCEDULE_ITEM_KEY,
  activeSceduleItemKey,
})
export const initialButtonTitle = () => ({ type: INITIAL_BUTTON_TITLE })
export const changeButtonTitle = buttonTitle => ({
  type: CHANGE_BUTTON_TITLE,
  buttonTitle,
})
export const createActualDatesArr = () => ({ type: CREATE_ACTUAL_DATES_ARR })

export default seansReduser
