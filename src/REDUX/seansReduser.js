const INITIAL_ACTIVE_KEY = 'INITIAL_ACTIVE_KEY'
const CHANGE_ACTIVE_KEY = 'CHANGE_ACTIVE_KEY'
const INITIAL_BUTTON_TITLE = 'INITIAL_BUTTON_TITLE'
const CHANGE_BUTTON_TITLE = 'CHANGE_BUTTON_TITLE'
const CREATE_ACTUAL_DATES_ARR = 'CREATE_ACTUAL_DATES_ARR'

let initialState = {
  datesArr: [
    ['day0', 'Воскресенье', '11 июля'],
    ['day1', 'Понедельник', '5 июля'],
    ['day2', 'Вторник', '6 июля'],
    ['day3', 'Среда', '7 июля'],
    ['day4', 'Четверг', '8 июля'],
    ['day5', 'Пятница', '9 июля'],
    ['day6', 'Суббота', '10 июля'],
  ],
  actualDatesArr: [], // массив с датами, расположенными в правильном порядке
  beginDate: 'monday', // monday либо любое другое значение
  activeKey: '',
  buttonTitle: 'Дата',
}

export const seansReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_ACTIVE_KEY:
      let date = new Date()
      let day = date.getDay()
      return {
        ...state,
        activeKey: state.datesArr[day][0],
      }
    case CHANGE_ACTIVE_KEY:
      return {
        ...state,
        activeKey: action.activeKey,
      }
    case INITIAL_BUTTON_TITLE:
      let todayItem = state.datesArr.find(item => item[0] === state.activeKey)
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
      if (state.beginDate === 'monday') {
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

export const initialActiveKey = () => ({ type: INITIAL_ACTIVE_KEY })
export const changeActiveKey = activeKey => ({
  type: CHANGE_ACTIVE_KEY,
  activeKey,
})
export const initialButtonTitle = () => ({ type: INITIAL_BUTTON_TITLE })
export const changeButtonTitle = buttonTitle => ({
  type: CHANGE_BUTTON_TITLE,
  buttonTitle,
})
export const createActualDatesArr = () => ({ type: CREATE_ACTUAL_DATES_ARR })

export default seansReduser
