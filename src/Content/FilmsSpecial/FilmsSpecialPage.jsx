import React from 'react'
import FilmsSpecial from './FilmsSpecial'

function FilmsSpecialPage({ pathname }) {
  return (
    <div className='content__gridLeftItem--3fr'>
      <FilmsSpecial pathname={pathname} />
    </div>
  )
}

export default FilmsSpecialPage
