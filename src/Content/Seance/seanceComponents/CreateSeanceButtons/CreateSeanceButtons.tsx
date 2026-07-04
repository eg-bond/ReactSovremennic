import { memo } from 'react';
import * as s from './CreateSeanceButtons.css.ts';
import type { SpecialStateT } from '@/types/special';
import type { ChangeTableContentT } from '@/Content/Seance/Seance.tsx';

type DatesArrItem = [string, string, string];

export const CreateSeanceButtons = memo<CSB_T>(function CreateSeanceButtons({
  datesArr,
  activeScheduleItemKey,
  changeTableContent,
  siteMode,
}) {
  const modeClass = siteMode === 'special' ? s.seanceButtonsSpecial : s.seanceButtonsDefault;
  return (
    <div className={`${s.seanceButtons} ${modeClass}`}>
      {datesArr.map(d =>
        desktopBtn(d, activeScheduleItemKey, changeTableContent),
      )}
    </div>
  );
});

function desktopBtn(
  d: DatesArrItem,
  activeScheduleItemKey: string,
  changeTableContent: ChangeTableContentT,
) {
  return (
    <button
      className={`fill_button ${
        activeScheduleItemKey === d[0] ? 'active' : ''
      }`}
      key={d[0] + 'desc'}
      onClick={() => {
        changeTableContent(d[0] as Parameters<ChangeTableContentT>[0]);
      }}
    >
      <span>{d[1]}</span>
      <span>{d[2]}</span>
    </button>
  );
}

type CSB_T = {
  activeScheduleItemKey: string;
  changeTableContent: ChangeTableContentT;
  datesArr: DatesArrItem[];
  siteMode: SpecialStateT['siteMode'];
};
