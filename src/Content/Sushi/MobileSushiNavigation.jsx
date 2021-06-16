import React, { useState, useCallback, useEffect } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { useRef } from 'react'

const PopperContent = React.memo(
  ({ defaultSushiArr, handleClose, switchSushiImage, activeImgKey }) => {
    return (
      <div className='popper__content'>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList>
            {defaultSushiArr.map(item => (
              <MenuItem
                className={activeImgKey === item[0] ? 'active' : ''}
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

export const MobileSushiNavigation = React.memo(
  ({ changeImage, currentImgKey, defaultSushiArr }) => {
    const [open, setOpen] = useState(false)
    const prevImgKey = useRef(currentImgKey)

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

    // Оптимизирует рендеринг PopperContent
    useEffect(() => {
      prevImgKey.current = currentImgKey
    }, [currentImgKey])

    return (
      <div>
        <button className='seans_button_xs' onClick={handleToggle}>
          <span className='seans_button_xs__title'>Меню</span>{' '}
          <span
            className='glyphicon glyphicon-chevron-down'
            aria-hidden='true'
          />
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
                  activeImgKey={prevImgKey.current}
                  switchSushiImage={switchSushiImage}
                />
              </div>
            </Grow>
          )}
        </Popper>
      </div>
    )
  }
)
