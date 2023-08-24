import { Suspense, lazy, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import IndexContent from './IndexContent/IndexContent'
import Seance from './Seance/Seance'
import SelectedMovieContainer from './Cinema/SelectedMovieContainer'
import About from './About/About'
import Rules from './Rules/Rules'

const SushiContainer = lazy(() => import('./Sushi/SushiContainer'))

const Content = memo<{ isMobile: boolean }>(function Content({ isMobile }) {
  return (
    <Suspense
      fallback={
        <div className='content__gridRightItem--full'>{/* preloader?? */}</div>
      }>
      <Routes>
        <Route path='/' element={<IndexContent isMobile={isMobile} />} />
        <Route path='seance' element={<Seance isMobile={isMobile} />} />
        <Route
          path='movies/:film_id'
          element={<SelectedMovieContainer isMobile={isMobile} />}
        />
        <Route path='about' element={<About />} />
        <Route path='rules' element={<Rules />} />
        {/* lazy routes */}
        <Route path='sushi' element={<SushiContainer isMobile={isMobile} />} />
      </Routes>
    </Suspense>
  )
})

export default Content
