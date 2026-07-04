import { MobileAdv } from '@/components/Adv';
import { useCallback, useState } from 'react';
import { SushiWork } from '@/components/SushiWork';
import { BarSlider } from '@/components/BarSlider';
import { OnlineSales } from '@/components/OnlineSales';
import { useSeanceSchedule } from '@/hooks/useSeanceSchedule';
import { SeparatorMobile } from '@/components/SeparatorMobile';
import * as s from './Seance.css.ts';
import { TableContent } from './seanceComponents';
import { SeanceMobileNav } from './seanceComponents';
import { CreateSeanceButtons } from './seanceComponents';

type DateKeysT = 'day0' | 'day1' | 'day2' | 'day3' | 'day4' | 'day5' | 'day6';

const Seance = ({ isMobile }: {
  isMobile: boolean;
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

  if (!activeScheduleItemKey) return null;

  return (
    <div className={`content__gridLeftItem--3fr ${s.seance}`}>
      {!isMobile && (
        <CreateSeanceButtons
          activeScheduleItemKey={activeScheduleItemKey}
          changeTableContent={changeTableContent}
          datesArr={datesArr}
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
        <div className={s.loader}>Загрузка расписания...</div>
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
