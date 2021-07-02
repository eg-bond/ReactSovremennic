import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation'
import { withRouterAndStore } from '../../App.test'
import userEvent from '@testing-library/user-event'

describe('Navigation tests:', () => {
  it('Navigation in default mode have 5 links', () => {
    render(
      withRouterAndStore(
        <Navigation
          siteMode={'default'}
          fontSize={'14px'}
          theme={'blackWhite'}
        />
      )
    )

    expect(screen.getAllByRole('link')).toHaveLength(5)
  })

  it('Navigation in special mode have 6 links', () => {
    render(
      withRouterAndStore(
        <Navigation
          siteMode={'special'}
          fontSize={'14px'}
          theme={'blackWhite'}
        />
      )
    )

    expect(screen.getAllByRole('link')).toHaveLength(6)
    expect(screen.getByText(/фильмы/i)).toBeInTheDocument()
  })

  it('Navigation links activates by click', () => {
    render(
      withRouterAndStore(
        <Navigation
          siteMode={'special'}
          fontSize={'14px'}
          theme={'blackWhite'}
        />
      )
    )
    const aboutLink = screen.getByText(/о кинотеатре/i)
    const sushiLink = screen.getByText(/суши/i)
    userEvent.click(aboutLink)
    expect(aboutLink).toHaveClass('active')
    userEvent.click(sushiLink)
    expect(sushiLink).toHaveClass('active')
    expect(aboutLink).not.toHaveClass('active')
  })
})
