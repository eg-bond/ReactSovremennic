import { act, screen, fireEvent } from '@testing-library/react'
import { delay } from '../../helpers'
import SushiContainer from './SushiContainer'
import { renderWithRouterAndRedux } from '../../App.test'
import { trDuration } from './sushiHelpers'

describe('Sushi tests:', () => {
  const imgChanging = () => delay(trDuration)

  beforeEach(() => {
    renderWithRouterAndRedux(<SushiContainer isMobile={false} />)
  })

  it('Desktop version renders correctly', () => {
    expect(screen.getAllByRole('button')).toHaveLength(15)
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
})