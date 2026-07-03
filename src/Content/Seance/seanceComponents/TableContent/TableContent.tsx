import { memo } from 'react';
import * as s from './TableContent.css.ts';
import type { DateKeysT, SeanceStateT } from '@/REDUX/seance/seanceReducerT';

type ScheduleDataT = Record<
  DateKeysT,
  Array<[string, string, string, string]>
>;

export const TableContent = memo<TableContentT>(
  function TableContent({
    activeScheduleItemKey,
tableVisible,
schedule,
  }) {
    if (!schedule || !(activeScheduleItemKey in schedule)) return null;
    return (
      <table className={`${s.seanceTable} ${tableVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
        <tbody>
          <tr className={s.tableHead}>
            <th>Сеанс</th>
            <th>Фильм</th>
            <th>Возр.</th>
            <th>Цена</th>
          </tr>
          {schedule[activeScheduleItemKey as keyof typeof schedule].map(tableItem)}
        </tbody>
      </table>
    );
  });

function tableItem(seance: Array<string | number>, i: number) {
  return (
    <tr
      className={i % 2 === 0 ? s.tableGray : s.tableWhite}
      key={i + 'sTable'}
    >
      <td>{seance[0]}</td>
      <td>{seance[1]}</td>
      <td>{seance[2]}</td>
      <td>{seance[3]}</td>
    </tr>
  );
}

type TableContentT = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'];
  schedule: ScheduleDataT | null;
  tableVisible: boolean;
};
