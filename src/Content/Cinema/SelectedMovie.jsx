import React, { useEffect } from 'react'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useParams } from 'react-router'
import FilmsSpecial from '../FilmsSpecial/FilmsSpecial'
import { useRouteMatch } from 'react-router-dom'

function SelectedMovie({
  filmsObject,
  createFilmsObject,
  siteMode,
  fontSize,
  // pathname,
}) {
  const { film_id } = useParams()
  // let film_id = pathname.split('/')[2]
  // let match = useRouteMatch('/movies/:id')
  // let film_id = match.params.id
  // console.log(lol)

  // Формирует объект фильмов если он отсутстует
  useEffect(() => {
    !filmsObject && createFilmsObject()
  }, [createFilmsObject, filmsObject])

  if (!filmsObject) {
    return <div className='selectedMovie'></div>
  }

  let filmItem = filmsObject[film_id]

  const FilmImg = () => (
    <div className='selectedMovie--leftFr'>
      <div className='selectedMovie__image'>
        <img
          src={`./Images/description/${filmItem.link}_D.jpg`}
          alt={filmItem.title}
        />
      </div>
    </div>
  )

  let gridClass =
    fontSize !== '26px' ? 'selectedMovie--rightFr' : 'selectedMovie--fullFr'

  return (
    <div className='content__gridLeftItem--3fr'>
      <div className='selectedMovie'>
        {fontSize !== '26px' && <FilmImg />}

        <div className={gridClass}>
          <div className='selectedMovie__title'>
            <h2>{filmItem['title']}</h2>
            <p>Смотрите {`${filmItem['beginDate']} ${filmItem['endDate']}`}</p>
          </div>
          <table className='selectedMovie__table'>
            <tbody>
              <tr>
                <td>Жанр</td>
                <td>{filmItem['kind']}</td>
              </tr>
              <tr>
                <td>Режиссер</td>
                <td>{filmItem['director']}</td>
              </tr>
              <tr>
                <td>Длительность</td>
                <td>{filmItem['duration']}</td>
              </tr>
              <tr>
                <td>Возраст</td>
                <td>{filmItem['age']}</td>
              </tr>
              <tr>
                <td>В главных ролях</td>
                <td>{filmItem['actors']}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DescriptionTrailer
          description={filmItem['description']}
          trailer_src={filmItem['playerCode']}
          siteMode={siteMode}
          fontSize={fontSize}
        />
      </div>
      {siteMode === 'special' && <FilmsSpecial />}
    </div>
  )
}

export default React.memo(SelectedMovie)
