import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSpecialContext } from '../SpecialContext'
import About from './About/About'
import SelectedMovie from './Cinema/SelectedMovie'
import FilmsSpecialPage from './Films/FilmsSpecialPage'
import IndexContent from './IndexContent/IndexContent'
import Rules from './Rules/Rules'
import Seans from './Seans/Seans'
import SushiContainer from './Sushi/SushiContainer'

const Content = ({ Q, films, filmsObject, createFilmsObject }) => {
  const { siteMode } = useSpecialContext()
  console.log('content render')
  return (
    <>
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
        <SushiContainer Q={Q} siteMode={siteMode} />
      </Route>
      <Route exact path='/movies/:film_id'>
        <SelectedMovie
          filmsObject={filmsObject}
          createFilmsObject={createFilmsObject}
          Q={Q}
        />
      </Route>
      {/* prettier-ignore */}
      <Route exact path='/films'> 
      {siteMode === 'special' 
        ? <FilmsSpecialPage />
        : <Redirect to='/' />}
      </Route>
    </>
  )
}

export default Content
