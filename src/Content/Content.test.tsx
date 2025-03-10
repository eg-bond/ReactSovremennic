import { Link } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import Content from './Content';
import Navigation from '../Template/Navigation';
import { filmsArray } from '../REDUX/filmsArray';
import { renderWithRouterAndRedux } from '../App.test';
import { matchMediaMock } from '../test/matchMediaMock';
import { CinemaStateT } from '../REDUX/cinema/cinemaReducerT';
import { setTodayScheduleItem_AC } from '../REDUX/seance/seanceReducer';

describe('React Router', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  beforeEach(() => {
    matchMediaMock('desktop');

    const { store } = renderWithRouterAndRedux(
      <div>
        <Navigation fontSize="14px" siteMode="default" theme="blackWhite" />
        <Link to="movies/dont_exist">Wrong movie URL</Link>
        <FilmsSliderSimpleClone filmsArray={filmsArray} />
        <Content isMobile={false} />
      </div>,
    );
    // initialization
    store.dispatch(setTodayScheduleItem_AC());
  });

  it('should render the home page by default', () => {
    const infoTitle = screen.queryByText(/Информация/i);
    expect(infoTitle).toBeVisible();
  });

  it('should navigate correctly', async () => {
    const indexNav = screen.getByAltText(/logoImg/i);
    const seanceNav = screen.getAllByText(/расписание/i)[0];
    const aboutNav = screen.getByText(/о кинотеатре/i);
    const rulesNav = screen.getByText(/правила работы/i);
    const sushiNav = screen.getAllByText(/бар/i)[0];

    fireEvent.click(seanceNav);
    expect(await screen.findByText(/Возраст/i)).toBeVisible();

    fireEvent.click(aboutNav);
    expect(await screen.findByText(/EUROSEATING/i)).toBeVisible();

    fireEvent.click(rulesNav);
    expect(await screen.findByText(/Заключительные пол/i)).toBeVisible();

    fireEvent.click(sushiNav);
    expect(await screen.findByText(/гарниры/i)).toBeVisible();

    fireEvent.click(indexNav);
    expect(screen.getByText(/информация/i)).toBeVisible();
  });

  it('should navigate correctly through movies', async () => {
    // first movie
    fireEvent.click(screen.getByText(filmsArray[0].title));
    expect(await screen.findByText(filmsArray[0].director)).toBeVisible();
    // second movie
    fireEvent.click(screen.getByText(filmsArray[1].title));
    expect(await screen.findByText(filmsArray[1].director)).toBeVisible();
    // third movie
    fireEvent.click(screen.getByText(filmsArray[2].title));
    expect(await screen.findByText(filmsArray[2].director)).toBeVisible();
  });

  it('should redirect to index page if non-existent movie URL typed', async () => {
    // first movie
    fireEvent.click(screen.getByText(filmsArray[0].title));
    expect(await screen.findByText(filmsArray[0].director)).toBeVisible();
    // wrong movie
    fireEvent.click(screen.getByText(/Wrong movie URL/i));
    expect(screen.getByText(/информация/i)).toBeVisible();
  });
});

const FilmsSliderSimpleClone = ({
  filmsArray,
}: {
  filmsArray: CinemaStateT['films'];
}) => (
  <div className="cinemaSlider">
    <h4 className="displayMobile">Фильмы</h4>
    <div className="splide">
      {filmsArray.map((item, i) => (
        <Link
          className="swSlide__a"
          key={i + 'FSSC'}
          to={`movies/${item.link}`}
        >
          <div className="splide_slide">
            <img alt={item.title} src={`Images/top_menu/${item.link}.webp`} />
            <h1 className="swSlide__h1">{item.title}</h1>
            <p className="swSlide__p">{item.beginDate}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
