import { act, screen, fireEvent } from '@testing-library/react'
import { delay } from '../../helpers'
import SushiContainer from './SushiContainer'
import { renderWithRouterAndRedux } from '../../App.test'
import { trDuration } from './sushiHelpers'
import { matchMediaMock } from '../../test/matchMediaMock'

describe('Sushi tests:', () => {
  const imgChanging = () => delay(trDuration)
  describe('Desktop:', () => {
    beforeEach(() => {
      matchMediaMock('desktop')
      renderWithRouterAndRedux(<SushiContainer isMobile={false} />)
    })

    it('Desktop version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(16)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('Menu items activation works fine', async () => {
      const soupBtn = screen.getByText(/супы/i)
      const saladsBtn = screen.getByText(/салаты/i)

      fireEvent.click(soupBtn)
      await act(imgChanging)
      expect(soupBtn).toHaveClass('active')

      fireEvent.click(saladsBtn)
      await act(imgChanging)
      expect(saladsBtn).toHaveClass('active')
      expect(soupBtn).not.toHaveClass('active')
    })

    it('Images changes correctly', async () => {
      const soupBtn = screen.getByText(/супы/i)
      const saladsBtn = screen.getByText(/салаты/i)
      const garnishBtn = screen.getByText(/гарниры/i)

      fireEvent.click(saladsBtn)
      expect(await screen.findByAltText(/salads/i)).toBeInTheDocument()

      fireEvent.click(garnishBtn)
      expect(await screen.findByAltText(/garnish/i)).toBeInTheDocument()

      fireEvent.click(soupBtn)
      expect(await screen.findByAltText(/soups/i)).toBeInTheDocument()
    })

    it('Multiple clicks on navItems processed properly', async () => {
      fireEvent.click(screen.getByText(/супы/i))
      fireEvent.click(screen.getByText(/салаты/i))
      fireEvent.click(screen.getByText(/наборы/i))
      fireEvent.click(screen.getByText(/десерты/i))
      fireEvent.click(screen.getByText(/мини-роллы/i))
      fireEvent.click(screen.getByText(/запеченные роллы/i))

      expect(await screen.findByAltText(/hot_rolls/i)).toBeInTheDocument()
    })

    it('slider navigation works fine', async () => {
      fireEvent.click(screen.getByText(/фирменные роллы/i))
      await act(imgChanging)
      expect(screen.getByAltText(/brand_rolls1/i)?.parentNode).toHaveClass(
        'is-active'
      )

      const allButtons = screen.getAllByRole('button')
      const prevSlideBtn = allButtons[allButtons.length - 2]
      const nextSlideBtn = allButtons[allButtons.length - 1]

      fireEvent.click(nextSlideBtn)
      expect(screen.getByAltText(/brand_rolls2/i)?.parentNode).toHaveClass(
        'is-active'
      )

      fireEvent.click(nextSlideBtn)
      expect(screen.getByAltText(/brand_rolls3/i)?.parentNode).toHaveClass(
        'is-active'
      )

      fireEvent.click(prevSlideBtn)
      fireEvent.click(prevSlideBtn)
      expect(screen.getByAltText(/brand_rolls1/i)?.parentNode).toHaveClass(
        'is-active'
      )
    })

    it('slider returns to its first slide after switch to another menu item', async () => {
      fireEvent.click(screen.getByText(/фирменные роллы/i))
      await act(imgChanging)
      expect(screen.getByAltText(/brand_rolls1/i)?.parentNode).toHaveClass(
        'is-active'
      )

      const allButtons = screen.getAllByRole('button')
      const nextSlideBtn = allButtons[allButtons.length - 1]

      fireEvent.click(nextSlideBtn)
      expect(screen.getByAltText(/brand_rolls2/i)?.parentNode).toHaveClass(
        'is-active'
      )

      fireEvent.click(screen.getByText(/гарниры/i))
      await act(imgChanging)
      fireEvent.click(screen.getByText(/фирменные роллы/i))
      await act(imgChanging)
      expect(screen.getByAltText(/brand_rolls1/i)?.parentNode).toHaveClass(
        'is-active'
      )
    })
  })

  describe('Mobile:', () => {
    beforeEach(() => {
      renderWithRouterAndRedux(<SushiContainer isMobile={true} />)
    })

    it('Mobile version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(1)
      expect(screen.getByText(/салаты/i)).not.toBeVisible()
    })

    it('Menu items renders fine', () => {
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getAllByRole('listitem')).toHaveLength(16)
      expect(screen.getByText(/суши/i)).toBeVisible()
      expect(screen.getByText(/Пицца, закуски/i)).toBeVisible()
    })

    it('Menu items activation works', async () => {
      const xsMenuBtn = screen.getByRole('button')
      fireEvent.click(xsMenuBtn)
      expect(screen.getByText(/суши/i)).toHaveClass('active')

      fireEvent.click(screen.getByText(/наборы/i))
      await act(imgChanging)
      fireEvent.click(xsMenuBtn)
      expect(screen.getByText(/наборы/i)).toHaveClass('active')
      expect(screen.getByText(/суши/i)).not.toHaveClass('active')
    })
  })
})
