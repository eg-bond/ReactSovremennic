import { renderWithRouterAndRedux } from '../../App.test'
import IndexContent from './IndexContent'
import { screen } from '@testing-library/react'
import '../../SCSS/style.scss'
vitest.mock('../../Template/BarSlider')

describe('Index page tests', () => {
  it('Has Information title:', () => {
    renderWithRouterAndRedux(<IndexContent isMobile={false} />)
    const infoTitle = screen.queryByText(/Информация/i)
    expect(infoTitle).toBeVisible()
  })

  it('There are mobile Ads in mobile resolution', async () => {
    renderWithRouterAndRedux(<IndexContent isMobile={true} />)
    const mobileAds = screen.queryByTestId('mobile_adv')
    expect(mobileAds).toBeInTheDocument()
  })

  it('No mobile Ads in desktop resolution', async () => {
    renderWithRouterAndRedux(<IndexContent isMobile={false} />)
    const mobileAds = screen.queryByTestId('mobile_adv')
    expect(mobileAds).not.toBeInTheDocument()
  })
})
