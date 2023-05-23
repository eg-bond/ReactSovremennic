import { useCallback, useEffect, useRef, useState } from 'react'

export function useTimeout(callback: () => any, delay: number) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}

export function useEventListener(
  eventType: string,
  callback: (e: any) => any,
  element = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = (e: Event) => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}

export function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(window.matchMedia(mediaQuery).matches)
  const [mediaQueryList, setMediaQueryList] = useState(null as MediaQueryList)

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    setIsMatch(list.matches)
    // console.log(list.matches)
  }, [mediaQuery])

  useEventListener('change', e => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}

export function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('click outside')
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
