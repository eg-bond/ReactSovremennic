import { memo, useEffect, useState } from 'react'
import { MobileSeanceNavigation } from './MobileSeanceNavigation'
import schedule from './schedule'
import { useCallback } from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import BarSlider from '../../Template/BarSlider'
import type { DateKeysT } from '../../REDUX/seance/seanceReducerT'
import { CreateSeanceButtons } from './seanceComponents/CreateSeanceButtons'
import { TableContent } from './seanceComponents/TableContent'
import { trDuration } from '../Sushi/sushiHelpers'
import { useSeanceState } from './useSeanceState'

const Seance = memo<{ isMobile: boolean }>(function Seance({ isMobile }) {
  const {
    siteMode,
    datesArr,
    buttonTitle,
    activeScheduleItemKey,
    setTodayScheduleItem,
    changeScheduleItem,
  } = useSeanceState()

  const [tableVisible, switchVisibility] = useState(true)

  const changeTableContent = useCallback(
    (key: DateKeysT, title: string) => {
      if (key !== activeScheduleItemKey) {
        switchVisibility(false)
        setTimeout(() => {
          changeScheduleItem(key, title)
          switchVisibility(true)
        }, trDuration)
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
            changeTableContent={changeTableContent}
          />
        </div>
      )}

      <div className={`${tableVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
        <table className='seanse__table'>
          <TableContent
            activeScheduleItemKey={activeScheduleItemKey}
            schedule={schedule}
          />
        </table>
      </div>

      <div className='separatorMobile separatorMobile--index' />
      <BarSlider />

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <IndexAdvXS />}
    </div>
  )
})

export default Seance

export type ChangeTableContentT = (key: DateKeysT, title: string) => void
