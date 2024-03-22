import { memo } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { useImagesLoaded } from '../hooks/useImagesLoaded'
import { SushiWorkModal } from './SushiWork'

const AdvContent = memo(function AdvContent() {
  const { allImgLoaded, onLoad } = useImagesLoaded(3)

  return (
    <div className='content__gridRightItem--1fr contentMT'>
      <SushiWorkModal loaded={allImgLoaded} onLoad={onLoad} />
      {/* <div
        className={`desktopAdv desktopAdv--5 ${
          !allImgLoaded ? 'skeleton' : ''
        } `}>
        <img onLoad={onLoad} src='./Images/vr_image.webp' alt='vr' />
      </div> */}

      <Link tabIndex={2} className={'linkWrapper'} to='/sushi'>
        <div
          className={`desktopAdv desktopAdv--3 ${
            !allImgLoaded ? 'skeleton' : ''
          }`}>
          <img onLoad={onLoad} src='./Images/72.webp' alt='бар' />
        </div>
      </Link>
      <a href='https://lotten.ru' tabIndex={2} className={'linkWrapper'}>
        <div
          className={`desktopAdv desktopAdv--4 ${
            !allImgLoaded ? 'skeleton' : ''
          }`}>
          <img
            onLoad={onLoad}
            src='./Images/lotten.webp'
            alt='lotten кадастровые услуги'
          />
        </div>
      </a>
      <div
        className={`desktopAdv desktopAdv--2 ${
          !allImgLoaded ? 'skeleton' : ''
        }`}>
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
  const matchSushi = useMatch({ path: 'sushi' })

  if (!matchSushi) {
    return <AdvContent />
  }
  return null
}

export default Adv
