import React from 'react'
import { act, render, screen } from '@testing-library/react'
import Seans from './Seans'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import scedule from './scedule'
import {
  createActualDatesArr,
  setTodaySceduleItem,
} from '../../REDUX/seansReduser'
import { Provider } from 'react-redux'
import store from '../../REDUX/store'
import { delay } from '../../helpers'

describe('Seanse tests:', () => {
  const renderWithRedux = component => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }
  describe('Desctop:', () => {
    beforeEach(() => {
      let { store } = renderWithRedux(<Seans isMobile={false} />)
      // диспатчим инициализационные экшены
      store.dispatch(createActualDatesArr())
      store.dispatch(setTodaySceduleItem())
    })

    it('Desctop version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(7)
      expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('Menu items activation works fine', async () => {
      const thButton = screen.getByText(/четверг/i)
      userEvent.click(thButton)
      await act(() => delay(250))
      expect(thButton).toHaveClass('active')

      const sunButton = screen.getByText(/воскресенье/i)
      userEvent.click(sunButton)
      await act(() => delay(250))
      expect(sunButton).toHaveClass('active')
      expect(thButton).not.toHaveClass('active')
    })

    it('Scedule items changes correctly', async () => {
      let activeSIKey = store.getState().seansPage.activeSceduleItemKey
      expect(screen.getByText(scedule[activeSIKey][4][0])).toBeInTheDocument()

      const sredaBtn = screen.getByTestId('day3')
      userEvent.click(sredaBtn)
      await act(() => delay(250))
      expect(screen.getByText(scedule['day3'][3][0])).toBeInTheDocument()
      expect(screen.getByText(scedule['day3'][4][0])).toBeInTheDocument()

      const todayBtn = screen.getByTestId(activeSIKey)
      userEvent.click(todayBtn)
      await act(() => delay(250))
      expect(screen.getByText(scedule[activeSIKey][4][0])).toBeInTheDocument()
      expect(screen.getByText(scedule[activeSIKey][5][0])).toBeInTheDocument()
    })

    it('Multiple clicks on navItems processed properly', async () => {
      userEvent.click(screen.getByTestId('day3'))
      userEvent.click(screen.getByTestId('day4'))
      userEvent.click(screen.getByTestId('day5'))
      userEvent.click(screen.getByTestId('day6'))
      userEvent.click(screen.getByTestId('day1'))
      userEvent.click(screen.getByTestId('day2'))
      userEvent.click(screen.getByTestId('day3'))
      userEvent.click(screen.getByTestId('day2'))
      // если поставить последним ключем activeKey - будет ошибка, но это правильное поведение
      let lastKey = 'day6'
      userEvent.click(screen.getByTestId(lastKey))
      await delay(300)
      expect(screen.getByText(scedule[lastKey][3][0])).toBeInTheDocument()
      expect(screen.getByText(scedule[lastKey][4][0])).toBeInTheDocument()
    })
  })
  describe('Mobile:', () => {
    beforeEach(() => {
      let { store } = renderWithRedux(<Seans isMobile={true} />)
      // диспатчим инициализационные экшены
      store.dispatch(createActualDatesArr())
      store.dispatch(setTodaySceduleItem())
    })

    it('Mobile version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(1)
      expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('Menu items renders fine', () => {
      const xsMenuBtn = screen.getByRole('button')
      userEvent.click(xsMenuBtn)
      const xsMenuItems = screen.getAllByRole('listitem')

      expect(xsMenuItems).toHaveLength(7)
    })

    it('Menu items activation works', async () => {
      let activeSIKey = store.getState().seansPage.activeSceduleItemKey
      const xsMenuBtn = screen.getByRole('button')
      userEvent.click(xsMenuBtn)
      expect(screen.getByTestId(activeSIKey + '_xs')).toHaveClass('active')

      userEvent.click(screen.getByTestId('day0_xs'))
      await act(() => delay(250))
      userEvent.click(xsMenuBtn)
      expect(screen.getByTestId('day0_xs')).toHaveClass('active')
      expect(screen.getByTestId(activeSIKey + '_xs')).not.toHaveClass('active')
    })

    it('Multiple clicks on navItems processed properly', async () => {
      const xsMenuBtn = screen.getByRole('button')
      userEvent.click(xsMenuBtn)

      userEvent.click(screen.getByTestId('day3_xs'))
      userEvent.click(screen.getByTestId('day4_xs'))
      userEvent.click(screen.getByTestId('day5_xs'))
      userEvent.click(screen.getByTestId('day6_xs'))
      userEvent.click(screen.getByTestId('day1_xs'))
      userEvent.click(screen.getByTestId('day2_xs'))
      userEvent.click(screen.getByTestId('day3_xs'))
      userEvent.click(screen.getByTestId('day2_xs'))
      userEvent.click(screen.getByTestId('day4_xs'))
      await act(() => delay(300))
      expect(screen.getByText(scedule['day4'][3][0])).toBeInTheDocument()
      expect(screen.getByText(scedule['day4'][4][0])).toBeInTheDocument()
    })
  })
})
