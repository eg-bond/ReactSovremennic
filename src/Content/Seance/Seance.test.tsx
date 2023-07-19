import { act, fireEvent, screen } from '@testing-library/react'
import { renderWithRouterAndRedux } from '../../App.test'
import { setTodayScheduleItem_AC } from '../../REDUX/seance/seanceReducer'
import Seance from './Seance'
import type { SeanceStateT } from '../../REDUX/seance/seanceReducerT'
import { delay } from '../../helpers'
import { trDuration } from '../Sushi/sushiHelpers'
import schedule from './schedule'

vitest.mock('../../Template/BarSlider')

describe('Seance tests:', () => {
  const imgChanging = () => delay(trDuration)

  describe('Desktop:', () => {
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
      const { store } = renderWithRouterAndRedux(<Seance isMobile={true} />)
      // initialization
      store.dispatch(setTodayScheduleItem_AC())
      activeKey = store.getState().seance.activeScheduleItemKey
    })

    it('Mobile version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(1)
      expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('Menu items renders fine', () => {
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getAllByRole('listitem')).toHaveLength(7)
    })

    it('Menu items activation works', async () => {
      const xsMenuBtn = screen.getByRole('button')
      fireEvent.click(xsMenuBtn)
      expect(screen.getByTestId(activeKey + '_xs')).toHaveClass('active')

      fireEvent.click(screen.getByTestId('day5_xs'))
      await act(imgChanging)
      fireEvent.click(xsMenuBtn)
      expect(screen.getByTestId('day5_xs')).toHaveClass('active')

      if (activeKey + '_xs' !== 'day5_xs') {
        expect(screen.getByTestId(activeKey + '_xs')).not.toHaveClass('active')
      }
    })

    it('Popover closes after click on menu item', async () => {
      const xsMenuBtn = screen.getByRole('button')
      fireEvent.click(xsMenuBtn)
      expect(screen.queryByTestId(activeKey + '_xs')).toBeVisible()

      fireEvent.click(screen.getByTestId('day5_xs'))
      await act(imgChanging)
      expect(screen.queryByTestId(activeKey + '_xs')).not.toBeVisible()
    })
  })
})
