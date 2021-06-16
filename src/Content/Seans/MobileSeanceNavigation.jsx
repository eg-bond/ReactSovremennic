import React, { useState, useCallback, useRef, useEffect } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

const PopperContent = React.memo(
  ({ activeSceduleItemKey, datesArr, changeTableContent }) => {
    console.log('menu rend')
    return (
      <div className='popper__content'>
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
      </div>
    )
  }
)

export const MobileSeanceNavigation = React.memo(
  ({
    activeSceduleItemKey,
    buttonTitle,
    datesArr,
    changeSceduleItem,
    switchVisibility,
  }) => {
    const [open, setOpen] = useState(false)
    let clickAwayActive = useRef(false)

    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen)
      setTimeout(() => {
        clickAwayActive.current = true
      }, 200)
    }

    const changeTableContent = useCallback((key, title) => {
      switchVisibility(false)
      clickAwayActive.current = false
      setTimeout(() => {
        changeSceduleItem(key, title)
        switchVisibility(true)
      }, 200)

      setOpen(false)
    }, [])

    const handleClose = () => {
      if (clickAwayActive.current) {
        setOpen(false)
        clickAwayActive.current = false
      }
    }

    return (
      <div>
        <button className='seans_button_xs' onClick={handleToggle}>
          <span className='seans_button_xs__title'>{buttonTitle}</span>{' '}
          <span
            className='glyphicon glyphicon-chevron-down'
            aria-hidden='true'
          />
        </button>

        <Grow in={open}>
          <div className='popper__backdrop'>
            <ClickAwayListener onClickAway={handleClose}>
              <div className='popper popper__seance'>
                <PopperContent
                  activeSceduleItemKey={activeSceduleItemKey}
                  datesArr={datesArr}
                  changeTableContent={changeTableContent}
                />
              </div>
            </ClickAwayListener>
          </div>
        </Grow>
      </div>
    )
  }
)
