import React from 'react'
import { Link } from 'react-router-dom'

function IndexAdvXS() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='indexAdvXS'>
          <div className='indexAdvXS__item1'>
            <Link to='/sushi'>
              <img src='./Images/72.gif' alt='sushi' />
            </Link>
          </div>
          <div className='indexAdvXS__item2'>
            <div>
              <a href='http://www.region47.sbor.net/'>
                <img src='./Images/region47.gif' alt='region47' />
              </a>
            </div>
            <div>
              <img src='./Images/jsb1.gif' alt='gift' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexAdvXS
