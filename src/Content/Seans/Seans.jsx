import { memo, useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  changeSceduleItem,
  setTodaySceduleItem,
} from '../../REDUX/seansReduser'
import { connect } from 'react-redux'
import Grow from '@material-ui/core/Grow'
import scedule from './scedule'
import { useCallback } from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import BarSwiper from '../../Template/BarSwiper'
import { modifiedClass } from '../../helpers'

const desktopBtn = (d, activeSceduleItemKey, changeTableContent) => {
  return (
    <button
      data-testid={d[0]}
      key={d[0] + 'desc'}
      className={`fill_button ${activeSceduleItemKey === d[0] ? 'active' : ''}`}
      onClick={() => {
        changeTableContent(d[0], `${d[1]} ${d[2]}`)
      }}>
      <span>{d[1]}</span>
      <span>{d[2]}</span>
    </button>
  )
}
const CreateSeanseButtons = memo(function CreateSeanseButtons({
  datesArr,
  activeSceduleItemKey,
  changeTableContent,
  siteMode,
}) {
  return (
    <div className={modifiedClass('seanse__buttons', siteMode)}>
      {datesArr.map(d =>
        desktopBtn(d, activeSceduleItemKey, changeTableContent)
      )}
    </div>
  )
})

const tableItem = (seanse, i) => {
  return (
    <tr key={seanse[0]} className={i % 2 === 0 ? 'table_gray' : 'table_white'}>
      <td>{seanse[0]}</td>
      <td>{seanse[1]}</td>
      <td>{seanse[2]}</td>
      <td>{seanse[3]}</td>
    </tr>
  )
}

const TableContent = memo(function TableContent({
  scedule,
  activeSceduleItemKey,
}) {
  if (scedule[activeSceduleItemKey]) {
    return (
      <tbody>
        <tr className={`table_head`}>
          <th>Сеанс</th>
          <th>Фильм</th>
          <th>Возраст</th>
          <th>Цена, руб</th>
        </tr>
        {scedule[activeSceduleItemKey].map(tableItem)}
      </tbody>
    )
  }
  return null
})
// Grow animation time variable
let trDurationSeance = 0

const Seans = ({
  activeSceduleItemKey,
  buttonTitle,
  changeSceduleItem,
  datesArr,
  isMobile,
  setTodaySceduleItem,
  siteMode,
}) => {
  const [tableVisible, switchVisibility] = useState(true)

  const changeTableContent = useCallback(
    (key, title) => {
      if (key !== activeSceduleItemKey) {
        switchVisibility(false)
        setTimeout(() => {
          changeSceduleItem(key, title)
          switchVisibility(true)
        }, trDurationSeance)
      }
    },
    [activeSceduleItemKey, changeSceduleItem]
  )

  // Switches the schedule item to todays when user leaves Seance page
  useEffect(() => {
    return () => {
      setTodaySceduleItem()
    }
  }, [setTodaySceduleItem])

  useEffect(() => {
    trDurationSeance = 200
    return () => {
      trDurationSeance = 0
    }
  }, [])

  return (
    <div className='content__gridLeftItem--3fr'>
      {!isMobile && (
        <CreateSeanseButtons
          datesArr={datesArr}
          activeSceduleItemKey={activeSceduleItemKey}
          changeTableContent={changeTableContent}
          siteMode={siteMode}
        />
      )}

      {isMobile && (
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

      <Grow in={tableVisible} timeout={trDurationSeance}>
        <table className='seanse__table'>
          <TableContent
            activeSceduleItemKey={activeSceduleItemKey}
            scedule={scedule}
          />
        </table>
      </Grow>

      <div className='separatorMobile separatorMobile--index' />
      {siteMode === 'default' && <BarSwiper />}

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <IndexAdvXS />}
    </div>
  )
}

let mapStateToProps = state => ({
  datesArr: state.seansPage.actualDatesArr,
  activeSceduleItemKey: state.seansPage.activeSceduleItemKey,
  buttonTitle: state.seansPage.buttonTitle,
})

const ConnectedSeans = connect(mapStateToProps, {
  changeSceduleItem,
  setTodaySceduleItem,
})(Seans)

export default ConnectedSeans
