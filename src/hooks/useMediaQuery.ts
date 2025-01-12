import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(
    window.matchMedia(`${mediaQuery}`).matches,
  );
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>(null);

  useEffect(() => {
    const list = window.matchMedia(`${mediaQuery}`);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', e => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}
