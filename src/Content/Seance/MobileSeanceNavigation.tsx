import { useState, useCallback, useRef, memo } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import type { DateKeysT, SeanceStateT } from '../../REDUX/seance/seanceReducerT'
import type { ChangeTableContentT } from './Seance'

export const MobileSeanceNavigation = memo(function MobileSeanceNavigation({
  activeScheduleItemKey,
  buttonTitle,
  datesArr,
  changeTableContent,
}: MobileSeanceNavigationT) {
  const [open, setOpen] = useState(false)
  // clickAwayActive makes ClickAwayListener enabled when modal is shown
  const clickAwayActive = useRef(false)

  const handleClose = () => {
    if (clickAwayActive.current) {
      setOpen(false)
    }
  }

  const handleChangeTable = useCallback(
    (key: DateKeysT, title: string) => {
      changeTableContent(key, title)
      setOpen(false)
    },
    [changeTableContent]
  )

  return (
    <div>
      <button className='seans_button_xs' onClick={() => setOpen(true)}>
        <span className='seans_button_xs__title'>{buttonTitle}</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>

      <Grow
        in={open}
        onEntered={() => (clickAwayActive.current = true)}
        onExited={() => (clickAwayActive.current = false)}>
        <div className='popper__backdrop'>
          <ClickAwayListener onClickAway={handleClose}>
            <div className='popper popper__seance'>
              <PopperContent
                activeScheduleItemKey={activeScheduleItemKey}
                datesArr={datesArr}
                changeTableContent={handleChangeTable}
              />
            </div>
          </ClickAwayListener>
        </div>
      </Grow>
    </div>
  )
})

const PopperContent = memo<PopperContentT>(function PopperContent({
  activeScheduleItemKey,
  datesArr,
  changeTableContent,
}) {
  return (
    <ul>
      {datesArr.map(d => (
        <li
          data-testid={`${d[0]}_xs`}
          className={activeScheduleItemKey === d[0] ? 'active' : ''}
          key={`${d[0]}_s`}
          onClick={() => changeTableContent(d[0], `${d[1]} ${d[2]}`)}>
          {d[1]} {d[2]}
        </li>
      ))}
    </ul>
  )
})

type MobileSeanceNavigationT = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  buttonTitle: string
  datesArr: SeanceStateT['datesArr']
  changeTableContent: ChangeTableContentT
}

type PopperContentT = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  datesArr: SeanceStateT['datesArr']
  changeTableContent: ChangeTableContentT
}
