import { Link } from 'react-router-dom'

function IndexAdvXS() {
  return (
    <div className='container' data-testid={'mobile_adv'}>
      <div className='indexAdvXS'>
        <div className='indexAdvXS__item1'>
          <div className='indexAdvXS__item1__imgCont skeleton'>
            <Link to='/sushi'>
              <img src='./Images/73.webp' alt='sushi' />
            </Link>
          </div>
        </div>
        <div className='indexAdvXS__item2'>
          {/* <div className='indexAdvXS__item2__imgCont skeleton'>
            <img src='./Images/vr_image.webp' alt='vr' />
          </div>
          <div className='indexAdvXS__item2__imgCont skeleton'>
            <Link to='/sushi'>
              <img src='./Images/sushiNew.webp' alt='новинки суши' />
            </Link>
          </div> */}
          <a href='https://lotten.ru' tabIndex={2} className={'linkWrapper'}>
            <div>
              {/* <div className={`desktopAdv desktopAdv--4`}> */}
              <img src='./Images/lotten.webp' alt='lotten кадастровые услуги' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexAdvXS
