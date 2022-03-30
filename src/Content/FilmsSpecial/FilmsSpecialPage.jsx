import React from 'react'
import FilmsSpecial from './FilmsSpecial'

function FilmsSpecialPage({ siteMode }) {
  return (
    <div className='content__gridLeftItem--3fr'>
      <FilmsSpecial siteMode={siteMode} />
    </div>
  )
}

export default FilmsSpecialPage
