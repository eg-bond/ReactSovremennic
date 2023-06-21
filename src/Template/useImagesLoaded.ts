import { useState, useMemo } from 'react'
import { after } from '../helpers'

export const useImagesLoaded = (items: Array<any>) => {
  const [allImgLoaded, setImgLoaded] = useState(false)

  const onLoad = useMemo(
    () =>
      after(items.length, () => {
        setImgLoaded(true)
      }),
    [items.length]
  )

  return { allImgLoaded, onLoad }
}
