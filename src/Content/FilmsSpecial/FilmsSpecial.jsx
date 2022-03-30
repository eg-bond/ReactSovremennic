import React from 'react'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

let filmsSpecial = null

function FilmsSpecial({ films, siteMode }) {
  if (!filmsSpecial) {
    filmsSpecial = films.map(f => (
      <div className='filmsSpecial__flex__item' key={f.link}>
        <Link className={'linkWrapper'} to={`/movies/${f.link}`}>
          <div className='filmsSpecial__flex__item__img'>
            <img src={`./Images/top_menu/${f.link}.gif`} alt={f.title} />
          </div>
          <div className={'filmsSpecial__flex__title'}>
            <h2>{f.title}</h2>
            <p>{f.beginDate}</p>
          </div>
        </Link>
      </div>
    ))
  }

  let match = useMatch('films')
  let navigate = useNavigate()

  // redirect if siteMode was switched on filmsSpecial page
  if (siteMode == 'default' && match) {
    navigate('/', { replace: true })
  }

  let titleCl = match ? 'filmsSpecialPage__h1' : 'filmsSpecial__h1'

  return (
    <div className='filmsSpecial'>
      <h1 className={titleCl}>Фильмы</h1>
      <div className={'filmsSpecial__flex'}>{filmsSpecial}</div>
    </div>
  )
}

let mapStateToProps = state => ({
  films: state.cinema.films,
})

export default compose(connect(mapStateToProps, {}))(FilmsSpecial)
