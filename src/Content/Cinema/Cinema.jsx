import React from 'react'
import { Route } from 'react-router-dom'
import SelectedFilm from './SelectedFilm'
import Films from '../Films/Films'
import { DescriptionTrailer } from './DescriptionTrailer'
import { useSpecialContext } from '../../SpecialContext'

function CinemaRoutes({ films, Q }) {
  const { siteMode } = useSpecialContext()
  const mobile = Q.mobile

  return (
    <>
      {films.map(filmItem => (
        <Route key={filmItem.link} path={`/${filmItem.link}`}>
          <div className={`padding_15xs `}>
            <div className='col-lg-9 col-md-9 col-sm-9 margin-top-2'>
              <SelectedFilm filmItem={filmItem} desktop={Q.desktop} />
              {siteMode === 'special' && (
                <Films films={films} page={'cinema'} />
              )}
            </div>
          </div>
          {mobile && (
            <DescriptionTrailer
              description={filmItem['description']}
              trailer_src={filmItem['playerCode']}
              siteMode={siteMode}
            />
          )}
        </Route>
      ))}
    </>
  )
}

export default CinemaRoutes
