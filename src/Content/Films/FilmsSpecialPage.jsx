import React from 'react'
import Films from './Films'

function FilmsSpecialPage({ films }) {
  return (
    <div className='col-lg-9 col-md-9 col-sm-9 padding_15xs'>
      <Films films={films} />
    </div>
  )
}

export default FilmsSpecialPage
