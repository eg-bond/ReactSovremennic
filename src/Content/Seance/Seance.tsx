import { memo, useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  DateKeysT,
  changeScheduleItem_A,
  setTodayScheduleItem_A,
} from '../../REDUX/seanceReducer'
import Grow from '@material-ui/core/Grow'
import schedule, { ScheduleT } from './schedule'
import { useCallback } from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import BarSwiper from '../../Template/BarSwiper'
import { modifiedClass } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../REDUX/store'

const desktopBtn = (
  d: [DateKeysT, string, string],
  activeScheduleItemKey: CSB_T['activeScheduleItemKey'],
  changeTableContent: CSB_T['changeTableContent']
) => {
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

export interface CSB_T {
  datesArr: Array<[DateKeysT, string, string]>
  activeScheduleItemKey: DateKeysT | ''
  changeTableContent: (key: DateKeysT, title: string) => void
  siteMode: string
}

const CreateSeanceButtons = memo(function CreateSeanceButtons({
  datesArr,
  activeScheduleItemKey,
  changeTableContent,
  siteMode,
}: CSB_T) {
  return (
    <div className={modifiedClass('seanse__buttons', siteMode)}>
      {datesArr.map(d =>
        desktopBtn(d, activeScheduleItemKey, changeTableContent)
      )}
    </div>
  )
})

const tableItem = (seance: Array<string | number>, i: number) => {
  return (
    <tr key={seance[0]} className={i % 2 === 0 ? 'table_gray' : 'table_white'}>
      <td>{seance[0]}</td>
      <td>{seance[1]}</td>
      <td>{seance[2]}</td>
      <td>{seance[3]}</td>
    </tr>
  )
}
type TableContentT = {
  schedule: ScheduleT
  activeScheduleItemKey: CSB_T['activeScheduleItemKey']
}

const TableContent = memo(function TableContent({
  schedule,
  activeScheduleItemKey,
}: TableContentT) {
  if (schedule[activeScheduleItemKey]) {
    return (
      <tbody>
        <tr className={`table_head`}>
          <th>Сеанс</th>
          <th>Фильм</th>
          <th>Возраст</th>
          <th>Цена, руб</th>
        </tr>
        {schedule[activeScheduleItemKey].map(tableItem)}
      </tbody>
    )
  }
  return null
})
// Grow animation time variable
let trDurationSeance = 0

type SeancePropsT = {
  isMobile: boolean
  siteMode: string
}

const Seance = memo(function Seance({ isMobile, siteMode }: SeancePropsT) {
  //------------------------------------------------------------------
  const { datesArr } = useAppSelector(state => state.seance)
  const { buttonTitle } = useAppSelector(state => state.seance)
  const { activeScheduleItemKey } = useAppSelector(state => state.seance)
  const dispatch = useAppDispatch()

  const setTodayScheduleItem = useCallback(() => {
    dispatch(setTodayScheduleItem_A())
  }, [dispatch])
  const changeScheduleItem = useCallback(
    (key: DateKeysT, title: string) => {
      dispatch(changeScheduleItem_A({ key, title }))
    },
    [dispatch]
  )
  //------------------------------------------------------------------

  const [tableVisible, switchVisibility] = useState(true)

  const changeTableContent = useCallback(
    (key: DateKeysT, title: string) => {
      if (key !== activeScheduleItemKey) {
        switchVisibility(false)
        setTimeout(() => {
          changeScheduleItem(key, title)
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
            schedule={schedule}
          />
        </table>
      </Grow>

      <div className='separatorMobile separatorMobile--index' />
      {siteMode === 'default' && <BarSwiper />}

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <IndexAdvXS />}
    </div>
  )
})

export default Seance
