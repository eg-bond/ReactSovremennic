import { memo } from 'react'
import type { ScheduleT } from '../schedule'
import type { SeanceStateT } from '../../../REDUX/seance/seanceReducerT'

export const TableContent = memo<TableContentT>(function TableContent({
  schedule,
  activeScheduleItemKey,
}) {
  if (activeScheduleItemKey in schedule) {
    return (
      <tbody>
        <tr className={`table_head`}>
          <th>Сеанс</th>
          <th>Фильм</th>
          <th>Возраст</th>
          <th>Цена, руб</th>
        </tr>
        {schedule[activeScheduleItemKey as keyof ScheduleT].map(tableItem)}
      </tbody>
    )
  }
  return null
})

function tableItem(seance: Array<string | number>, i: number) {
  return (
    <tr key={seance[0]} className={i % 2 === 0 ? 'table_gray' : 'table_white'}>
      <td>{seance[0]}</td>
      <td>{seance[1]}</td>
      <td>{seance[2]}</td>
      <td>{seance[3]}</td>
    </tr>
  )
}

type TableContentT = {
  schedule: ScheduleT
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
}
