import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { themeLogoFile, modifiedClass } from '../helpers'
import SpecialSettings from './SpecialSettings'

const NavItem = ({ url, title }) => (
  <li>
    <NavLink
      to={url}
      className={({ isActive }) => 'fill_button' + (isActive ? ' active' : '')}>
      {title}
    </NavLink>
  </li>
)

function Navigation({ siteMode, fontSize, theme }) {
  const modifyCl = cl => modifiedClass(cl, siteMode)
  let fsNavCl =
    fontSize === '21px'
      ? 'navigation--fs150'
      : fontSize === '26px'
      ? 'navigation--fs200'
      : ''

  let navClasses = [modifyCl('navigation'), fsNavCl].join(' ')

  return (
    <div className='container'>
      <SpecialSettings />
      <nav role='navigation' className={navClasses}>
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
            <NavItem url='seans' title='РАСПИСАНИЕ' />
            {siteMode === 'special' && <NavItem url='films' title='ФИЛЬМЫ' />}
            <NavItem url='about' title='О КИНОТЕАТРЕ' />
            <NavItem url='rules' title='ПРАВИЛА РАБОТЫ' />
            <NavItem url='sushi' title='СУШИ-БАР "КИН-НО"' />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default React.memo(Navigation)
