import { useMotionValue } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import SeanceMobileNav from './SeanceMobileNav';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import type { ChangeTableContentT } from '../Seance';
import type {
  DateKeysT,
  SeanceStateT,
} from '../../../REDUX/seance/seanceReducerT';

export const SeanceMobileNavContainer = ({
  activeScheduleItemKey,
  datesArr,
  changeTableContent,
}: {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'];
  changeTableContent: ChangeTableContentT;
  datesArr: SeanceStateT['datesArr'];
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
      dateKey: DateKeysT,
      ref: React.RefObject<HTMLDivElement>,
    ) => {
      if (!ref.current) return;

      setIsChanging(true);

      const target = e.target as HTMLButtonElement;
      const scrollWidth = ref.current.scrollWidth;
      // // x coordinate for active item to be in the middle of the screen
      const translateEdge = (width - target.offsetWidth - margins) / 2;
      // // required translateX css prop
      const translateX = target.offsetLeft - translateEdge;

      if (translateX > 0) {
        if (translateX < scrollWidth - width) x.set(-translateX);
        else x.set(-(scrollWidth - width + margins));
      }
      if (translateX < 0) {
        x.set(0);
      }

      setTimeout(() => setIsChanging(false), 350);
      changeTableContent(dateKey);
    },
    [width, changeTableContent, x],
  );

  return (
    <SeanceMobileNav
      activeScheduleItemKey={activeScheduleItemKey}
      constraintRef={constraintRef}
      datesArr={datesArr}
      handleClick={handleClick}
      hrRef={hrRef}
      isChanging={isChanging}
      sliderRef={sliderRef}
      x={x}
    />
  );
};

export default SeanceMobileNavContainer;
