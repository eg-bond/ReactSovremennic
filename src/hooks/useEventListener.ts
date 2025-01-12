import { useEffect, useRef } from 'react';

export function useEventListener(
  eventType: string,
  callback: (e: any) => any,
  element: MediaQueryList,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);

    try {
      // for chrome, firefox, etc
      element.addEventListener(eventType, handler);
    } catch {
      // for Safari
      try {
        element.addListener(handler);
      } catch (err) {
        console.log(err);
      }
    }

    return () => {
      element.addEventListener(eventType, handler);
      element.removeListener(handler);
    };
  }, [eventType, element]);
}
