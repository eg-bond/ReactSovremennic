import { memo } from 'react';
import * as s from './CreateSeanceButtons.css.ts';
import type { ChangeTableContentT } from '@/Content/Seance/Seance.tsx';
import type { SeanceStateT } from '@/REDUX/seance/seanceReducerT';
import type { SpecialStateT } from '@/REDUX/special/specialReducerT';

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
  d: SeanceStateT['datesArr'][0],
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'],
  changeTableContent: ChangeTableContentT,
) {
  return (
    <button
      className={`fill_button ${
        activeScheduleItemKey === d[0] ? 'active' : ''
      }`}
      key={d[0] + 'desc'}
      onClick={() => {
        changeTableContent(d[0]);
      }}
    >
      <span>{d[1]}</span>
      <span>{d[2]}</span>
    </button>
  );
}

type CSB_T = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'];
  changeTableContent: ChangeTableContentT;
  datesArr: SeanceStateT['datesArr'];
  siteMode: SpecialStateT['siteMode'];
};
