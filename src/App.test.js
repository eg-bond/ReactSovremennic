import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Footer from './Template/Footer'
import BottomSwiper from './Template/BottomSwiper'
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

export const withStore = component => {
  return <Provider store={store}>{component}</Provider>
}

export const withRouter = component => {
  return <HashRouter>{component}</HashRouter>
}

describe('App:', () => {
  it('App ...', () => {})
})
