import { memo } from 'react'
import { modifiedClass } from '../../../helpers'
import type { SeanceStateT } from '../../../REDUX/seance/seanceReducerT'
import type { ChangeTableContentT } from '../Seance'

export const CreateSeanceButtons = memo<CSB_T>(function CreateSeanceButtons({
  datesArr,
  activeScheduleItemKey,
  changeTableContent,
  siteMode,
}) {
  return (
    <div className={modifiedClass('seanse__buttons', siteMode)}>
      {datesArr.map(d =>
        desktopBtn(d, activeScheduleItemKey, changeTableContent)
      )}
    </div>
  )
})

function desktopBtn(
  d: SeanceStateT['datesArr'][0],
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey'],
  changeTableContent: ChangeTableContentT
) {
  return (
    <button
      key={d[0] + 'desc'}
      className={`fill_button ${
        activeScheduleItemKey === d[0] ? 'active' : ''
      }`}
      onClick={() => {
        changeTableContent(d[0], `${d[1]} ${d[2]}`)
      }}>
      <span>{d[1]}</span>
      <span>{d[2]}</span>
    </button>
  )
}

type CSB_T = {
  datesArr: SeanceStateT['datesArr']
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  changeTableContent: ChangeTableContentT
  //special reducer
  siteMode: string
}
