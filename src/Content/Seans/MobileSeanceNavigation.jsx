import React, { useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

export function MobileSeanceNavigation(props) {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const changeTableContent = (key, title) => {
    props.switchVisibility(false)
    setTimeout(() => {
      props.changeSceduleItem(key, title)
      props.switchVisibility(true)
    }, 200)

    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
              <div className='popper__content'>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {props.datesArr.map(d => (
                      <MenuItem
                        className={
                          props.activeSceduleItemKey === d[0] ? 'active' : ''
                        }
                        key={`${d[0]}_s`}
                        onClick={() =>
                          changeTableContent(d[0], `${d[1]} ${d[2]}`)
                        }>
                        {d[1]} {d[2]}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </div>
            </div>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
