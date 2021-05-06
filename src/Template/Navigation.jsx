import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import SpecialSettings from './SpecialSettings'
import { modifiedClass, themeClasses, themeLogo } from '../helpers'
import { compose } from 'redux'
import { connect } from 'react-redux'

function Navigation({ siteMode, fontSize, theme }) {
  const classHandler = cl => modifiedClass(cl, siteMode)
  let fsAdditionClass =
    fontSize === '150'
      ? 'navigation__menu__special__fsAdd-150'
      : fontSize === '200'
      ? 'navigation__menu__special__fsAdd-200'
      : ''
  let fsAdditionClassLogo =
    fontSize === '150'
      ? 'navigation__logo__special__fsAdd-150'
      : fontSize === '200'
      ? 'navigation__logo__special__fsAdd-200'
      : ''
  const logo = themeLogo(theme)
  const themeCl = themeClasses(theme)

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <SpecialSettings />
          <nav
            role='navigation'
            className={`navbar navbar-inverse ${classHandler('navigation')} ${
              themeCl.back
            } ${
              siteMode === 'special'
                ? themeCl.pills + ' ' + themeCl.borders
                : ''
            }`}>
            <div
              className={`navigation__logo ${
                siteMode === 'default'
                  ? 'navigation__logo__default'
                  : 'navigation__logo__special'
              } ${fsAdditionClassLogo}`}>
              <Link to='/'>
                <img src={`./Images/${logo}.png`} alt='logoImage' />
              </Link>
            </div>
            <div
              className={`${classHandler(
                'navigation__menu'
              )} ${fsAdditionClass} focus`}>
              <ul>
                <li>
                  <NavLink to='/seans' activeClassName='active'>
                    Расписание
                  </NavLink>
                </li>
                {siteMode === 'special' && (
                  <li>
                    <NavLink to='/films' activeClassName='active'>
                      Фильмы
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to='/about' activeClassName='active'>
                    О кинотеатре
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/rules' activeClassName='active'>
                    Правила работы
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/sushi' activeClassName='active'>
                    Суши-бар "КИН-НО"
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = state => ({
  siteMode: state.special.siteMode,
  theme: state.special.theme,
  fontSize: state.special.fontSize,
})

export default compose(connect(mapStateToProps, {}))(Navigation)
