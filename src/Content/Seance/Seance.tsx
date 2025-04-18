import { useCallback } from 'react';
import { MobileAdv } from '@/Template/Adv';
import { useEffect, useState } from 'react';
import BarSlider from '@/Template/BarSlider';
import { SushiWork } from '@/Template/SushiWork';
import { OnlineSales } from '@/components/OnlineSales';
import { useSeanceState } from '@/REDUX/stateHooks/useSeanceState';
import schedule from './schedule';
import { TableContent } from './seanceComponents/TableContent';
import { CreateSeanceButtons } from './seanceComponents/CreateSeanceButtons';
import SeanceMobileNavContainer from './seanceComponents/SeanceMobileNavContainer';
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
    <div className="content__gridLeftItem--3fr seance">
      {!isMobile && (
        <CreateSeanceButtons
          activeScheduleItemKey={activeScheduleItemKey}
          changeTableContent={changeTableContent}
          datesArr={datesArr}
          siteMode={siteMode}
        />
      )}

      {isMobile && (
        <div className="sushi_menu_xs">
          <SeanceMobileNavContainer
            activeScheduleItemKey={activeScheduleItemKey}
            changeTableContent={changeTableContent}
            datesArr={datesArr}
          />
        </div>
      )}

      <table
        className={`seanse__table ${
          tableVisible ? 'fadeInUp' : 'fadeOutDown'
        }`}
      >
        <TableContent
          activeScheduleItemKey={activeScheduleItemKey}
          schedule={schedule}
        />
      </table>

      <OnlineSales />

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <MobileAdv />}

      <div className="separatorMobile separatorMobile--index" />
      {isMobile && <SushiWork />}

      <div className="separatorMobile separatorMobile--index" />
      <BarSlider />
    </div>
  );
};

export default Seance;

export type ChangeTableContentT = (key: DateKeysT) => void;
