import { useState, useCallback } from 'react';
import Sushi from './Sushi';
import type { SushiT } from './sushiT';

const SushiContainer = ({ isMobile }: {
  isMobile: boolean;
}) => {
  const [currentImgKey, switchImg] = useState(
    'sushi' as SushiT['currentImgKey'],
  );

  const onChangeTableContent = useCallback(
    (key: SushiT['currentImgKey']) => {
      if (key !== currentImgKey) {
        switchImg(key);
      }
    },
    [switchImg, currentImgKey],
  );

  return (
    <Sushi
      changeImage={onChangeTableContent}
      currentImgKey={currentImgKey}
      isMobile={isMobile}
    />
  );
};

export default SushiContainer;
