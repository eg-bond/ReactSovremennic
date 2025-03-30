import { About } from '@/Pages/About';
import { Rules } from '@/Pages/Rules';
import Seance from '@/Content/Seance/Seance';
import { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexContent from '@/Content/IndexContent/IndexContent';
import SelectedMovieContainer from '@/Content/Cinema/SelectedMovieContainer';

const SushiContainer = lazy(() => import('@/Content/Sushi/SushiContainer'));

export const Routing = memo<{
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
      </Routes>
    </Suspense>
  );
});
