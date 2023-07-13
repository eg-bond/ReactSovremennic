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
    store,
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
  it('App:', () => {
    // renderWithRouterAndRedux(<App />)
    // const infoTitle = screen.queryByText(/Информация/i)
    // console.log(infoTitle)
    // expect(infoTitle).toBeVisible()
  })

  // it('should increment count on click', async () => {
  //   render(<App />)
  //   userEvent.click(screen.getByRole('button'))
  //   expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
  // })

  // it('uses flexbox in app header', async () => {
  //   render(<App />)
  //   const element = screen.getByRole('banner')
  //   expect(element.className).toEqual('App-header')
  //   expect(getComputedStyle(element).display).toEqual('flex')
  // })
})
