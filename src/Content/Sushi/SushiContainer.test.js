import { act, render, screen } from '@testing-library/react'
import SushiContainer, { trDuration } from './SushiContainer'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from '../../REDUX/store'
import { delay, queries } from '../../helpers'
import { useMediaQuery } from '@material-ui/core'
import * as preload from './preload'

export const withStore = component => {
  return <Provider store={store}>{component}</Provider>
}

jest.mock('@material-ui/core')
preload.preloadImg = jest.fn()

describe('Sushi tests:', () => {
  describe('Desctop:', () => {
    const imgChanging = () => delay(trDuration + 50)

    beforeEach(() => {
      useMediaQuery.mockImplementation(q =>
        q === queries.desktop ? true : false
      )
      preload.preloadImg.mockImplementation(
        () =>
          new Promise(res => {
            setTimeout(() => res(), trDuration - 50)
          })
      )
      render(<SushiContainer siteMode={'default'} />)
    })

    it('Desctop version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(15)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('Menu items activation works fine', async () => {
      const newBtn = screen.getByText(/новинки меню/i)
      const saladsBtn = screen.getByText(/салаты/i)
      expect(newBtn).toHaveClass('active')

      userEvent.click(saladsBtn)
      await act(imgChanging)

      expect(saladsBtn).toHaveClass('active')
      expect(newBtn).not.toHaveClass('active')
    })

    it('Scedule items changes correctly', async () => {
      expect(screen.getByAltText(/new/i)).toBeInTheDocument()

      userEvent.click(screen.getByTestId('salads'))
      await act(imgChanging)
      expect(screen.getByAltText(/salads/i)).toBeInTheDocument()

      userEvent.click(screen.getByTestId('rolls'))
      await act(imgChanging)
      expect(screen.getByAltText(/rolls/i)).toBeInTheDocument()
    })

    it('Multiple clicks on navItems processed properly', async () => {
      userEvent.click(screen.getByTestId('rolls'))
      userEvent.click(screen.getByTestId('salads'))
      userEvent.click(screen.getByTestId('brand_rolls'))
      userEvent.click(screen.getByTestId('salads'))
      userEvent.click(screen.getByTestId('sets'))
      userEvent.click(screen.getByTestId('garnish'))
      userEvent.click(screen.getByTestId('dessert'))
      // если поставить последним ключем sushi - будет ошибка, но это правильное поведение
      let lastKey = 'soups'
      userEvent.click(screen.getByTestId(lastKey))
      await act(imgChanging)
      expect(screen.getByAltText(lastKey)).toBeInTheDocument()
    })
  })

  describe('Special:', () => {
    beforeEach(() => {
      useMediaQuery.mockImplementation(q =>
        q === queries.desktop ? true : false
      )
      render(<SushiContainer siteMode={'special'} />)
    })

    it('Mobile version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(19)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })
})
