import { fireEvent, screen } from '@testing-library/react'
import { renderWithRouterAndRedux } from '../../App.test'
import { matchMediaMock } from '../../test/matchMediaMock'
import App from '../../App'
import { switchSiteMode_AC } from '../../REDUX/special/specialReducer'

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
  // it('Color buttons work properly:', () => {
  //   fireEvent.click(screen.getByText(/версия для слабовидящих/i))
  //   expect(screen.queryByText(/Информация/i)).toHaveStyle(`color: white`)
  // })
})
