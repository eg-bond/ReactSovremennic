import { useState, useCallback, memo } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import { useRef } from 'react'
import type { MobileSushiNavigationT, PopperContentT, SushiT } from '../sushiT'
import { sushiElems } from '../sushiHelpers'

const PopperContent = memo<PopperContentT>(function PopperContent({
  currentImgKey,
  switchSushiImage,
}) {
  return (
    <div className='popper__content'>
      <ul>
        {sushiElems.menuButtons.map(item => (
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

export const MobileSushiNavigation = memo<MobileSushiNavigationT>(
  function MobileSushiNavigation({ changeImage, currentImgKey }) {
    const [open, setOpen] = useState(false)
    // clickAwayActive нужен для того, чтобы ClickAwayListener был неактивен когда Popper скрыт
    const clickAwayActive = useRef(false)

    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen)
    }

    const switchSushiImage = useCallback(
      (key: SushiT['currentImgKey']) => {
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
          <span
            className='glyphicon glyphicon-chevron-down'
            aria-hidden='true'
          />
        </button>
        <Grow
          in={open}
          onEntered={() => (clickAwayActive.current = true)}
          onExited={() => (clickAwayActive.current = false)}>
          <div className='popper__backdrop'>
            <ClickAwayListener onClickAway={handleClose}>
              <div className='popper popper__sushi'>
                <PopperContent
                  currentImgKey={currentImgKey}
                  switchSushiImage={switchSushiImage}
                />
              </div>
            </ClickAwayListener>
          </div>
        </Grow>
      </div>
    )
  }
)
