import React, { useEffect } from 'react'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useParams } from 'react-router'
import Films from '../Films/Films'

function SelectedMovie({
  filmsObject,
  createFilmsObject,
  Q,
  siteMode,
  themeCl,
  fontSize,
}) {
  const { film_id } = useParams()
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

  return (
    <>
      <div className={`content__gridLeftItem--3fr`}>
        <div className='selectedMovie'>
          {fontSize !== '200' && <FilmImg />}

          <div className='selectedMovie--rightFr'>
            <div className='selectedMovie__title'>
              <h2 className={siteMode === 'special' ? themeCl.elems : ''}>
                {filmItem['title']}
              </h2>
              <p className={siteMode === 'special' ? themeCl.elems : ''}>
                Смотрите {`${filmItem['beginDate']} ${filmItem['endDate']}`}
              </p>
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
          />
        </div>
        {siteMode === 'special' && <Films />}
      </div>
    </>
  )
}

export default SelectedMovie
