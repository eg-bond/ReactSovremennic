import { memo, useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  changeScheduleItem,
  setTodayScheduleItem,
} from '../../REDUX/seanceReducer'
import { connect } from 'react-redux'
import Grow from '@material-ui/core/Grow'
import scedule from './scedule'
import { useCallback } from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import BarSwiper from '../../Template/BarSwiper'
import { modifiedClass } from '../../helpers'

const desktopBtn = (d, activeScheduleItemKey, changeTableContent) => {
  return (
    <button
      data-testid={d[0]}
      key={d + 'desc'}
      className={`fill_button ${
        activeScheduleItemKey === d[0] ? 'active' : ''
      }`}
      onClick={() => {
        changeTableContent(d[0], `${d[1]} ${d[2]}`)
      }}>
      <span>{d[1]}</span>
      <span>{d[2]}</span>
    </button>
  )
}
const CreateSeanceButtons = memo(function CreateSeanceButtons({
  datesArr,
  activeScheduleItemKey,
  changeTableContent,
  siteMode,
}) {
  return (
    <div className={modifiedClass('seanse__buttons', siteMode)}>
      {datesArr.map(d =>
        desktopBtn(d, activeScheduleItemKey, changeTableContent)
      )}
    </div>
  )
})

const tableItem = (seance, i) => {
  return (
    <tr key={seance[0]} className={i % 2 === 0 ? 'table_gray' : 'table_white'}>
      <td>{seance[0]}</td>
      <td>{seance[1]}</td>
      <td>{seance[2]}</td>
      <td>{seance[3]}</td>
    </tr>
  )
}

const TableContent = memo(function TableContent({
  scedule,
  activeScheduleItemKey,
}) {
  if (scedule[activeScheduleItemKey]) {
    return (
      <tbody>
        <tr className={`table_head`}>
          <th>Сеанс</th>
          <th>Фильм</th>
          <th>Возраст</th>
          <th>Цена, руб</th>
        </tr>
        {scedule[activeScheduleItemKey].map(tableItem)}
      </tbody>
    )
  }
  return null
})
// Grow animation time variable
let trDurationSeance = 0

const Seance = ({
  activeScheduleItemKey,
  buttonTitle,
  changeScheduleItem,
  datesArr,
  isMobile,
  setTodayScheduleItem,
  siteMode,
}) => {
  const [tableVisible, switchVisibility] = useState(true)

  const changeTableContent = useCallback(
    (key, title) => {
      if (key !== activeScheduleItemKey) {
        switchVisibility(false)
        setTimeout(() => {
          changeScheduleItem({ key, title })
          switchVisibility(true)
        }, trDurationSeance)
      }
    },
    [activeScheduleItemKey, changeScheduleItem]
  )

  // Switches the schedule item to todays when user leaves Seance page
  useEffect(() => {
    return () => {
      setTodayScheduleItem()
    }
  }, [setTodayScheduleItem])

  useEffect(() => {
    trDurationSeance = 200
    return () => {
      trDurationSeance = 0
    }
  }, [])

  return (
    <div className='content__gridLeftItem--3fr'>
      {!isMobile && (
        <CreateSeanceButtons
          datesArr={datesArr}
          activeScheduleItemKey={activeScheduleItemKey}
          changeTableContent={changeTableContent}
          siteMode={siteMode}
        />
      )}

      {isMobile && (
        <div className='sushi_menu_xs'>
          <MobileSeanceNavigation
            activeScheduleItemKey={activeScheduleItemKey}
            datesArr={datesArr}
            buttonTitle={buttonTitle}
            changeScheduleItem={changeScheduleItem}
            switchVisibility={switchVisibility}
          />
        </div>
      )}

      <Grow in={tableVisible} timeout={trDurationSeance}>
        <table className='seanse__table'>
          <TableContent
            activeScheduleItemKey={activeScheduleItemKey}
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
  // datesArr: state.seansPage.actualDatesArr,
  datesArr: state.seance.datesArr,
  activeScheduleItemKey: state.seance.activeScheduleItemKey,
  buttonTitle: state.seance.buttonTitle,
})

const ConnectedSeance = connect(mapStateToProps, {
  changeScheduleItem,
  setTodayScheduleItem,
})(Seance)

export default ConnectedSeance
