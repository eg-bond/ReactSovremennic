import { Suspense, lazy, memo, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import SelectedMovie from './Cinema/SelectedMovie'
import IndexContent from './IndexContent/IndexContent'
import Seans from './Seans/Seans'
import SushiContainer from './Sushi/SushiContainer'
import FilmsSpecialPage from './FilmsSpecial/FilmsSpecialPage'

const Rules = lazy(() => import('./Rules/Rules'))
const About = lazy(() => import('./About/About'))

const Content = memo(function Content({
  desktopQ,
  mobileQ,
  films,
  filmsObject,
  createFilmsObject,
  siteMode,
  fontSize,
}) {
  const aboutLoaded = useRef(false)
  const rulesLoaded = useRef(false)

  return (
    <Suspense fallback={<div className='content__gridLeftItem--3fr'></div>}>
      <Routes>
        <Route
          path='/'
          element={
            <IndexContent
              siteMode={siteMode}
              films={films}
              mobileQ={mobileQ}
              desktopQ={desktopQ}
            />
          }
        />
        <Route
          path='seans'
          element={
            <Seans mobileQ={mobileQ} desktopQ={desktopQ} siteMode={siteMode} />
          }
        />
        <Route
          path='sushi'
          element={
            <SushiContainer
              siteMode={siteMode}
              mobileQ={mobileQ}
              desktopQ={desktopQ}
            />
          }
        />
        <Route
          path='movies/:film_id'
          element={
            <SelectedMovie
              filmsObject={filmsObject}
              createFilmsObject={createFilmsObject}
              siteMode={siteMode}
              fontSize={fontSize}
            />
          }
        />
        <Route
          path='films'
          element={<FilmsSpecialPage siteMode={siteMode} />}
        />
        {/* lazy routes */}
        <Route
          path='about'
          element={<About siteMode={siteMode} loaded={aboutLoaded} />}
        />
        <Route path='rules' element={<Rules loaded={rulesLoaded} />} />
      </Routes>
    </Suspense>
  )
})

export default Content
