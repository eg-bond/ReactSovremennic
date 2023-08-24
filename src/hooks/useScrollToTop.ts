import { useLocation } from 'react-router-dom'
import { scrollToTop } from '../helpers'
import { useEffect } from 'react'

// scrolls to top if content starts higher than anchor
export const useScrollToTop = (
  contentRef: React.RefObject<HTMLDivElement>,
  anchorRef: React.RefObject<HTMLDivElement>
) => {
  const location = useLocation()

  useEffect(() => {
    if (!contentRef.current || !anchorRef.current) return

    const contentY = contentRef.current.getClientRects()[0].y
    const hrY = anchorRef.current.getClientRects()[0].y

    // for desktop
    if (contentY === hrY) return

    // for mobile
    if (contentY !== undefined && hrY !== undefined) {
      if (contentY >= hrY) return
      scrollToTop()
    }
  }, [location, contentRef, anchorRef])
}
