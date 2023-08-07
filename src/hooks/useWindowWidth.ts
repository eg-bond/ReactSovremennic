import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth || 1920)

  const handleWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    addEventListener('resize', handleWidth)

    return () => {
      removeEventListener('resize', handleWidth)
    }
  }, [])

  return { width }
}
