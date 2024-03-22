import { Link } from 'react-router-dom'

function IndexAdvXS() {
  return (
    <div className='container' data-testid={'mobile_adv'}>
      <div className='indexAdvXS'>
        <div className='indexAdvXS__item1'>
          <div className='indexAdvXS__item1__imgCont skeleton'>
            <Link to='/sushi'>
              <img src='./Images/74.webp' alt='sushi' />
            </Link>
          </div>
        </div>
        <div className='indexAdvXS__item1_2'>
          <a href='https://lotten.ru' tabIndex={2} className={'linkWrapper'}>
            <div className='indexAdvXS__item1__imgCont skeleton'>
              <img src='./Images/lotten.webp' alt='lotten кадастровые услуги' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexAdvXS
