import { SeanceStateT } from '@/REDUX/seance/seanceReducerT';
import * as s from './SeanceMobileNav.css.ts';
import type { EmblaViewportRefType } from 'embla-carousel-react';

const SeanceMobileNav = ({
  emblaRef,
  datesArr,
  activeScheduleItemKey,
  handleClick,
}: SeanceMobileNavT) => (
  <div className={s.mobileNavContainerBack}>
    <div className={s.mobileNavContainer} ref={emblaRef}>
      <div className={s.mobileNav}>
        {datesArr.map((item, index) => (
          <button
            className={`${s.mobileNavItem} ${
              activeScheduleItemKey === item[0] ? 'active' : ''
            }`}
            id={item[0] + '_seBtn'}
            key={item[0] + '_seBtn'}
            onClick={e => handleClick(e, item[0], index)}
          >
            {`${item[1]} ${item[2]}`}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default SeanceMobileNav;

type SeanceMobileNavT = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'];
  datesArr: SeanceStateT['datesArr'];
  emblaRef: EmblaViewportRefType;
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    dateKey: SeanceStateT['datesArr'][0][0],
    index: number,
  ) => void;
};
