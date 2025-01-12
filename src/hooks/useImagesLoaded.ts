import { useState, useMemo } from 'react';
import { after } from '../helpers';

export const useImagesLoaded = (amount: number) => {
  const [allImgLoaded, setAllImgLoaded] = useState(false);

  const onLoad = useMemo(
    () =>
      after(amount, () => {
        setAllImgLoaded(true);
      }),
    [amount],
  );

  return { allImgLoaded, onLoad };
};
