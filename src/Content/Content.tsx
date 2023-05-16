import { Suspense, lazy, memo, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import SelectedMovie from './Cinema/SelectedMovie'
import IndexContent from './IndexContent/IndexContent'
import Seance from './Seance/Seance'
import SushiContainer from './Sushi/SushiContainer'
// import FilmsSpecialPage from './FilmsSpecial/FilmsSpecialPage'

const Rules = lazy(() => import('./Rules/Rules'))
const About = lazy(() => import('./About/About'))

const Content = memo<{ isMobile: boolean }>(function Content({ isMobile }) {
  const aboutLoaded = useRef(false)
  const rulesLoaded = useRef(false)

  return (
    <Suspense fallback={<div className='content__gridLeftItem--3fr'></div>}>
      <Routes>
        <Route path='/' element={<IndexContent isMobile={isMobile} />} />
        <Route path='seance' element={<Seance isMobile={isMobile} />} />
        <Route path='sushi' element={<SushiContainer isMobile={isMobile} />} />
        <Route path='movies/:film_id' element={<SelectedMovie />} />
        {/* <Route path='films' element={<FilmsSpecialPage />} /> */}
        {/* lazy routes */}
        <Route path='about' element={<About loaded={aboutLoaded} />} />
        <Route path='rules' element={<Rules loaded={rulesLoaded} />} />
      </Routes>
    </Suspense>
  )
})

export default Content
