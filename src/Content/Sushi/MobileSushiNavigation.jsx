import React, { useState, useRef } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

export function MobileSushiNavigation({
  changeImage,
  imageKey,
  defaultSushiArr,
}) {
  const [open, setOpen] = useState(false)
  // const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const switchSushiImage = key => {
    changeImage(key)
    setOpen(false)
  }

  const handleClose = event => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return
    // }
    setOpen(false)
  }

  return (
    <div>
      <button
        className='seans_button_xs'
        // ref={anchorRef}
        onClick={handleToggle}>
        <span className='seans_button_xs__title'>Меню</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>
      <Popper
        open={open}
        transition
        // anchorEl={anchorRef.current}
        // placement='top-start'
        className='popper popper__sushi'
        disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <div className='popper__backdrop'>
              <div className='popper__content'>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow'>
                    {defaultSushiArr.map(d => (
                      <MenuItem
                        className={imageKey === d[0] ? 'active' : ''}
                        key={d[0]}
                        onClick={() => switchSushiImage(d[0])}>
                        {d[1]}
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
