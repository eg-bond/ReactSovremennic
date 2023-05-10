import { memo, useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { after } from '../helpers'

const AdvContent = memo(function AdvContent() {
  const [loaded, setImgLoaded] = useState(false)

  const onLoad = after(3, () => {
    setImgLoaded(true)
  })

  return (
    <div className='content__gridRightItem--1fr'>
      <div className={`desktopAdv desktopAdv--5 ${!loaded ? 'skeleton' : ''} `}>
        <img onLoad={onLoad} src='./Images/vr_image.webp' alt='vr' />
      </div>

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

function Adv() {
  let matchSushi = useMatch({ path: 'sushi' })
  if (!matchSushi) {
    return <AdvContent />
  }
  return null
}

export default Adv
