import React from 'react'
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

  if (!filmsObject) {
    createFilmsObject()
    return (
      <div className={`padding_15xs`}>
        <div className='col-lg-9 col-md-9 col-sm-9 margin-top-2'></div>
      </div>
    )
  }

  let filmItem = filmsObject[film_id]

  const FilmImg = () => (
    <div className='filmFlex1 row-xs'>
      <div className='descImg'>
        <img
          src={`Images/description/${filmItem.link}_D.jpg`}
          alt={filmItem.title}
        />
      </div>
    </div>
  )

  return (
    <>
      <div className={`padding_15xs `}>
        <div className='col-lg-9 col-md-9 col-sm-9 margin-top-2'>
          <div className='film_info'>
            {fontSize !== '200' && (
              <FilmImg link={filmItem.link} title={filmItem.title} />
            )}

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
          {siteMode === 'special' && <Films />}
        </div>
      </div>
      {Q.mobile && (
        <DescriptionTrailer
          description={filmItem['description']}
          trailer_src={filmItem['playerCode']}
          siteMode={siteMode}
        />
      )}
    </>
  )
}

export default SelectedMovie
