import { memo } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../helpers'

const Footer = memo(function Footer() {
  return (
    <div className={`footer container`}>
      <Link onClick={scrollToTop} to='/'>
        Кинотеатр «Современник» © 2005 - 2023
      </Link>
    </div>
  )
})

export default Footer
