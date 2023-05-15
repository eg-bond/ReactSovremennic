import { Suspense, lazy, memo, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import SelectedMovie from './Cinema/SelectedMovie'
import IndexContent from './IndexContent/IndexContent'
import Seance from './Seance/Seance'
import SushiContainer from './Sushi/SushiContainer'
import FilmsSpecialPage from './FilmsSpecial/FilmsSpecialPage'

const Rules = lazy(() => import('./Rules/Rules'))
const About = lazy(() => import('./About/About'))

const Content = memo(function Content({ isMobile, films, siteMode, fontSize }) {
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
              isMobile={isMobile}
            />
          }
        />
        <Route
          path='seance'
          element={<Seance isMobile={isMobile} siteMode={siteMode} />}
        />
        <Route
          path='sushi'
          element={<SushiContainer siteMode={siteMode} isMobile={isMobile} />}
        />
        <Route
          path='movies/:film_id'
          element={<SelectedMovie siteMode={siteMode} fontSize={fontSize} />}
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
