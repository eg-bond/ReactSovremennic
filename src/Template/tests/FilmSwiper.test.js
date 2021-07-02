import React from 'react'
import { render, screen } from '@testing-library/react'
import FilmSwiper from '../FilmSwiper'
import { withRouter } from '../../App.test'
import { filmsArray } from '../../REDUX/filmsArray'

describe('FilmSwiper tests:', () => {
  it('Desktop FilmSwiper render all films', () => {
    render(withRouter(<FilmSwiper mobile={false} films={filmsArray} />))
    expect(screen.getAllByRole('img')).toHaveLength(filmsArray.length)
  })
})
