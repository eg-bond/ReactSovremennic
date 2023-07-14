import { Provider } from 'react-redux'
import App from './App'
import { render, screen } from '@testing-library/react'
import store from './REDUX/store'
import { HashRouter } from 'react-router-dom'
import { ReactNode } from 'react'

export const renderWithRedux = (component: ReactNode) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
export const renderWithRouter = (component: ReactNode) => {
  return {
    ...render(<HashRouter>{component}</HashRouter>),
  }
}
export const renderWithRouterAndRedux = (component: ReactNode) => {
  return {
    ...render(
      <HashRouter>
        <Provider store={store}>{component}</Provider>
      </HashRouter>
    ),
    store,
  }
}

describe('Simple working test', () => {
  it('App:', () => {})
})
