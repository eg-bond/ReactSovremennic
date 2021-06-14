import React, { useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  changeSceduleItemKey,
  changeButtonTitle,
  setTodaySceduleItem,
  initialButtonTitle,
} from '../../REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Grow from '@material-ui/core/Grow'
import scedule from './scedule'

// let tableContent = SeansTableContent()
// let finalTableContent = [...tableContent]

const Seans = ({
  setTodaySceduleItem,
  initialButtonTitle,
  siteMode,
  theme,
  activeSceduleItemKey,
  mobileQ,
  desktopQ,
  ...props
}) => {
  const [tableVisible, switchVisibility] = useState(true)

  const trDuration = 200
  const changeTableContent = (key, title) => {
    if (key !== activeSceduleItemKey) {
      switchVisibility(false)
      setTimeout(() => {
        props.changeSceduleItemKey(key)
        props.changeButtonTitle(title)
        switchVisibility(true)
      }, trDuration)
    }
  }

  useEffect(() => {
    return () => {
      setTodaySceduleItem()
      initialButtonTitle()
    }
  }, [setTodaySceduleItem, initialButtonTitle])

  const tableContent = () => {
    let content
    if (scedule[activeSceduleItemKey]) {
      content = scedule[activeSceduleItemKey].map((seanse, i) => {
        return (
          <tr
            key={seanse[0]}
            className={i % 2 === 0 ? 'table_gray' : 'table_white'}>
            <td>{seanse[0]}</td>
            <td>{seanse[1]}</td>
            <td>{seanse[2]}</td>
          </tr>
        )
      })
    }
    return content
  }

  return (
    <div className='content__gridLeftItem--3fr'>
      {desktopQ && (
        <div className={`seans-menu`}>
          <div className='seanse__buttons'>
            {props.datesArr.map(d => (
              <button
                key={d[0] + 'desc'}
                className={`fill_button ${
                  activeSceduleItemKey === d[0] ? 'active' : ''
                }`}
                onClick={() => changeTableContent(d[0], `${d[1]} ${d[2]}`)}>
                {d[1]} <br /> {d[2]}
              </button>
            ))}
          </div>
        </div>
      )}

      {mobileQ && (
        <div className='sushi_menu_xs'>
          <MobileSeanceNavigation
            activeSceduleItemKey={activeSceduleItemKey}
            datesArr={props.datesArr}
            buttonTitle={props.buttonTitle}
            changeButtonTitle={props.changeButtonTitle}
            changeSceduleItemKey={props.changeSceduleItemKey}
            switchVisibility={switchVisibility}
          />
        </div>
      )}

      <Grow in={tableVisible} timeout={trDuration}>
        <table className='seanse__table'>
          <tbody>
            <tr className={`table_head`}>
              <th>Сеанс</th>
              <th>Фильм</th>
              <th>Цена, руб</th>
            </tr>
            {tableContent()}
          </tbody>
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
  siteMode: state.special.siteMode,
  theme: state.special.theme,
})

export default compose(
  connect(mapStateToProps, {
    changeButtonTitle,
    changeSceduleItemKey,
    initialButtonTitle,
    setTodaySceduleItem,
  })
)(Seans)
// )(React.memo(Seans))
