import { memo } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { modifiedClass } from '../helpers'
import SpecialSettings from './SpecialSettings'
import type { SpecialStateT } from '../REDUX/special/specialReducerT'

const Navigation = memo<NavigationT>(function Navigation({
  siteMode,
  fontSize,
  theme,
}) {
  const modifyCl = (cl: string) => modifiedClass(cl, siteMode)

  const fsNavCl =
    fontSize === '21px'
      ? 'navigation--fs150'
      : fontSize === '26px'
      ? 'navigation--fs200'
      : ''

  return (
    <div className='container'>
      <SpecialSettings />
      <nav role='navigation' className={`navigation ${fsNavCl}`}>
        <div className={`${modifyCl('navigation__logo')}`}>
          <Link to='/'>
            <img
              className='navigation__logo__img'
              src={`./Images/${themeLogoFile[theme]}`}
              alt='logoImg'
            />
          </Link>
        </div>
        <div className={`${modifyCl('navigation__menu')}`}>
          <ul>
            <NavItem url='seance' title='РАСПИСАНИЕ' />
            <NavItem url='about' title='О КИНОТЕАТРЕ' />
            <NavItem url='rules' title='ПРАВИЛА РАБОТЫ' />
            <NavItem url='sushi' title='СУШИ-БАР "КИН-НО"' />
          </ul>
        </div>
      </nav>
    </div>
  )
})

export default Navigation

const NavItem = ({ url, title }: { url: string; title: string }) => (
  <li>
    <NavLink
      to={url}
      className={({ isActive }) => 'fill_button' + (isActive ? ' active' : '')}>
      {title}
    </NavLink>
  </li>
)

const themeLogoFile = {
  blackWhite: 'logo.png',
  whiteBlack: 'logoWB.png',
  blackBlue: 'logoBB.png',
  yellowBrown: 'logoYB.png',
  blueGreen: 'logoBG.png',
} as const

type NavigationT = {
  siteMode: SpecialStateT['siteMode']
  fontSize: SpecialStateT['fontSize']
  theme: SpecialStateT['theme']
}
