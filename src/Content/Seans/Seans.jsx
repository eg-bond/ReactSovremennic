import React, { useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  changeActiveKey,
  changeButtonTitle,
  initialActiveKey,
  initialButtonTitle,
} from '../../REDUX/seansReduser'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { SeansTableContent } from './CreateTable'
import { themeClasses } from '../../helpers'
import Grow from '@material-ui/core/Grow'

let tableContent = SeansTableContent()
let finalTableContent = [...tableContent]

const Seans = React.memo(
  ({
    initialActiveKey,
    initialButtonTitle,
    Q,
    siteMode,
    theme,
    activeKey,
    ...props
  }) => {
    const [tableVisible, switchVisibility] = useState(true)
    const themeCl = themeClasses(theme)

    const switchSeanstable = (key, title) => {
      if (key !== activeKey) {
        switchVisibility(false)
        setTimeout(() => {
          props.changeButtonTitle(title)
          props.changeActiveKey(key)
          switchVisibility(true)
        }, 200)
      }
    }

    useEffect(() => {
      return () => {
        initialActiveKey()
        initialButtonTitle()
      }
    }, [initialActiveKey, initialButtonTitle])

    return (
      <div className=''>
        {/* <div className='col-lg-9 col-md-9 col-sm-9'> */}
        {Q.desktop && (
          <div
            className={`seans-menu ${
              siteMode === 'special' ? themeCl.navs : ''
            } `}>
            <div className='seans-tabs'>
              {props.datesArr.map(d => (
                <button
                  key={d[0] + 'd11'}
                  className={`fill_button ${
                    activeKey === d[0] ? 'active' : ''
                  }`}
                  onClick={() => switchSeanstable(d[0], `${d[1]} ${d[2]}`)}>
                  {d[1]} <br /> {d[2]}
                </button>
              ))}
            </div>
          </div>
        )}

        {Q.mobile && (
          <div className='sushi_menu_xs'>
            <MobileSeanceNavigation
              activeKey={activeKey}
              datesArr={props.datesArr}
              buttonTitle={props.buttonTitle}
              changeButtonTitle={props.changeButtonTitle}
              changeActiveKey={props.changeActiveKey}
              switchVisibility={switchVisibility}
            />
          </div>
        )}

        <Grow in={tableVisible} timeout={200}>
          <div>
            <table className='table_custom'>
              <tbody>
                <tr className={`table_head`}>
                  <th>Сеанс</th>
                  <th>Фильм</th>
                  <th>Цена, руб</th>
                </tr>
                {finalTableContent[activeKey.slice(3)]}
              </tbody>
            </table>
          </div>
        </Grow>

        <div className='separator-special' />
      </div>
    )
  }
)

let mapStateToProps = state => ({
  datesArr: state.seansPage.actualDatesArr,
  activeKey: state.seansPage.activeKey,
  buttonTitle: state.seansPage.buttonTitle,
  siteMode: state.special.siteMode,
  theme: state.special.theme,
})

export default compose(
  connect(mapStateToProps, {
    changeButtonTitle,
    changeActiveKey,
    initialButtonTitle,
    initialActiveKey,
  })
)(Seans)
