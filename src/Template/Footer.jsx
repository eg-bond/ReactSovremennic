import React from 'react'
import { Link } from 'react-router-dom'

function Footer({ themeCl }) {
  return (
    <div className={`footer container ${themeCl.footer}`}>
      <Link to='/'>Кинотеатр «Современник» © 2005</Link>
    </div>
  )
}

export default Footer
