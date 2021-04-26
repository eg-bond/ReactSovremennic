import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './REDUX/store'
import { SpecialContextProvider } from './SpecialContext'

ReactDOM.render(
  <HashRouter>
    <Route path='/:id?'>
      <Provider store={store}>
        <SpecialContextProvider>
          <App />
        </SpecialContextProvider>
      </Provider>
    </Route>
  </HashRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
