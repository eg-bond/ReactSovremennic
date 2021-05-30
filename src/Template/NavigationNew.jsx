import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { modifiedClass, themeClasses, themeLogo } from '../helpers'
import SpecialSettings from './SpecialSettings'

const NavItem = ({ url, title }) => (
  <li>
    <NavLink to={url} activeClassName='active'>
      {title}
    </NavLink>
  </li>
)
{
  /*className={'btn btn-2'}*/
}

function Navigation({ siteMode, fontSize, theme, Q }) {
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
    modifyCl('navigation'),
    themeCl.back,
    siteMode === 'special' ? `${themeCl.pills} ${themeCl.borders}` : '',
  ].join(' ')

  return (
    <div className='container'>
      <div className='row'>
        <SpecialSettings />
        <nav role='navigation' className={navClasses}>
          <div className={`${modifyCl('navigation__logo')} ${fsAddLogo}`}>
            <Link to='/'>
              {/* <img src={`./Images/${logo}.png`} alt='logoImg' /> */}
              <img src={require(`../images/${logo}.png`)} alt='logoImg' />
            </Link>
          </div>
          <div className={`${modifyCl('navigation__menu')} ${fsAddCl} focus`}>
            <ul>
              <NavItem url='/seans' title='РАСПИСАНИЕ' />
              {siteMode == 'special' && <NavItem url='/films' title='ФИЛЬМЫ' />}
              <NavItem url='/about' title='О КИНОТЕАТРЕ' />
              <NavItem url='/rules' title='ПРАВИЛА РАБОТЫ' />
              <NavItem url='/sushi' title='СУШИ-БАР "КИН-НО"' />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
