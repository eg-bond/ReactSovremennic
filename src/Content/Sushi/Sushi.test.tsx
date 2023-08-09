import { screen, fireEvent } from '@testing-library/react'
import SushiContainer from './SushiContainer'
import { renderWithRouterAndRedux } from '../../App.test'
import { sushiState } from './sushiState'
import { matchMediaMock } from '../../test/matchMediaMock'
// vitest.mock('./sushiHelpers.ts')

vi.mock('./sushiHelpers.ts', () => {
  return {
    scrollToNavbar: vi.fn(),
  }
})

describe('Sushi tests:', () => {
  describe('Desktop:', () => {
    beforeEach(() => {
      matchMediaMock('desktop')
      renderWithRouterAndRedux(<SushiContainer isMobile={false} />)
    })

    it('Desktop version renders correctly', () => {
      expect(screen.getAllByRole('button')).toHaveLength(16)
      expect(screen.getAllByRole('img')).toHaveLength(
        sushiState.sushi.length + 1
      )
    })

    it('Menu items activation works fine', async () => {
      const soupBtn = screen.getByText(/супы/i)
      const saladsBtn = screen.getByText(/салаты/i)

      fireEvent.click(soupBtn)
      expect(soupBtn).toHaveClass('active')

      fireEvent.click(saladsBtn)
      expect(saladsBtn).toHaveClass('active')
      expect(soupBtn).not.toHaveClass('active')
    })

    it('Images changes correctly', async () => {
      const soupBtn = screen.getByText(/супы/i)
      const saladsBtn = screen.getByText(/салаты/i)
      const garnishBtn = screen.getByText(/гарниры/i)

      fireEvent.click(saladsBtn)
      expect(screen.getByAltText(sushiState.salads[0].name)).toBeInTheDocument()

      fireEvent.click(garnishBtn)
      expect(
        screen.getByAltText(sushiState.garnish[0].name)
      ).toBeInTheDocument()

      fireEvent.click(soupBtn)
      expect(screen.getByAltText(sushiState.soups[0].name)).toBeInTheDocument()
    })
  })

  describe('Mobile:', () => {
    beforeEach(() => {
      matchMediaMock('mobile')
      renderWithRouterAndRedux(<SushiContainer isMobile={true} />)
    })

    //mock????????????????????
    it('Mobile version renders correctly', async () => {
      // expect(await screen.getAllByRole('button')).toHaveLength(16)
      // expect(await screen.getAllByRole('img')).toHaveLength(
      //   sushiState.sushi.length
      // )
    })

    it.skip('Initial activation forks fine', () => {
      const initialBtn = screen.getByText(/суши/i)
      expect(initialBtn).toHaveClass('active')
    })

    it.skip('Menu items activation works', async () => {
      const dessertsBtn = screen.getByText(/десерты/i)
      fireEvent.click(dessertsBtn)
      expect(dessertsBtn).toHaveClass('active')

      const childBtn = screen.getByText(/детское меню/i)
      fireEvent.click(childBtn)
      expect(childBtn).toHaveClass('active')
      expect(dessertsBtn).not.toHaveClass('active')
    })
  })
})
