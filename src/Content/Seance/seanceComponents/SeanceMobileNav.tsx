import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SeanceStateT } from '../../../REDUX/seance/seanceReducerT';
import type { MotionValue } from 'framer-motion';

const SeanceMobileNav = ({
  x,
  constraintRef,
  sliderRef,
  hrRef,
  isChanging,
  datesArr,
  activeScheduleItemKey,
  handleClick,
}: SeanceMobileNavT) => {
  useEffect(() => {
    const activeBtn = document.querySelector(
      `#${activeScheduleItemKey}_seBtn`,
    ) as HTMLButtonElement;

    if (activeBtn) activeBtn.click();
  }, []);

  return (
    <>
      <div className="sushiMobileNav__container--back">
        <div className="sushiMobileNav__container" ref={constraintRef}>
          <motion.div
            className={`sushiMobileNav ${isChanging ? 'changing' : ''}`}
            drag="x"
            dragConstraints={constraintRef}
            ref={sliderRef}
            style={{ x }}
          >
            {datesArr.map(item => (
              <button
                className={`sushiMobileNav__item ${
                  activeScheduleItemKey === item[0] ? 'active' : ''
                }`}
                id={item[0] + '_seBtn'}
                key={item[0] + '_seBtn'}
                onClick={e => handleClick(e, item[0], sliderRef)}
              >
                {`${item[1]} ${item[2]}`}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
      <hr className="sushiMobileNav__anchor" ref={hrRef}></hr>
    </>
  );
};

export default SeanceMobileNav;

type SeanceMobileNavT = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'];
  constraintRef: React.RefObject<HTMLDivElement>;
  datesArr: SeanceStateT['datesArr'];
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    dateKey: SeanceStateT['datesArr'][0][0],
    ref: React.RefObject<HTMLDivElement>
  ) => void;
  hrRef: React.RefObject<HTMLHRElement>;
  isChanging: boolean;
  sliderRef: React.RefObject<HTMLDivElement>;
  x: MotionValue<number>;
};
