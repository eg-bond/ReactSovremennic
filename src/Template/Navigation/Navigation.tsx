import { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SUSHI_BAR_URL } from '@/utils/constants';
import * as s from './Navigation.css.ts';
import SpecialSettings from '../SpecialSettings';
import type { SpecialStateT } from '../../REDUX/special/specialReducerT';

const Navigation = memo<NavigationT>(function Navigation({
  siteMode,
  fontSize,
  theme,
}) {
  const isSpecial = siteMode === 'special';

  const fsNavCl =
    fontSize === '21px'
      ? s.navigationFs150
      : fontSize === '26px'
        ? s.navigationFs200
        : '';

  return (
    <div className={`container ${s.container}`}>
      <SpecialSettings />
      <nav className={`${s.navigation} ${fsNavCl}`} role="navigation">
        <div className={`${s.logo} ${isSpecial ? s.logoSpecial : ''}`}>
          <Link to="/">
            <img
              alt="logoImg"
              className={s.logoImg}
              src={`Images/${themeLogoFile[theme]}`}
            />
          </Link>
        </div>
        <div className={s.menu}>
          <ul className={s.menuUl}>
            <NavItem title="РАСПИСАНИЕ" url="seance" />
            <NavItem title="О КИНОТЕАТРЕ" url="about" />
            <NavItem title="ПРАВИЛА" url="rules" />
            <li className={s.menuLi}>
              <a
                className={`fill_button ${s.menuLink}`}
                href={SUSHI_BAR_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                БАР "КИН-НО"
              </a>
            </li>
            <NavItem title="КАРАОКЕ" url="karaoke" />
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
  <li className={s.menuLi}>
    <NavLink
      className={({ isActive }) =>
        `fill_button ${s.menuLink}` + (isActive ? ` active ${s.menuLinkActive}` : '')}
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
