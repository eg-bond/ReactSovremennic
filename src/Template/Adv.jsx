import React from 'react'
import { Link } from 'react-router-dom'

function Adv() {
  return (
    <div className='col-lg-3 col-md-3 col-sm-3'>
      <a className={'linkWrapper'} href='http://www.region47.sbor.net'>
        <div className={'desktopAdv desktopAdv--1'}>
          <img src='./Images/region47.gif' alt='Регион47' />
        </div>
      </a>

      <div className='desktopAdv desktopAdv--2'>
        <img src='./Images/jsb1.gif' alt='Подарочный сертификат' />
      </div>
      <Link className={'linkWrapper'} to='sushi'>
        <div className={'desktopAdv desktopAdv--3'}>
          <img src='./Images/72.gif' alt='Суши-бар' />
        </div>
      </Link>
    </div>
  )
}

export default Adv
