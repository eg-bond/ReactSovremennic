import { memo, useCallback, useEffect } from 'react'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useParams } from 'react-router'
// import FilmsSpecial from '../FilmsSpecial/FilmsSpecial'
import { useAppDispatch, useAppSelector } from '../../REDUX/store'
import { createFilmsObject_AC } from '../../REDUX/cinema/cinemaReducer'
import type { FilmItemT } from '../../REDUX/cinema/cinemaReducerT'
import { FilmImg } from './FilmImg'

const SelectedMovie = memo(function SelectedMovie() {
  const { fontSize } = useAppSelector(state => state.special)
  const { filmsObject } = useAppSelector(state => state.cinema)
  const dispatch = useAppDispatch()

  const createFilmsObject = useCallback(() => {
    dispatch(createFilmsObject_AC())
  }, [])
  //--------------------------------------------

  const { film_id } = useParams()

  const filmsObjCreated = useCallback(
    () => Object.keys(filmsObject).length,
    [filmsObject]
  )

  // Creates filmsObject if it doesn't exist
  useEffect(() => {
    !filmsObjCreated() && createFilmsObject()
  }, [createFilmsObject, filmsObjCreated])

  if (!filmsObjCreated()) {
    return <div className='selectedMovie'></div>
  }

  const filmItem: FilmItemT = filmsObject[film_id as string]

  const gridClass =
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
          fontSize={fontSize}
        />
      </div>
    </div>
  )
})

export default SelectedMovie
