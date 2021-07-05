import React from 'react'
import { render, screen } from '@testing-library/react'
import SushiContainer from './SushiContainer'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from '../../REDUX/store'
import { delay, queries } from '../../helpers'
import { useMediaQuery } from '@material-ui/core'
import { test_object } from '../../test_object'
// const { test_object } = require('../../test_object')

export const withStore = component => {
  return <Provider store={store}>{component}</Provider>
}

jest.mock('@material-ui/core')
test_object.log = jest.fn()

describe('Sushi tests:', () => {
  describe('Desctop:', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(q =>
        q === queries.desktop ? true : false
      )
      test_object.log.mockImplementation(() =>
        console.log('mocked implementation')
      )
      render(<SushiContainer siteMode={'default'} />)
    })

    it('Desctop version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(14)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('Menu items activation works fine', async () => {
      const sushiBtn = screen.getByText(/суши/i)
      expect(sushiBtn).toHaveClass('active')

      const saladsBtn = screen.getByText(/салаты/i)
      userEvent.click(saladsBtn)
      await delay(350)
      expect(saladsBtn).toHaveClass('active')
      expect(sushiBtn).not.toHaveClass('active')
    })

    // it('Scedule items changes correctly', async () => {
    //   let activeSIKey = store.getState().seansPage.activeSceduleItemKey
    //   expect(screen.getByText(scedule[activeSIKey][4][0])).toBeInTheDocument()

    //   const sredaBtn = screen.getByTestId('day3')
    //   userEvent.click(sredaBtn)
    //   await delay(250)
    //   expect(screen.getByText(scedule['day3'][3][0])).toBeInTheDocument()
    //   expect(screen.getByText(scedule['day3'][4][0])).toBeInTheDocument()

    //   const todayBtn = screen.getByTestId(activeSIKey)
    //   userEvent.click(todayBtn)
    //   await delay(250)
    //   expect(screen.getByText(scedule[activeSIKey][5][0])).toBeInTheDocument()
    //   expect(screen.getByText(scedule[activeSIKey][6][0])).toBeInTheDocument()
    // })

    // it('Multiple clicks on navItems processed properly', async () => {
    //   userEvent.click(screen.getByTestId('day3'))
    //   userEvent.click(screen.getByTestId('day4'))
    //   userEvent.click(screen.getByTestId('day5'))
    //   userEvent.click(screen.getByTestId('day6'))
    //   userEvent.click(screen.getByTestId('day1'))
    //   userEvent.click(screen.getByTestId('day2'))
    //   userEvent.click(screen.getByTestId('day3'))
    //   userEvent.click(screen.getByTestId('day2'))
    //   // если поставить последним ключем activeKey - будет ошибка, но это правильное поведение
    //   let lastKey = 'day6'
    //   userEvent.click(screen.getByTestId(lastKey))
    //   await delay(300)
    //   expect(screen.getByText(scedule[lastKey][3][0])).toBeInTheDocument()
    //   expect(screen.getByText(scedule[lastKey][4][0])).toBeInTheDocument()
    // })
  })
  // describe('Mobile:', () => {
  //   beforeEach(() => {
  //     let { store } = renderWithRedux(<Seans mobileQ={true} desktopQ={false} />)
  //     // диспатчим инициализационные экшены
  //     store.dispatch(createActualDatesArr())
  //     store.dispatch(setTodaySceduleItem())
  //   })

  //   it('Mobile version renders correctly', () => {
  //     expect(screen.getAllByRole('button')).toHaveLength(1)
  //     expect(screen.getByRole('table')).toBeInTheDocument()
  //   })

  //   it('Menu items renders fine', () => {
  //     const xsMenuBtn = screen.getByRole('button')
  //     userEvent.click(xsMenuBtn)
  //     const xsMenuItems = screen.getAllByRole('listitem')

  //     expect(xsMenuItems).toHaveLength(7)
  //   })

  //   it('Menu items activation works', async () => {
  //     let activeSIKey = store.getState().seansPage.activeSceduleItemKey
  //     const xsMenuBtn = screen.getByRole('button')
  //     userEvent.click(xsMenuBtn)
  //     expect(screen.getByTestId(activeSIKey + '_xs')).toHaveClass('active')

  //     userEvent.click(screen.getByTestId('day0_xs'))
  //     await delay(250)
  //     userEvent.click(xsMenuBtn)
  //     expect(screen.getByTestId('day0_xs')).toHaveClass('active')
  //     expect(screen.getByTestId(activeSIKey + '_xs')).not.toHaveClass('active')
  //   })

  //   it('Multiple clicks on navItems processed properly', async () => {
  //     const xsMenuBtn = screen.getByRole('button')
  //     userEvent.click(xsMenuBtn)

  //     userEvent.click(screen.getByTestId('day3_xs'))
  //     userEvent.click(screen.getByTestId('day4_xs'))
  //     userEvent.click(screen.getByTestId('day5_xs'))
  //     userEvent.click(screen.getByTestId('day6_xs'))
  //     userEvent.click(screen.getByTestId('day1_xs'))
  //     userEvent.click(screen.getByTestId('day2_xs'))
  //     userEvent.click(screen.getByTestId('day3_xs'))
  //     userEvent.click(screen.getByTestId('day2_xs'))
  //     userEvent.click(screen.getByTestId('day4_xs'))
  //     await delay(300)
  //     expect(screen.getByText(scedule['day4'][3][0])).toBeInTheDocument()
  //     expect(screen.getByText(scedule['day4'][4][0])).toBeInTheDocument()
  //   })
  // })
})
