import React, { useState, useCallback } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import { useRef } from 'react'

const PopperContent = React.memo(function PopperContent({
  defaultSushiArr,
  switchSushiImage,
  currentImgKey,
}) {
  return (
    <div className='popper__content'>
      <ul>
        {defaultSushiArr.map(item => (
          <li
            className={currentImgKey === item[0] ? 'active' : ''}
            key={item[0]}
            onClick={() => switchSushiImage(item[0])}>
            {item[1]}
          </li>
        ))}
      </ul>
    </div>
  )
})

export const MobileSushiNavigation = React.memo(function MobileSushiNavigation({
  changeImage,
  currentImgKey,
  defaultSushiArr,
}) {
  console.log('sushi render')
  const [open, setOpen] = useState(false)
  // clickAwayActive нужен для того, чтобы ClickAwayListener был неактивен когда Popper скрыт
  const clickAwayActive = useRef(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const switchSushiImage = useCallback(
    key => {
      changeImage(key)
      setOpen(false)
    },
    [changeImage]
  )

  const handleClose = () => {
    if (clickAwayActive.current) {
      setOpen(false)
    }
  }

  return (
    <div>
      <button className='seans_button_xs' onClick={handleToggle}>
        <span className='seans_button_xs__title'>Меню</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>
      <Grow
        in={open}
        onEntered={() => (clickAwayActive.current = true)}
        onExited={() => (clickAwayActive.current = false)}>
        <div className='popper__backdrop'>
          <ClickAwayListener onClickAway={handleClose}>
            <div className='popper popper__sushi'>
              <PopperContent
                defaultSushiArr={defaultSushiArr}
                currentImgKey={currentImgKey}
                switchSushiImage={switchSushiImage}
              />
            </div>
          </ClickAwayListener>
        </div>
      </Grow>
    </div>
  )
})
