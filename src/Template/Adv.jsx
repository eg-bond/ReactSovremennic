import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const AdvContent = React.memo(() => {
  return (
    <div className='content__gridRightItem--1fr'>
      <div className={'desktopAdv desktopAdv--5'}>
        <img src='./Images/vr_image.webp' alt='vr' />
      </div>

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
  let matchSushi = useMatch({ path: 'sushi' })
  if (!matchSushi) {
    return <AdvContent />
  }
  return null
}

export default Adv
