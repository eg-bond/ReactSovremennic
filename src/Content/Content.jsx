import React, { Suspense, lazy, useRef } from 'react'
import { Redirect, Route } from 'react-router-dom'
import SelectedMovie from './Cinema/SelectedMovie'
import IndexContent from './IndexContent/IndexContent'
import Seans from './Seans/Seans'
import SushiContainer from './Sushi/SushiContainer'
import FilmsSpecialPage from './Films/FilmsSpecialPage'

const Rules = lazy(() => import('./Rules/Rules'))
const About = lazy(() => import('./About/About'))

const Content = ({
  Q,
  films,
  filmsObject,
  createFilmsObject,
  siteMode,
  themeCl,
  fontSize,
}) => {
  const aboutLoaded = useRef(false)
  const rulesLoaded = useRef(false)

  return (
    <>
      <Route exact path='/'>
        <IndexContent siteMode={siteMode} films={films} Q={Q} />
      </Route>
      <Route exact path='/seans'>
        <Seans Q={Q} />
      </Route>
      <Route exact path='/sushi'>
        <SushiContainer Q={Q} siteMode={siteMode} themeCl={themeCl} />
      </Route>
      <Route exact path='/movies/:film_id'>
        <SelectedMovie
          filmsObject={filmsObject}
          createFilmsObject={createFilmsObject}
          Q={Q}
          siteMode={siteMode}
          themeCl={themeCl}
          fontSize={fontSize}
        />
      </Route>
      <Route exact path='/films'>
        {siteMode === 'special' ? <FilmsSpecialPage /> : <Redirect to='/' />}
      </Route>
      <Suspense fallback={<div className='col-lg-9 col-md-9 col-sm-9'></div>}>
        <Route exact path='/about'>
          <About siteMode={siteMode} loaded={aboutLoaded} />
        </Route>
        <Route exact path='/rules'>
          <Rules loaded={rulesLoaded} />
        </Route>
      </Suspense>
    </>
  )
}

export default Content
