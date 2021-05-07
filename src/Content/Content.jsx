import React, { Suspense, lazy } from 'react'
import { Redirect, Route } from 'react-router-dom'
// import About from './About/About'
// import SelectedMovie from './Cinema/SelectedMovie'
// import FilmsSpecialPage from './Films/FilmsSpecialPage'
// import IndexContent from './IndexContent/IndexContent'
// import Rules from './Rules/Rules'
import Seans from './Seans/Seans'
// import SushiContainer from './Sushi/SushiContainer'

const Rules = lazy(() => import('./Rules/Rules'))
const FilmsSpecialPage = lazy(() => import('./Films/FilmsSpecialPage'))
const About = lazy(() => import('./About/About'))
const SelectedMovie = lazy(() => import('./Cinema/SelectedMovie'))
const IndexContent = lazy(() => import('./IndexContent/IndexContent'))
const SushiContainer = lazy(() => import('./Sushi/SushiContainer'))

const Content = ({
  Q,
  films,
  filmsObject,
  createFilmsObject,
  siteMode,
  themeCl,
  fontSize,
}) => {
  return (
    <>
      <Suspense fallback={<div className='col-lg-9 col-md-9 col-sm-9'></div>}>
        <Route exact path='/'>
          <IndexContent siteMode={siteMode} films={films} Q={Q} />
        </Route>
        <Route exact path='/about'>
          <About siteMode={siteMode} />
        </Route>
        <Route exact path='/rules'>
          <Rules />
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
        {/* prettier-ignore */}
        <Route exact path='/films'> 
        {siteMode === 'special' 
          ? <FilmsSpecialPage />
          : <Redirect to='/' />}
        </Route>
      </Suspense>
    </>
  )
}

export default Content
