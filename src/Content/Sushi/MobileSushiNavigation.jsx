import React, { useState, useCallback } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const PopperContent = React.memo(
  ({ defaultSushiArr, handleClose, currentImgKey, switchSushiImage }) => {
    return (
      <div className='popper__content'>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList>
            {defaultSushiArr.map(item => (
              <MenuItem
                className={currentImgKey === item[0] ? 'active' : ''}
                key={item[0]}
                onClick={() => switchSushiImage(item[0])}>
                {item[1]}
              </MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </div>
    )
  }
)

export const MobileSushiNavigation = ({
  changeImage,
  currentImgKey,
  defaultSushiArr,
}) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const switchSushiImage = useCallback(key => {
    changeImage(key)
    setOpen(false)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div>
      <button className='seans_button_xs' onClick={handleToggle}>
        <span className='seans_button_xs__title'>Меню</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>
      <Popper
        open={open}
        transition
        className='popper popper__sushi'
        disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <div className='popper__backdrop'>
              <PopperContent
                defaultSushiArr={defaultSushiArr}
                handleClose={handleClose}
                currentImgKey={currentImgKey}
                switchSushiImage={switchSushiImage}
              />
            </div>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
