import React, { useState, useCallback } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const PopperContent = React.memo(
  ({ activeSceduleItemKey, datesArr, handleClose, changeTableContent }) => {
    return (
      <div className='popper__content'>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList>
            {datesArr.map(d => (
              <MenuItem
                className={activeSceduleItemKey === d[0] ? 'active' : ''}
                key={`${d[0]}_s`}
                onClick={() => changeTableContent(d[0], `${d[1]} ${d[2]}`)}>
                {d[1]} {d[2]}
              </MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </div>
    )
  }
)

export function MobileSeanceNavigation(props) {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const changeTableContent = useCallback((key, title) => {
    props.switchVisibility(false)
    setTimeout(() => {
      props.changeSceduleItem(key, title)
      props.switchVisibility(true)
    }, 200)

    setOpen(false)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div>
      <button className='seans_button_xs' onClick={handleToggle}>
        <span className='seans_button_xs__title'>{props.buttonTitle}</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>
      <Popper
        open={open}
        transition
        className='popper popper__seance'
        disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <div className='popper__backdrop'>
              <PopperContent
                activeSceduleItemKey={props.activeSceduleItemKey}
                datesArr={props.datesArr}
                handleClose={handleClose}
                changeTableContent={changeTableContent}
              />
            </div>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
