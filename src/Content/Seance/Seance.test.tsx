import { act, fireEvent, screen } from '@testing-library/react'
import { renderWithRouterAndRedux } from '../../App.test'
import { setTodayScheduleItem_AC } from '../../REDUX/seance/seanceReducer'
import type { SeanceStateT } from '../../REDUX/seance/seanceReducerT'
import { delay, reg } from '../../helpers'
import schedule from './schedule'
import Seance from './Seance'
import { matchMediaMock } from '../../test/matchMediaMock'
import { trDuration } from '../Sushi/sushiHelpers'
vitest.mock('../../Template/BarSlider')

describe('Seance tests:', () => {
  const imgChanging = () => delay(trDuration)

  // a little helper obj
  const keyToTitle = {
    day0: 'Воскресенье',
    day1: 'Понедельник',
    day2: 'Вторник',
    day3: 'Среда',
    day4: 'Четверг',
    day5: 'Пятница',
    day6: 'Суббота',
    '': 'just for TS not to bark on me',
  }
  describe('Desktop:', () => {
    let activeKey: SeanceStateT['activeScheduleItemKey']

    beforeEach(() => {
      const { store } = renderWithRouterAndRedux(<Seance isMobile={false} />)
      // initialization
      store.dispatch(setTodayScheduleItem_AC())
      activeKey = store.getState().seance.activeScheduleItemKey
    })

    it('Todays menu button is active', () => {
      const todaysBtn = screen.queryByText(keyToTitle[activeKey])?.parentElement
      expect(todaysBtn).toHaveClass('active')
    })

    it('Menu items activation works fine', async () => {
      const thButton = screen.getByText(/четверг/i)
        ?.parentElement as HTMLElement
      const sunButton = screen.getByText(/воскресенье/i)
        ?.parentElement as HTMLElement

      fireEvent.click(thButton)
      await act(imgChanging)
      expect(thButton).toHaveClass('active')

      fireEvent.click(sunButton)
      await act(imgChanging)
      expect(sunButton).toHaveClass('active')
      expect(thButton).not.toHaveClass('active')
    })

    it('Schedule items changes correctly', async () => {
      const thButton = screen.getByText(/четверг/i)
      const sunButton = screen.getByText(/воскресенье/i)
      const monButton = screen.getByText(/понедельник/i)

      fireEvent.click(thButton)
      await act(imgChanging)
      expect(screen.getByText(schedule['day4'][2][0])).toBeInTheDocument()
      expect(screen.getByText(schedule['day4'][3][0])).toBeInTheDocument()

      fireEvent.click(sunButton)
      await act(imgChanging)
      expect(screen.getByText(schedule['day0'][2][0])).toBeInTheDocument()
      expect(screen.getByText(schedule['day0'][3][0])).toBeInTheDocument()

      fireEvent.click(monButton)
      await act(imgChanging)
      expect(screen.getByText(schedule['day1'][2][0])).toBeInTheDocument()
      expect(screen.getByText(schedule['day1'][3][0])).toBeInTheDocument()
    })
  })
  describe('Mobile:', () => {
    let activeKey: SeanceStateT['activeScheduleItemKey']

    beforeEach(() => {
      matchMediaMock('mobile')
      const { store } = renderWithRouterAndRedux(<Seance isMobile={true} />)
      // initialization
      store.dispatch(setTodayScheduleItem_AC())
      activeKey = store.getState().seance.activeScheduleItemKey
    })

    it('Mobile version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(7)
      expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('Initial activation forks fine', () => {
      const initialBtn = screen.getByText(reg(keyToTitle[activeKey], 'i'))
      expect(initialBtn).toHaveClass('active')
    })

    it('Menu items activation works', async () => {
      const sunBtn = screen.getByText(reg('воскресенье', 'i'))
      fireEvent.click(sunBtn)
      expect(sunBtn).toHaveClass('active')

      const monBtn = screen.getByText(reg('понедельник', 'i'))
      fireEvent.click(monBtn)
      expect(monBtn).toHaveClass('active')
      expect(sunBtn).not.toHaveClass('active')
    })
  })
})
