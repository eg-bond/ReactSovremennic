import { Link, useMatch, useNavigate } from 'react-router-dom'
// import { compose } from 'redux'
// import { connect } from 'react-redux'
import { useAppSelector } from '../../REDUX/store'

let filmsSpecial = null

function FilmsSpecial({ siteMode }: { siteMode: string }) {
  const { films } = useAppSelector(state => state.cinema)

  if (!filmsSpecial) {
    console.log('fsMemo')
    filmsSpecial = films.map(f => (
      <div className='filmsSpecial__flex__item' key={f.link}>
        <Link className={'linkWrapper'} to={`/movies/${f.link}`}>
          <div className='filmsSpecial__flex__item__img'>
            <img src={`./Images/top_menu/${f.link}.webp`} alt={f.title} />
          </div>
          <div className={'filmsSpecial__flex__title'}>
            <h2>{f.title}</h2>
            <p>{f.beginDate}</p>
          </div>
        </Link>
      </div>
    ))
  }

  const match = useMatch('films')
  const navigate = useNavigate()

  // redirect if siteMode was switched on filmsSpecial page
  if (siteMode === 'default' && match) {
    navigate('/', { replace: true })
  }

  const titleCl = match ? 'filmsSpecialPage__h1' : 'filmsSpecial__h1'
  console.log('fs')

  return (
    <div className='filmsSpecial'>
      <h1 className={titleCl}>Фильмы</h1>
      <div className={'filmsSpecial__flex'}>{filmsSpecial}</div>
    </div>
  )
}

export default FilmsSpecial
