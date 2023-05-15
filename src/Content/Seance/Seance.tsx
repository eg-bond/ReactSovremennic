import { memo, useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import {
  changeScheduleItem_AC,
  setTodayScheduleItem_AC,
} from '../../REDUX/seance/seanceReducer'
import Grow from '@material-ui/core/Grow'
import schedule from './schedule'
import { useCallback } from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import BarSwiper from '../../Template/BarSwiper'
import { useAppDispatch, useAppSelector } from '../../REDUX/store'
import type { DateKeysT } from '../../REDUX/seance/seanceReducerT'
import { CreateSeanceButtons } from './seanceComponents/CreateSeanceButtons'
import { TableContent } from './seanceComponents/TableContent'

// Grow animation time variable
let trDurationSeance = 0

const Seance = memo<SeancePropsT>(function Seance({ isMobile, siteMode }) {
  //------------------------------------------------------------------
  const { datesArr } = useAppSelector(state => state.seance)
  const { buttonTitle } = useAppSelector(state => state.seance)
  const { activeScheduleItemKey } = useAppSelector(state => state.seance)
  const dispatch = useAppDispatch()

  const setTodayScheduleItem = useCallback(() => {
    dispatch(setTodayScheduleItem_AC())
  }, [])

  const changeScheduleItem = useCallback((key: DateKeysT, title: string) => {
    dispatch(changeScheduleItem_AC({ key, title }))
  }, [])
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
  }, [])

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

type SeancePropsT = {
  isMobile: boolean
  //special reducer
  siteMode: string
}
export type ChangeTableContentT = (key: DateKeysT, title: string) => void
