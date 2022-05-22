import React from 'react'

function CovidMessage() {
  return (
    <>
      <div className='covidMessage'>
        <p style={{ marginBottom: '5px' }}>
          Уважаемые гости кинотеатра «Современник»!
        </p>
        <p style={{ marginBottom: '5px' }}>
          <span>23.05.2022, 24.05.2022 и 25.05.2022 кинотеатр</span>
          <span className='red'> работать не будет!</span>
        </p>
        <p style={{ marginBottom: '5px' }}>
          С 26.05.2022 кинотеатр будет работать в стандартном режиме.
        </p>
        <p style={{ marginBottom: '5px' }}>
          <span>Сушибар "КИН-НО"</span>
          <span className='red'> работает без изменений!</span>
        </p>
      </div>
      <div className='separatorMobile' />
    </>
  )
}

export default CovidMessage
