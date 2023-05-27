import { Suspense, lazy, memo, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import IndexContent from './IndexContent/IndexContent'
import Seance from './Seance/Seance'
import SushiContainer from './Sushi/SushiContainer'
import { SushiLinearProgress } from './Sushi/SushiLinearProgress'
import SelectedMovieContainer from './Cinema/SelectedMovieContainer'

const Rules = lazy(() => import('./Rules/Rules'))
const About = lazy(() => import('./About/About'))

const Content = memo<{ isMobile: boolean }>(function Content({ isMobile }) {
  return (
    <Suspense
      fallback={
        <div className='content__gridLeftItem--3fr'>
          <SushiLinearProgress />
        </div>
      }>
      <Routes>
        <Route path='/' element={<IndexContent isMobile={isMobile} />} />
        <Route path='seance' element={<Seance isMobile={isMobile} />} />
        <Route path='sushi' element={<SushiContainer isMobile={isMobile} />} />
        <Route path='movies/:film_id' element={<SelectedMovieContainer />} />
        {/* lazy routes */}
        <Route path='about' element={<About />} />
        <Route path='rules' element={<Rules />} />
      </Routes>
    </Suspense>
  )
})

export default Content
