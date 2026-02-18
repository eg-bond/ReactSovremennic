import { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import Rules from './Rules/Rules';
import Seance from './Seance/Seance';
import IndexContent from './IndexContent/IndexContent';
import SelectedMovieContainer from './Cinema/SelectedMovieContainer';

const SushiContainer = lazy(() => import('./Sushi/SushiContainer'));
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
        <Route element={<SushiContainer isMobile={isMobile} />} path="sushi" />
        <Route element={<Karaoke />} path="karaoke" />
      </Routes>
    </Suspense>
  );
});

export default Content;
