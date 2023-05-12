import { useState, useCallback, useRef, memo } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import { CSB_T } from './Seance'
import { DateKeysT } from '../../REDUX/seanceReducer'

type PopperContent = {
  activeScheduleItemKey: CSB_T['activeScheduleItemKey']
  datesArr: CSB_T['datesArr']
  changeTableContent: CSB_T['changeTableContent']
}

const PopperContent = memo(function PopperContent({
  activeScheduleItemKey,
  datesArr,
  changeTableContent,
}: PopperContent) {
  return (
    <div className='popper__content'>
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
    </div>
  )
})

type MobileSeanceNavigationT = {
  activeScheduleItemKey: CSB_T['activeScheduleItemKey']
  buttonTitle: string
  datesArr: CSB_T['datesArr']
  changeScheduleItem: (key: DateKeysT, title: string) => void
  switchVisibility: (arg0: boolean) => void
}

export const MobileSeanceNavigation = memo(function MobileSeanceNavigation({
  activeScheduleItemKey,
  buttonTitle,
  datesArr,
  changeScheduleItem,
  switchVisibility,
}: MobileSeanceNavigationT) {
  const [open, setOpen] = useState(false)
  // clickAwayActive нужен для того, чтобы ClickAwayListener был неактивен когда Popper скрыт
  const clickAwayActive = useRef(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const changeTableContent = useCallback(
    (key: DateKeysT, title: string) => {
      switchVisibility(false)
      setTimeout(() => {
        changeScheduleItem(key, title)
        switchVisibility(true)
      }, 200)

      setOpen(false)
    },
    [changeScheduleItem, switchVisibility]
  )

  const handleClose = () => {
    if (clickAwayActive.current) {
      setOpen(false)
    }
  }

  return (
    <div>
      <button className='seans_button_xs' onClick={handleToggle}>
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
                changeTableContent={changeTableContent}
              />
            </div>
          </ClickAwayListener>
        </div>
      </Grow>
    </div>
  )
})
