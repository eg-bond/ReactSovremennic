import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { MobileAdv } from '@/components/Adv';
import { SushiWork } from '@/components/SushiWork';
import { OnlineSales } from '@/components/OnlineSales';
import { useSeanceState } from '@/REDUX/stateHooks/useSeanceState';
import * as s from './Seance.css.ts';
import { TableContent } from './seanceComponents';
import { SeanceMobileNav } from './seanceComponents';
import { CreateSeanceButtons } from './seanceComponents';
import type { DateKeysT } from '@/REDUX/seance/seanceReducerT';

const Seance = ({ isMobile }: {
  isMobile: boolean;
}) => {
  const {
    siteMode,
    datesArr,
    activeScheduleItemKey,
    setTodayScheduleItem,
    changeScheduleItem,
  } = useSeanceState();

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

  // Switches the schedule item to todays when user leaves Seance page
  useEffect(() => {
    return () => {
      setTodayScheduleItem();
    };
  }, []);

  if (!activeScheduleItemKey) return null;

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

      <TableContent
        activeScheduleItemKey={activeScheduleItemKey}
        tableVisible={tableVisible}
      />

      <OnlineSales />

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <MobileAdv />}

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <SushiWork />}

      {/* <div className="separatorMobile separatorMobile--index" />
      <BarSlider /> */}
    </div>
  );
};

export default Seance;

export type ChangeTableContentT = (key: DateKeysT) => void;
