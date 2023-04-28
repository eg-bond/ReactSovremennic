import React, { useEffect } from 'react'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useParams } from 'react-router'
import FilmsSpecial from '../FilmsSpecial/FilmsSpecial'

const FilmImg = ({ link, title }) => {
  return (
    <div className='selectedMovie--leftFr'>
      <div className={'selectedMovie__image skeleton'}>
        <img
          src={`./Images/description/${link}_D.webp`}
          alt={title}
          key={link + 'SM'}
        />
      </div>
    </div>
  )
}

function SelectedMovie({ filmsObject, createFilmsObject, siteMode, fontSize }) {
  const { film_id } = useParams()

  // Creates filmsObject if it doesn't exist
  useEffect(() => {
    !filmsObject && createFilmsObject()
  }, [createFilmsObject, filmsObject])

  if (!filmsObject) {
    return <div className='selectedMovie'></div>
  }

  let filmItem = filmsObject[film_id]

  let gridClass =
    fontSize !== '26px' ? 'selectedMovie--rightFr' : 'selectedMovie--fullFr'

  return (
    <div className='content__gridLeftItem--3fr'>
      <div className='selectedMovie'>
        {fontSize !== '26px' && (
          <FilmImg link={filmItem.link} title={filmItem.title} />
        )}

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
