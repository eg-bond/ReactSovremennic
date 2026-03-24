import { memo } from 'react';
import { FilmImg } from '@/components/FilmImg';
import { SushiWork } from '@/components/SushiWork';
import { formatTextWithLineBreaks } from '@/utils/formatTextWithLineBreaks';
import { DescriptionTrailer } from './DescriptionTrailer';
import type { FilmItemT } from '@/REDUX/cinema/cinemaReducerT';
import type { SpecialStateT } from '@/REDUX/special/specialReducerT';

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
        <div className="selectedMovie--leftFr">
          <FilmImg
            age={filmItem.age}
            link={filmItem.link}
            pirate={filmItem.pirate}
            title={filmItem.title}
          />
        </div>
        <div className={gridClass}>
          <div className="selectedMovie__title">
            <h2>{formatTextWithLineBreaks(filmItem['title'])}</h2>
            {/* {filmItem['pirate'] && <h2>(предсеансовое обслуживание)</h2>} */}
            <p>
              Смотрите
              {' '}
              {`${filmItem['beginDate']} ${filmItem['endDate']}`}
            </p>
          </div>

          <table className="selectedMovie__table">
            <tbody>
              {!isMobile && (
                <tr>
                  <td style={{ fontWeight: 'bold' }}>Год производства:</td>
                  <td>{filmItem['year']}</td>
                </tr>
              )}
              <tr>
                <td style={{ fontWeight: 'bold' }}>Страна:</td>
                <td>{filmItem['countries']}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Режиссер:</td>
                <td>{filmItem['director']}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Длительность:</td>
                <td>{filmItem['duration']}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Возраст:</td>
                <td>{filmItem['age']}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>Жанр:</td>
                <td>{filmItem['kind']}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="selectedMovie__description" style={{ fontWeight: 'bold' }}>В главных ролях:</p>
        <p className="selectedMovie__description">{filmItem['actors']}</p>
      </div>

      <DescriptionTrailer
        description={filmItem['description']}
        fontSize={fontSize}
        trailer_src={filmItem['playerCode']}
      />

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <SushiWork />}
    </div>
  );
});

export default SelectedMovie;
