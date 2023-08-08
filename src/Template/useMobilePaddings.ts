import { useEffect, useRef } from 'react'

// last slider element
let lastEl: Element | null
// slides container
let splideTrack: Element | null

export const useMobilePaddings = (isMobile: boolean) => {
  const observer = useRef(
    new MutationObserver(mutationRecords => {
      if (splideTrack) {
        if (mutationRecords[0].target.classList.contains('is-visible')) {
          splideTrack.classList.remove('padd_r')
          splideTrack.classList.add('padd_l')
        } else {
          splideTrack.classList.remove('padd_l')
          splideTrack.classList.add('padd_r')
        }
      }
    })
  )

  useEffect(() => {
    lastEl = document.querySelector('.splide__slide:last-child')
    splideTrack = document.querySelector('.splide__track')
  }, [])

  useEffect(() => {
    if (lastEl === null || splideTrack === null) {
      return
    }
    if (isMobile) {
      splideTrack.classList.add('padd_r')
      observer.current.observe(lastEl, {
        attributes: true,
        attributeOldValue: true,
      })
    } else {
      observer.current.disconnect()
      splideTrack.classList.remove('padd_r')
      splideTrack.classList.remove('padd_l')
    }
  }, [isMobile])
}
