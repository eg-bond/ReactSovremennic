import React from 'react'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useSpecialContext } from '../../SpecialContext'

function SelectedFilm({ filmItem, desktop }) {
  const filmImgPath = `Images/description/${filmItem['link']}_D.jpg`
  const { siteMode, themeCl, fontSize } = useSpecialContext()

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

        {desktop && (
          <DescriptionTrailer
            description={filmItem['description']}
            trailer_src={filmItem['playerCode']}
            siteMode={siteMode}
          />
        )}
      </div>
    </div>
  )
}

export default SelectedFilm
