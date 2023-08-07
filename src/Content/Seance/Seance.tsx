import { memo, useEffect, useState } from 'react'
import schedule from './schedule'
import { useCallback } from 'react'
import IndexAdvXS from '../../Template/IndexAdvXS'
import BarSlider from '../../Template/BarSlider'
import type { DateKeysT } from '../../REDUX/seance/seanceReducerT'
import { CreateSeanceButtons } from './seanceComponents/CreateSeanceButtons'
import { TableContent } from './seanceComponents/TableContent'
import { useSeanceState } from '../../REDUX/stateHooks/useSeanceState'
import { SushiWork } from '../../Template/SushiWork'
import SeanceMobileNavContainer from './SeanceMobileNavContainer'

const Seance = memo<{ isMobile: boolean }>(function Seance({ isMobile }) {
  const {
    siteMode,
    datesArr,
    activeScheduleItemKey,
    setTodayScheduleItem,
    changeScheduleItem,
  } = useSeanceState()

  const [tableVisible, switchVisibility] = useState(true)

  const changeTableContent = useCallback(
    (key: DateKeysT) => {
      if (key !== activeScheduleItemKey) {
        if (isMobile) {
          changeScheduleItem(key)
        } else {
          switchVisibility(false)
          setTimeout(() => {
            changeScheduleItem(key)
            switchVisibility(true)
          }, 200)
        }
      }
    },
    [activeScheduleItemKey, changeScheduleItem, isMobile]
  )

  // Switches the schedule item to todays when user leaves Seance page
  useEffect(() => {
    return () => {
      setTodayScheduleItem()
    }
  }, [])

  if (!activeScheduleItemKey) return

  return (
    <div className='content__gridLeftItem--3fr seance'>
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
          <SeanceMobileNavContainer
            activeScheduleItemKey={activeScheduleItemKey}
            datesArr={datesArr}
            changeTableContent={changeTableContent}
          />
        </div>
      )}

      <table
        className={`seanse__table ${
          tableVisible ? 'fadeInUp' : 'fadeOutDown'
        }`}>
        <TableContent
          activeScheduleItemKey={activeScheduleItemKey}
          schedule={schedule}
        />
      </table>

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <SushiWork />}

      <div className='separatorMobile separatorMobile--index' />
      <BarSlider />

      <div className='separatorMobile separatorMobile--index' />
      {isMobile && <IndexAdvXS />}
    </div>
  )
})

export default Seance

export type ChangeTableContentT = (key: DateKeysT) => void
