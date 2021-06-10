import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={`footer container`}>
      <Link to='/'>Кинотеатр «Современник» © 2005</Link>
    </div>
  )
}

export default Footer
