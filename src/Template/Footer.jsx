import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scrollToTop } from '../helpers'
import { ScrollToTop } from './ScrollToTop'

function Footer({ mobileQ, siteMode }) {
  // Автоматический скролл наверх для мобильной версии
  const { pathname } = useLocation()
  useEffect(() => {
    if (mobileQ || siteMode === 'special') {
      scrollToTop()
    }
  }, [pathname])

  return (
    <div className={`footer container`}>
      <Link onClick={scrollToTop} to='/'>
        Кинотеатр «Современник» © 2005
      </Link>
    </div>
  )
}

export default React.memo(Footer)
