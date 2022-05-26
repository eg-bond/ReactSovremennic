import React from 'react'
import { Link } from 'react-router-dom'

function IndexAdvXS() {
  return (
    <div className='container'>
      <div className='indexAdvXS'>
        <div className='indexAdvXS__item1'>
          <Link to='/sushi'>
            <img src='./Images/72.gif' alt='sushi' />
          </Link>
        </div>
        <div className='indexAdvXS__item2'>
          <div>
            <img src='./Images/vr_image.webp' alt='vr' />
          </div>
          <Link to='/sushi'>
            <img src='./Images/sushiNew.webp' alt='новинки суши' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndexAdvXS
