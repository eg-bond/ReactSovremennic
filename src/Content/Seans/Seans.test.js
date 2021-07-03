import React from 'react'
import { render, screen } from '@testing-library/react'
import Seans from './Seans'
import { withRouterAndStore } from '../../App.test'
import userEvent from '@testing-library/user-event'
import { connect } from 'react-redux'
import {
  changeSceduleItem,
  setTodaySceduleItem,
} from '../../REDUX/seansReduser'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import store from '../../REDUX/store'
import { reducer } from '../../REDUX/seansReduser'

export const withStore = component => {
  return <Provider store={store}>{component}</Provider>
}

describe('Seanse tests:', () => {
  //   let mapStateToProps = state => ({
  //     datesArr: state.seansPage.actualDatesArr,
  //     activeSceduleItemKey: state.seansPage.activeSceduleItemKey,
  //     buttonTitle: state.seansPage.buttonTitle,
  //   })

  //   let ComposedSeanse = compose(
  //     connect(mapStateToProps, {
  //       changeSceduleItem,
  //       setTodaySceduleItem,
  //     })
  //   )(Seans)

  // const renderWithRedux = (component, { initialState, store } = {}) => {
  //   return {
  //     ...render(<Provider store={store}>{component}</Provider>),
  //     store,
  //   }
  // }

  it('Seanse desctop renders', async () => {
    render(
      <Provider store={store}>
        <Seans mobileQ={false} desktopQ={true} />
      </Provider>
    )
    // renderWithRedux(<Seans mobileQ={false} desktopQ={true} />)
    expect(await screen.findByText(/суббота/i)).toBeInTheDocument()
    screen.debug()
    // expect(screen.getAllByRole('link')).toHaveLength(5)
  })
})
