import React, { useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  changeSceduleItem,
  setTodaySceduleItem,
} from '../../REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Grow from '@material-ui/core/Grow'
import scedule from './scedule'
import { useCallback } from 'react'

const desktopBtn = (d, activeSceduleItemKey, changeTableContent) => {
  return (
    <button
      data-testid={d[0]}
      key={d[0] + 'desc'}
      className={`fill_button ${activeSceduleItemKey === d[0] ? 'active' : ''}`}
      onClick={() => {
        changeTableContent(d[0], `${d[1]} ${d[2]}`)
      }}>
      {d[1]}
      <br />
      {d[2]}
    </button>
  )
}
const CreateSeanseButtons = React.memo(
  ({ datesArr, activeSceduleItemKey, changeTableContent }) => {
    return (
      <div className='seanse__buttons'>
        {datesArr.map(d =>
          desktopBtn(d, activeSceduleItemKey, changeTableContent)
        )}
      </div>
    )
  }
)

const tableItem = (seanse, i) => {
  return (
    <tr key={seanse[0]} className={i % 2 === 0 ? 'table_gray' : 'table_white'}>
      <td>{seanse[0]}</td>
      <td>{seanse[1]}</td>
      <td>{seanse[2]}</td>
    </tr>
  )
}
const TableContent = React.memo(({ scedule, activeSceduleItemKey }) => {
  if (scedule[activeSceduleItemKey]) {
    return (
      <tbody>
        <tr className={`table_head`}>
          <th>Сеанс</th>
          <th>Фильм</th>
          <th>Цена, руб</th>
        </tr>
        {scedule[activeSceduleItemKey].map(tableItem)}
      </tbody>
    )
  }
  return null
})

const Seans = ({
  setTodaySceduleItem,
  datesArr,
  buttonTitle,
  activeSceduleItemKey,
  mobileQ,
  desktopQ,
  changeSceduleItem,
}) => {
  const [tableVisible, switchVisibility] = useState(true)

  const trDuration = 200

  const changeTableContent = useCallback(
    (key, title) => {
      console.log('not working')
      if (key !== activeSceduleItemKey) {
        console.log('key: ' + key)
        console.log('activeSceduleItemKey: ' + activeSceduleItemKey)
        switchVisibility(false)
        setTimeout(() => {
          changeSceduleItem(key, title)
          switchVisibility(true)
        }, trDuration)
      }
    },
    [activeSceduleItemKey]
  )

  useEffect(() => {
    return () => {
      setTodaySceduleItem()
    }
  }, [setTodaySceduleItem])

  return (
    <div className='content__gridLeftItem--3fr'>
      {desktopQ && (
        <CreateSeanseButtons
          datesArr={datesArr}
          activeSceduleItemKey={activeSceduleItemKey}
          changeTableContent={changeTableContent}
        />
      )}

      {mobileQ && (
        <div className='sushi_menu_xs'>
          <MobileSeanceNavigation
            activeSceduleItemKey={activeSceduleItemKey}
            datesArr={datesArr}
            buttonTitle={buttonTitle}
            changeSceduleItem={changeSceduleItem}
            switchVisibility={switchVisibility}
          />
        </div>
      )}

      <Grow in={tableVisible} timeout={trDuration}>
        <table className='seanse__table'>
          <TableContent
            activeSceduleItemKey={activeSceduleItemKey}
            scedule={scedule}
          />
        </table>
      </Grow>

      <div className='separatorMobile-special' />
    </div>
  )
}

let mapStateToProps = state => ({
  datesArr: state.seansPage.actualDatesArr,
  activeSceduleItemKey: state.seansPage.activeSceduleItemKey,
  buttonTitle: state.seansPage.buttonTitle,
})

// export default compose(
//   connect(mapStateToProps, {
//     changeSceduleItem,
//     setTodaySceduleItem,
//   })
// )(Seans)

export default connect(mapStateToProps, {
  changeSceduleItem,
  setTodaySceduleItem,
})(Seans)
