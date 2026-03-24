import { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './InfoPages/About';
import Rules from './InfoPages/Rules';
import Seance from './Seance/Seance';
import Redirect from '../components/Redirect';
import IndexContent from './IndexContent/IndexContent';
import SelectedMovieContainer from './Cinema/SelectedMovieContainer';
const Karaoke = lazy(() => import('./Karaoke/Karaoke'));

const Content = memo<{
  isMobile: boolean;
}>(function Content({ isMobile }) {
  return (
    <Suspense
      fallback={
        <div className="content__gridRightItem--full">{/* preloader?? */}</div>
      }
    >
      <Routes>
        <Route element={<IndexContent isMobile={isMobile} />} path="/" />
        <Route element={<Seance isMobile={isMobile} />} path="seance" />
        <Route
          element={<SelectedMovieContainer isMobile={isMobile} />}
          path="movies/:film_id"
        />
        <Route element={<About />} path="about" />
        <Route element={<Rules />} path="rules" />

        {/* lazy routes */}
        <Route element={<Karaoke />} path="karaoke" />

        {/* catch all - redirect to home */}
        <Route element={<Redirect to="/" />} path="*" />
      </Routes>
    </Suspense>
  );
});

export default Content;
