import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './REDUX/store'
import '@testing-library/jest-dom/extend-expect'

export const renderWithRouterAndStore = component => {
  return render(
    <HashRouter>
      <Provider store={store}>{component}</Provider>
    </HashRouter>
  )
}

export const withRouterAndStore = component => {
  return (
    <HashRouter>
      <Provider store={store}>{component}</Provider>
    </HashRouter>
  )
}

describe('App:', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  // it('App indexPage renders', () => {
  //   render(
  //     <HashRouter>
  //       <Provider store={store}>
  //         <App />
  //       </Provider>
  //     </HashRouter>
  //   )
  //   // render(withRouterAndStore(<App />))

  //   expect(screen.getByText(/информация/i)).toBeInTheDocument()
  // })

  it('Bottom swiper renders', async () => {
    // render(withRouterAndStore(<App />))
    render(
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    )

    // expect(await screen.findByTestId(/bottom_swiper/i)).toBeInTheDocument()

    screen.debug()
  })
})
