import { useMotionValue } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import SushiMobileNav from './SushiMobileNav';
import { scrollToNavbar } from '../sushiHelpers';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import type { SushiT } from '../sushiT';

export const SushiMobileNavContainer = ({
  currentImgKey,
  changeImage,
  contentRef,
}: {
  changeImage: SushiT['changeImage'];
  contentRef: React.RefObject<HTMLDivElement>;
  currentImgKey: SushiT['currentImgKey'];
}) => {
  // adds class "changing" with transition style to slider for smooth animation
  const [isChanging, setIsChanging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const constraintRef = useRef<HTMLDivElement>(null);
  const hrRef = useRef<HTMLHRElement>(null);
  const x = useMotionValue(0);
  // window.innerWidth
  const { width } = useWindowWidth();

  const margins = 14;

  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      imgKey: SushiT['currentImgKey'],
      ref: React.RefObject<HTMLDivElement>,
    ) => {
      if (!ref.current) return;

      setIsChanging(true);

      const target = e.target as HTMLButtonElement;
      const scrollWidth = ref.current.scrollWidth;

      // x coordinate for active item to be in the middle of the screen
      const translateEdge = (width - target.offsetWidth - margins) / 2;
      // required translateX css prop
      const translateX = target.offsetLeft - translateEdge;

      if (translateX > 0) {
        if (translateX < scrollWidth - width) x.set(-translateX);
        else x.set(-(scrollWidth - width + margins));
      }
      if (translateX < 0) {
        x.set(0);
      }

      setTimeout(() => setIsChanging(false), 300);
      changeImage(imgKey);

      scrollToNavbar(contentRef, hrRef);
    },
    [width, changeImage, x, contentRef],
  );

  return (
    <SushiMobileNav
      constraintRef={constraintRef}
      currentImgKey={currentImgKey}
      handleClick={handleClick}
      hrRef={hrRef}
      isChanging={isChanging}
      sliderRef={sliderRef}
      x={x}
    />
  );
};

export default SushiMobileNavContainer;
