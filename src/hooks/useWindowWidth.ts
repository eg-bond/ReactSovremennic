import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth || 768)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return () => {
      removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])

  return { width }
}
