import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const AdvContent = React.memo(() => {
  return (
    <div className='content__gridRightItem--1fr'>
      {/* <a className={'linkWrapper'} href='http://www.region47.sbor.net'>
          <div className={'desktopAdv desktopAdv--1'}>
            <img src='./Images/region47.gif' alt='Регион47' />
          </div>
        </a> */}
      <Link className={'linkWrapper'} to='/sushi'>
        <div className={'desktopAdv desktopAdv--4'}>
          <img src='./Images/sushi20.jpg' alt='суши скидки' />
        </div>
      </Link>
      <Link className={'linkWrapper'} to='/sushi'>
        <div className={'desktopAdv desktopAdv--2'}>
          <img src='./Images/sushiNew.jpg' alt='Новинки суши' />
        </div>
      </Link>
      <Link className={'linkWrapper'} to='/sushi'>
        <div className={'desktopAdv desktopAdv--3'}>
          <img src='./Images/72.gif' alt='Суши-бар' />
        </div>
      </Link>
      <div className='desktopAdv desktopAdv--2'>
        <img src='./Images/jsb1.gif' alt='Подарочный сертификат' />
      </div>
    </div>
  )
})

function Adv() {
  let match = useRouteMatch('/:firsId?')
  if (match.params.firsId !== 'sushi') {
    return <AdvContent />
  }
  return null
}

export default Adv
