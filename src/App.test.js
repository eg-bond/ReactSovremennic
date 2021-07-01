import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './REDUX/store'
import '@testing-library/jest-dom/extend-expect'

it('bottom swiper renders correctly', () => {
  render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  )

  expect(screen.getByText(/информация/i)).toBeInTheDocument()
  // screen.debug()
})
