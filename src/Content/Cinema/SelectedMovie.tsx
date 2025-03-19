import { memo } from 'react';
import { FilmImg } from './FilmImg';
import { SushiWork } from '../../Template/SushiWork';
import { DescriptionTrailer } from './DescriptionTrailer';
import type { FilmItemT } from '../../REDUX/cinema/cinemaReducerT';
import type { SpecialStateT } from '../../REDUX/special/specialReducerT';

const SelectedMovie = memo<{
  filmItem: FilmItemT;
  fontSize: SpecialStateT['fontSize'];
  isMobile: boolean;
}>(function SelectedMovie({
  fontSize,
  filmItem,
  isMobile,
}) {
  const gridClass =
    fontSize !== '26px' ? 'selectedMovie--rightFr' : 'selectedMovie--fullFr';

  return (
    <div className="content__gridLeftItem--3fr contentMT">
      <div className="selectedMovie">
        <FilmImg link={filmItem.link} title={filmItem.title} />
        <div className={gridClass}>
          <div className="selectedMovie__title">
            <h2>{filmItem['title']}</h2>
            {filmItem['pirate'] && <h2>(предсеансовое обслуживание)</h2>}
            <p>
              Смотрите
              {' '}
              {`${filmItem['beginDate']} ${filmItem['endDate']}`}
            </p>

          </div>
          <table className="selectedMovie__table">
            <tbody>
              <tr>
                <td>Жанр</td>
                <td>{filmItem['kind']}</td>
              </tr>
              <tr>
                <td>Режиссер</td>
                <td>{filmItem['director']}</td>
              </tr>
              <tr>
                <td>Длительность</td>
                <td>{filmItem['duration']}</td>
              </tr>
              <tr>
                <td>Возраст</td>
                <td>{filmItem['age']}</td>
              </tr>
              <tr>
                <td>В главных ролях</td>
                <td>{filmItem['actors']}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DescriptionTrailer
          description={filmItem['description']}
          fontSize={fontSize}
          trailer_src={filmItem['playerCode']}
        />
      </div>

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <SushiWork />}
    </div>
  );
});

export default SelectedMovie;
