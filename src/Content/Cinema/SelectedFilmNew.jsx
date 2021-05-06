import React from 'react'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useSpecialContext } from '../../SpecialContext'
import { useParams } from 'react-router'

function SelectedFilmNew({ films, Q }) {
  const { siteMode, themeCl, fontSize } = useSpecialContext()
  const match = useParams()

  let filmItem = films.find(film => film.link === match.film)
  let filmImgPath = `Images/description/${filmItem['link']}_D.jpg`

  const FilmImg = () => (
    <>
      {fontSize !== '200' && (
        <div className='filmFlex1 row-xs'>
          <div className='descImg'>
            <img src={filmImgPath} alt={filmItem['title']} />
          </div>
        </div>
      )}
    </>
  )

  return (
    <div className={`padding_15xs `}>
      <div className='col-lg-9 col-md-9 col-sm-9 margin-top-2'>
        <div className='film_info'>
          <FilmImg />

          <div className='filmFlex2'>
            <div className={`description_h`}>
              <h2 className={siteMode === 'special' ? themeCl.elems : ''}>
                {filmItem['title']}
              </h2>
              <p className={siteMode === 'special' ? themeCl.elems : ''}>
                Смотрите {`${filmItem['beginDate']} ${filmItem['endDate']}`}
              </p>
            </div>
            <table className='description_table'>
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
                  <td>Продолжительность</td>
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

            {Q.desktop && (
              <DescriptionTrailer
                description={filmItem['description']}
                trailer_src={filmItem['playerCode']}
                siteMode={siteMode}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedFilmNew
