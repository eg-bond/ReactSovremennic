import React from 'react'

function AdvXS() {
  return (
    <>
      <div className='container advXS'>
        <div className='advXS__img'>
          <a href='http://www.region47.sbor.net/'>
            <img src={require(`../images/region47_wide.gif`)} alt='region47' />
            {/* <img src='./Images/region47_wide.gif' alt='region47' /> */}
          </a>
        </div>
      </div>
      <div className='separatorMobile' />
    </>
  )
}

export default AdvXS
