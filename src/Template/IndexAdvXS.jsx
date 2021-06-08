import React from 'react'
import { Link } from 'react-router-dom'

function IndexAdvXS() {
  return (
    <div className='container'>
      <div className='indexAdvXS'>
        <div className='indexAdvXS__item1'>
          <Link to='/sushi'>
            {/* <img src='./Images/72.gif' alt='sushi' /> */}
            <img src={require(`../images/72.gif`)} alt='Суши-бар' />
          </Link>
        </div>
        <div className='indexAdvXS__item2'>
          <div>
            <a href='http://www.region47.sbor.net/'>
              {/* <img src='./Images/region47.gif' alt='region47' /> */}
              <img src={require(`../images/region47.gif`)} alt='Регион47' />
            </a>
          </div>
          <div>
            {/* <img src='./Images/jsb1.gif' alt='gift' /> */}
            <img
              src={require(`../images/jsb1.gif`)}
              alt='Подарочный сертификат'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexAdvXS
