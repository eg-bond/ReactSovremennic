import { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Seance from './Seance/Seance';
import * as s from './Content.css.ts';
import About from './InfoPages/About';
import Rules from './InfoPages/Rules';
import Redirect from '@/components/Redirect';
import { SelectedMovie } from './SelectedMovie';
import IndexContent from './IndexContent/IndexContent';
import type { SpecialStateT } from '@/types/special';
const Karaoke = lazy(() => import('./Karaoke'));
const Videos = lazy(() => import('./Videos'));

const Content = memo<{
  fontSize: SpecialStateT['fontSize'];
  isMobile: boolean;
  siteMode: SpecialStateT['siteMode'];
}>(function Content({
  fontSize,
isMobile,
siteMode,
}) {
  return (
    <Suspense
      fallback={
        <div className={s.suspenseFallback}>{/* preloader?? */}</div>
      }
    >
      <Routes>
        <Route element={<IndexContent isMobile={isMobile} siteMode={siteMode} />} path="/" />
        <Route element={<Seance isMobile={isMobile} siteMode={siteMode} />} path="seance" />
        <Route
          element={<SelectedMovie fontSize={fontSize} isMobile={isMobile} />}
          path="movies/:film_id"
        />
        <Route element={<About siteMode={siteMode} />} path="about" />
        <Route element={<Rules />} path="rules" />

        {/* lazy routes */}
        <Route element={<Karaoke />} path="karaoke" />
        <Route element={<Videos />} path="videos" />

        {/* catch all - redirect to home */}
        <Route element={<Redirect to="/" />} path="*" />
      </Routes>
    </Suspense>
  );
});

export default Content;
