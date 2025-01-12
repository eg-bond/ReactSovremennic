import { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { modifiedClass } from '../helpers';
import SpecialSettings from './SpecialSettings';
import type { SpecialStateT } from '../REDUX/special/specialReducerT';

const Navigation = memo<NavigationT>(function Navigation({
  siteMode,
  fontSize,
  theme,
}) {
  const modifyCl = (cl: string) => modifiedClass(cl, siteMode);

  const fsNavCl =
   fontSize === '21px'
     ? 'navigation--fs150'
     : fontSize === '26px'
       ? 'navigation--fs200'
       : '';

  return (
    <div className="container navigation__container">
      <SpecialSettings />
      <nav className={`navigation ${fsNavCl}`} role="navigation">
        <div className={`${modifyCl('navigation__logo')}`}>
          <Link to="/">
            <img
              alt="logoImg"
              className="navigation__logo__img"
              src={`Images/${themeLogoFile[theme]}`}
            />
          </Link>
        </div>
        <div className={`${modifyCl('navigation__menu')}`}>
          <ul>
            <NavItem title="РАСПИСАНИЕ" url="seance" />
            <NavItem title="О КИНОТЕАТРЕ" url="about" />
            <NavItem title="ПРАВИЛА РАБОТЫ" url="rules" />
            <NavItem title='БАР "КИН-НО"' url="sushi" />
          </ul>
        </div>
      </nav>
    </div>
  );
});

export default Navigation;

const NavItem = ({ url, title }: {
  title: string; url: string;
}) => (
  <li>
    <NavLink
      className={({ isActive }) => 'fill_button' + (isActive ? ' active' : '')}
      to={url}
    >
      {title}
    </NavLink>
  </li>
);

const themeLogoFile = {
  blackWhite: 'logo.png',
  whiteBlack: 'logoWB.png',
  blackBlue: 'logoBB.png',
  yellowBrown: 'logoYB.png',
  blueGreen: 'logoBG.png',
} as const;

type NavigationT = {
  fontSize: SpecialStateT['fontSize'];
  siteMode: SpecialStateT['siteMode'];
  theme: SpecialStateT['theme'];
};
