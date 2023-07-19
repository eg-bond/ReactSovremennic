import { Provider } from 'react-redux'
import App from './App'
import { render, screen } from '@testing-library/react'
import store from './REDUX/store'
import { MemoryRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { matchMediaMock } from './test/matchMediaMock'

export const renderWithRedux = (component: ReactNode) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
export const renderWithRouter = (
  component: ReactNode,
  initialEntries: string[] = ['/']
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
    ),
  }
}
export const renderWithRouterAndRedux = (
  component: ReactNode,
  initialEntries: string[] = ['/']
) => {
  return {
    ...render(
      <MemoryRouter initialEntries={initialEntries}>
        <Provider store={store}>{component}</Provider>
      </MemoryRouter>
    ),
    store,
  }
}

describe('Simple working test', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })
  it('App rendered in desktop mode:', () => {
    matchMediaMock('desktop')
    renderWithRouterAndRedux(<App />)
    expect(screen.queryByAltText(/подарочный серт/i)).toBeVisible()
  })
  it('App rendered in mobile mode:', () => {
    matchMediaMock('mobile')
    renderWithRouterAndRedux(<App />)
    expect(screen.queryByAltText(/новинки суши/i)).toBeVisible()
  })
})
