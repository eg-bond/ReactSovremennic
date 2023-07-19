import { useState, useCallback, useEffect } from 'react'

export const useImgLoaded = (imgName: string) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    return () => {
      setImgLoaded(false)
    }
  }, [imgName])

  const onLoad = useCallback(() => setImgLoaded(true), [])

  return { imgLoaded, onLoad }
}
