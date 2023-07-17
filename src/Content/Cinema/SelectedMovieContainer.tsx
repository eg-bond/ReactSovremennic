import { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../REDUX/store'
import { createFilmsObject_AC } from '../../REDUX/cinema/cinemaReducer'
import type { FilmItemT } from '../../REDUX/cinema/cinemaReducerT'
import SelectedMovie from './SelectedMovie'
import Redirect from '../../Template/Redirect'

const SelectedMovieContainer = memo<{ isMobile: boolean }>(
  function SelectedMovieContainer({ isMobile }) {
    const { fontSize } = useAppSelector(state => state.special)
    const { filmsObject } = useAppSelector(state => state.cinema)
    const dispatch = useAppDispatch()
    //--------------------------------------------

    const { film_id } = useParams()

    const filmsObjCreated = useCallback(
      () => Object.keys(filmsObject).length,
      [filmsObject]
    )

    // Creates filmsObject if it doesn't exist
    useEffect(() => {
      !filmsObjCreated() && dispatch(createFilmsObject_AC())
    }, [dispatch, filmsObjCreated])

    if (!filmsObjCreated()) {
      return <div className='selectedMovie'></div>
    }

    const filmItem: FilmItemT | undefined = filmsObject[film_id as string]

    if (!filmItem) {
      return <Redirect to={'/'} />
    }

    return (
      <SelectedMovie
        fontSize={fontSize}
        filmItem={filmItem}
        isMobile={isMobile}
      />
    )
  }
)

export default SelectedMovieContainer
