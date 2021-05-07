import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

let filmsSpecial = null

function Films({ films }) {
  if (!filmsSpecial) {
    filmsSpecial = films.map(f => (
      <div className='filmsSpecial__flex__item' key={f.link}>
        <Link className={'linkWrapper'} to={`/movies/${f.link}`}>
          <div className={`filmsSpecial__flex__item__img`}>
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

  return (
    <div className='filmsSpecial'>
      <h1 className={'filmsSpecial__h1'}>Фильмы</h1>
      <div className={'filmsSpecial__flex'}>{filmsSpecial}</div>
    </div>
  )
}

let mapStateToProps = state => ({
  films: state.cinema.films,
})

export default compose(connect(mapStateToProps, {}))(Films)
