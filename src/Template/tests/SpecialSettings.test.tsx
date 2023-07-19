import { fireEvent, screen } from '@testing-library/react'
import { renderWithRouterAndRedux } from '../../App.test'
import { matchMediaMock } from '../../test/matchMediaMock'
import App from '../../App'
import { switchSiteMode_AC } from '../../REDUX/special/specialReducer'
import { themeColors } from '../../hooks/useChangeTheme'

describe('Simple working test', () => {
  beforeEach(() => {
    matchMediaMock('desktop')
    const { store } = renderWithRouterAndRedux(<App />)
    store.dispatch(switchSiteMode_AC({ mode: 'default' }))
  })
  afterEach(() => {
    vi.resetAllMocks()
  })
  it('SpecialSettings button is working:', () => {
    fireEvent.click(screen.getByText(/версия для слабовидящих/i))
    expect(screen.queryByText(/размер шрифта/i)).toBeVisible()

    fireEvent.click(screen.getByText(/обычная версия сайта/i))
    expect(screen.queryByText(/размер шрифта/i)).toBeNull()
  })
  it('HideImages button works fine:', () => {
    fireEvent.click(screen.getByText(/версия для слабовидящих/i))
    expect(screen.queryByAltText(/Суши-бар/i)).toBeVisible()

    fireEvent.click(screen.getByRole('checkbox'))
    expect(screen.queryByAltText(/Суши-бар/i)).not.toBeVisible()
    expect(screen.queryByAltText(/Подарочный сертификат/i)).not.toBeVisible()
  })
  it('Color buttons work properly:', () => {
    fireEvent.click(screen.getByText(/версия для слабовидящих/i))

    const docStyle = document.documentElement.style
    const clrButtons = screen.getAllByRole('button').splice(0, 5)
    // blackWhite theme
    expect(docStyle.getPropertyValue('--mainClr')).toBe(
      themeColors.blackWhite.main
    )
    expect(docStyle.getPropertyValue('--secondaryClr')).toBe(
      themeColors.blackWhite.secondary
    )

    // whiteBlack theme
    fireEvent.click(clrButtons[1])
    expect(docStyle.getPropertyValue('--mainClr')).toBe(
      themeColors.whiteBlack.main
    )
    expect(docStyle.getPropertyValue('--secondaryClr')).toBe(
      themeColors.whiteBlack.secondary
    )

    // blackBlue theme
    fireEvent.click(clrButtons[2])
    expect(docStyle.getPropertyValue('--mainClr')).toBe(
      themeColors.blackBlue.main
    )
    expect(docStyle.getPropertyValue('--secondaryClr')).toBe(
      themeColors.blackBlue.secondary
    )
  })
  it('Font buttons work properly:', () => {
    fireEvent.click(screen.getByText(/версия для слабовидящих/i))

    const docStyle = document.documentElement.style
    const fontButtons = screen.getAllByRole('button').splice(5, 7)
    expect(docStyle.getPropertyValue('--htmlFontSize')).toBe('14px')

    fireEvent.click(fontButtons[1])
    expect(docStyle.getPropertyValue('--htmlFontSize')).toBe('21px')

    fireEvent.click(fontButtons[2])
    expect(docStyle.getPropertyValue('--htmlFontSize')).toBe('26px')
  })
})
