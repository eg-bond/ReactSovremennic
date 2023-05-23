import { useState, useCallback, useRef, memo } from 'react'
import type { DateKeysT, SeanceStateT } from '../../REDUX/seance/seanceReducerT'
import type { ChangeTableContentT } from './Seance'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { useOutsideAlerter } from '../../hooks'

export const MobileSeanceNavigation = memo(function MobileSeanceNavigation({
  activeScheduleItemKey,
  buttonTitle,
  datesArr,
  changeScheduleItem,
  switchVisibility,
  changeTableContent,
}: MobileSeanceNavigationT) {
  const [open, setOpen] = useState(false)
  // clickAwayActive makes ClickAwayListener enabled when modal is shown
  const clickAwayActive = useRef(false)

  const changeTableContentt = useCallback(
    (key: DateKeysT, title: string) => {
      changeTableContent(key, title)
      setOpen(false)
    },
    [changeScheduleItem, switchVisibility]
  )

  const handleClose = () => {
    // console.log(clickAwayActive.current)

    if (clickAwayActive.current) {
      setOpen(false)
      clickAwayActive.current = false
    }
  }

  return (
    <div>
      <button className='seans_button_xs' onClick={() => setOpen(true)}>
        <span className='seans_button_xs__title'>{buttonTitle}</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>

      <div
        onTransitionEnd={() => {
          clickAwayActive.current = true
          console.log('trEnd')
        }}
        className={`overlay ${open ? 'open' : 'closed'}`}>
        <ClickAwayListener onClickAway={handleClose}>
          <div className={`modal ${open ? 'open' : 'closed'}`}>
            <ul>
              {datesArr.map(d => (
                <li
                  data-testid={`${d[0]}_xs`}
                  className={activeScheduleItemKey === d[0] ? 'active' : ''}
                  key={`${d[0]}_s`}
                  onClick={() => changeTableContentt(d[0], `${d[1]} ${d[2]}`)}>
                  {d[1]} {d[2]}
                </li>
              ))}
            </ul>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  )
})

const PopperContent = memo<PopperContentT>(function PopperContent({
  activeScheduleItemKey,
  datesArr,
  changeTableContent,
}) {
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
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  buttonTitle: string
  datesArr: SeanceStateT['datesArr']
  changeScheduleItem: ChangeTableContentT
  switchVisibility: (arg0: boolean) => void
  changeTableContent: ChangeTableContentT
}

type PopperContentT = {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  datesArr: SeanceStateT['datesArr']
  changeTableContent: ChangeTableContentT
}
