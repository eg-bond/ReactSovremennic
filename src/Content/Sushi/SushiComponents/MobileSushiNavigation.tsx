import { useState, useCallback, memo, useEffect } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import { useRef } from 'react'
import type { MobileSushiNavigationT, PopperContentT, SushiT } from '../sushiT'
import { menuButtons } from '../sushiHelpers'

export const MobileSushiNavigation = memo<MobileSushiNavigationT>(
  function MobileSushiNavigation({ changeImage, currentImgKey }) {
    const [open, setOpen] = useState(false)
    const [buttonTitle, setButtonTitle] = useState('Суши')

    useEffect(() => {
      const currentMenuItem = menuButtons.find(
        item => item[0] === currentImgKey
      )
      if (currentMenuItem) {
        setButtonTitle(currentMenuItem[1])
      }

      return () => {
        setButtonTitle('Суши')
      }
    }, [currentImgKey])

    // clickAwayActive makes ClickAwayListener enabled when modal is shown
    const clickAwayActive = useRef(false)

    const handleClose = () => {
      if (clickAwayActive.current) {
        setOpen(false)
      }
    }

    const switchSushiImage = useCallback(
      (key: SushiT['currentImgKey']) => {
        changeImage(key)
        setOpen(false)
      },
      [changeImage]
    )

    return (
      <div>
        <button className='seans_button_xs' onClick={() => setOpen(true)}>
          <span className='seans_button_xs__title'>{buttonTitle}</span>{' '}
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

const PopperContent = memo<PopperContentT>(function PopperContent({
  currentImgKey,
  switchSushiImage,
}) {
  return (
    <ul>
      {menuButtons.map(item => (
        <li
          className={currentImgKey === item[0] ? 'active' : ''}
          key={item[0]}
          onClick={() => switchSushiImage(item[0])}>
          {item[1]}
        </li>
      ))}
    </ul>
  )
})
