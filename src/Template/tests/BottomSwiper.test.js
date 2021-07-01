import React from 'react'
import { render, screen } from '@testing-library/react'
import BottomSwiper from '../BottomSwiper'

it('bottom swiper renders correctly', async () => {
  render(<BottomSwiper />)
  // screen.debug()
  // expect(await screen.findByText(/тихое место 2/i)).toBeInTheDocument()
  // screen.debug()
})
