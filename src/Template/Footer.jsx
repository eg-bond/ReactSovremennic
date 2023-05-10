import { memo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { scrollToTop } from '../helpers'

const Footer = memo(function Footer({ isMobile, siteMode }) {
  // Автоматический скролл наверх для мобильной версии
  const { pathname } = useLocation()
  useEffect(() => {
    if (isMobile || siteMode === 'special') {
      scrollToTop()
    }
  }, [pathname, isMobile, siteMode])

  return (
    <div className={`footer container`}>
      <Link onClick={scrollToTop} to='/'>
        Кинотеатр «Современник» © 2005 - 2023
      </Link>
    </div>
  )
})

export default Footer
