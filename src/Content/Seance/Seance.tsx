import { useCallback, useState } from 'react';
import * as s from './Seance.css.ts';
import { MobileAdv } from '@/components/Adv';
import { TableContent } from './seanceComponents';
import { SushiWork } from '@/components/SushiWork';
import { BarSlider } from '@/components/BarSlider';
import { PhoneLink } from '@/components/PhoneLink';
import { CINEMA_PHONE } from '@/utils/constants.ts';
import { SeanceMobileNav } from './seanceComponents';
import { OnlineSales } from '@/components/OnlineSales';
import { CreateSeanceButtons } from './seanceComponents';
import { useSeanceSchedule } from '@/hooks/useSeanceSchedule';
import { SeparatorMobile } from '@/components/SeparatorMobile';
import type { SpecialStateT } from '@/types/special';

type DateKeysT = 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

const Seance = ({ isMobile, siteMode }: {
  isMobile: boolean;
  siteMode: SpecialStateT['siteMode'];
}) => {
  const {
    datesArr,
    activeScheduleItemKey,
    changeScheduleItem,
    schedule,
    isLoading,
    error,
  } = useSeanceSchedule();

  const [tableVisible, switchVisibility] = useState(true);

  const changeTableContent = useCallback(
    (key: DateKeysT) => {
      if (key !== activeScheduleItemKey) {
        if (isMobile) {
          changeScheduleItem(key);
        } else {
          switchVisibility(false);
          setTimeout(() => {
            changeScheduleItem(key);
            switchVisibility(true);
          }, 200);
        }
      }
    },
    [activeScheduleItemKey, changeScheduleItem, isMobile],
  );

  return (
    <div className={`content__gridLeftItem--3fr ${s.seance}`}>
      {!isMobile && (
        <CreateSeanceButtons
          activeScheduleItemKey={activeScheduleItemKey}
          changeTableContent={changeTableContent}
          datesArr={datesArr}
          siteMode={siteMode}
        />
      )}

      {isMobile && (
        <div>
          <SeanceMobileNav
            activeScheduleItemKey={activeScheduleItemKey}
            changeTableContent={changeTableContent}
            datesArr={datesArr}
          />
        </div>
      )}

      {isLoading && (
        <div className={s.loading}>
          <div className={s.spinner} />
        </div>
      )}

      {error && (
        <div className={s.error}>
          Расписание временно недоступно. Попробуйте обновить страницу.
        </div>
      )}

      {schedule && (
        <TableContent
          activeScheduleItemKey={activeScheduleItemKey}
          schedule={schedule}
          tableVisible={tableVisible}
        />
      )}

      <OnlineSales />

      <p className={s.phone}>
        Также можно забронировать места в кинозале по телефону:
        {' '}
        <PhoneLink phone={CINEMA_PHONE} />
      </p>

      <SeparatorMobile variant="index" />
      <BarSlider />

      <SeparatorMobile variant="index" />
      {isMobile && <MobileAdv />}

      <SeparatorMobile variant="index" />
      {isMobile && <SushiWork />}
    </div>
  );
};

export default Seance;

export type ChangeTableContentT = (key: DateKeysT) => void;
