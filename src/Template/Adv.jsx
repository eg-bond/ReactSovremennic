import { memo, useRef, useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { after } from '../helpers'
import { ClickAwayListener, Fade } from '@material-ui/core'

const AdvContent = memo(function AdvContent() {
  const [loaded, setImgLoaded] = useState(false)

  const onLoad = after(3, () => {
    setImgLoaded(true)
  })

  return (
    <div className='content__gridRightItem--1fr'>
      <SushiWorkModal loaded={loaded} onLoad={onLoad} />
      {/* <div className={`desktopAdv desktopAdv--5 ${!loaded ? 'skeleton' : ''} `}>
        <img onLoad={onLoad} src='./Images/vr_image.webp' alt='vr' />
      </div> */}

      <Link className={'linkWrapper'} to='/sushi'>
        <div
          className={`desktopAdv desktopAdv--3 ${!loaded ? 'skeleton' : ''}`}>
          <img onLoad={onLoad} src='./Images/72.gif' alt='Суши-бар' />
        </div>
      </Link>
      <div className={`desktopAdv desktopAdv--2 ${!loaded ? 'skeleton' : ''}`}>
        <img
          onLoad={onLoad}
          src='./Images/jsb1.gif'
          alt='Подарочный сертификат'
        />
      </div>
    </div>
  )
})

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
        <img
          onClick={() => setOpen(true)}
          onLoad={onLoad}
          src='./Images/sushi_work_half.webp'
          alt='суши_работа'
        />
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

function Adv() {
  let matchSushi = useMatch({ path: 'sushi' })
  if (!matchSushi) {
    return <AdvContent />
  }
  return null
}

export default Adv
