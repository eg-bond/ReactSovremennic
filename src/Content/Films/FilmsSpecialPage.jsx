import React from 'react'
import Films from './Films'

function FilmsSpecialPage({ pathname }) {
  return (
    <div className='content__gridLeftItem--3fr'>
      <Films pathname={pathname} />
    </div>
  )
}

export default FilmsSpecialPage
