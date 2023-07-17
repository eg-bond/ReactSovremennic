import { ClickAwayListener, Fade } from '@material-ui/core'
import { useRef, useState } from 'react'

export const SushiWork = () => {
  return (
    <div className='sushiWork'>
      <img
        className='sushiWork__img'
        src='./Images/sushi_work_half.webp'
        alt='работа_суши'
      />
    </div>
  )
}

export function SushiWorkModal({ loaded = true, onLoad = () => {} }) {
  const [open, setOpen] = useState(false)
  const clickAwayActive = useRef(false)

  const handleClose = () => {
    if (clickAwayActive.current) {
      setOpen(false)
    }
  }
  return (
    <>
      <div className={`desktopAdv desktopAdv--5 ${!loaded ? 'skeleton' : ''} `}>
        {/* <img
          onClick={() => setOpen(true)}
          onLoad={onLoad}
          src='./Images/sushi_work_250.webp'
          alt='суши_работа'
        /> */}
      </div>
      <Fade
        in={open}
        onEntered={() => (clickAwayActive.current = true)}
        onExited={() => (clickAwayActive.current = false)}>
        <div className='overlay'>
          <ClickAwayListener onClickAway={handleClose}>
            <div className='modal'>
              <img
                className='modal__img'
                src='./Images/sushi_work.webp'
                alt='суши_работа'
              />
            </div>
          </ClickAwayListener>
        </div>
      </Fade>
    </>
  )
}
