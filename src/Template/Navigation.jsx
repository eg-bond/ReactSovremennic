import React, { Suspense, lazy } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import SpecialSettings from './SpecialSettings'
import { modifiedClass, themeClasses, themeLogo } from '../helpers'
const SpecialSettings = lazy(() => import('./SpecialSettings'))

const NavItem = ({ url, title }) => (
  <li>
    <NavLink to={url} activeClassName='active'>
      {title}
    </NavLink>
  </li>
)

function Navigation({ siteMode, fontSize, theme }) {
  const modifyCl = cl => modifiedClass(cl, siteMode)
  let fsAddCl =
    fontSize === '150'
      ? 'navigation__menu__special__fsAdd-150'
      : fontSize === '200'
      ? 'navigation__menu__special__fsAdd-200'
      : ''
  let fsAddLogo =
    fontSize === '150'
      ? 'navigation__logo__special__fsAdd-150'
      : fontSize === '200'
      ? 'navigation__logo__special__fsAdd-200'
      : ''
  const logo = themeLogo(theme)
  const themeCl = themeClasses(theme)

  let navClasses = [
    'navbar',
    'navbar-inverse',
    modifyCl('navigation'),
    themeCl.back,
    siteMode === 'special' ? `${themeCl.pills} ${themeCl.borders}` : '',
  ].join(' ')

  return (
    <div className='container'>
      <div className='row'>
        <Suspense fallback={<div>Загрузка</div>}>
          <SpecialSettings />
        </Suspense>
        <nav role='navigation' className={navClasses}>
          <div className={`${modifyCl('navigation__logo')} ${fsAddLogo}`}>
            <Link to='/'>
              <img src={`./Images/${logo}.png`} alt='logoImg' />
            </Link>
          </div>
          <div className={`${modifyCl('navigation__menu')} ${fsAddCl} focus`}>
            <ul>
              <NavItem url='/seans' title='Расписание' />
              {siteMode == 'special' && <NavItem url='/films' title='Фильмы' />}
              <NavItem url='/about' title='О кинотеатре' />
              <NavItem url='/rules' title='Правила работы' />
              <NavItem url='/sushi' title='Суши-бар "КИН-НО"' />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
