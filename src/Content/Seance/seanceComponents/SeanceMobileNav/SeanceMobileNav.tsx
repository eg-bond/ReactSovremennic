import * as s from './SeanceMobileNav.css.ts';
import type { EmblaViewportRefType } from 'embla-carousel-react';

type DateKeysT = 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

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
            onClick={e => handleClick(e, item[0] as DateKeysT, index)}
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
  activeScheduleItemKey: string;
  datesArr: Array<[string, string, string]>;
  emblaRef: EmblaViewportRefType;
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    dateKey: DateKeysT,
    index: number,
  ) => void;
};
