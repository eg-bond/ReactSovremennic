import { memo, useMemo } from 'react';
import { useParams } from 'react-router';
import { filmsArray } from '@/data/films';
import Redirect from '@/components/Redirect';
import SelectedMovie from './SelectedMovie';
import type { FilmItemT } from '@/types/cinema';
import type { SpecialStateT } from '@/types/special';

const SelectedMovieContainer = memo<{
  fontSize: SpecialStateT['fontSize'];
  isMobile: boolean;
}>(
  function SelectedMovieContainer({ fontSize, isMobile }) {
    const { film_id } = useParams();

    const filmsObject = useMemo(
      () => Object.fromEntries(filmsArray.map(f => [f.link, f])),
      [],
    );

    const filmItem: FilmItemT | undefined = filmsObject[film_id as string];

    if (!filmItem) {
      return <Redirect to="/" />;
    }

    return (
      <SelectedMovie
        filmItem={filmItem}
        fontSize={fontSize}
        isMobile={isMobile}
      />
    );
  },
);

export default SelectedMovieContainer;
