import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SeanceStateT } from '../../../REDUX/seance/seanceReducerT'
import type { MotionValue } from 'framer-motion'

const SeanceMobileNav = ({
  x,
  constraintRef,
  sliderRef,
  hrRef,
  isChanging,
  datesArr,
  activeScheduleItemKey,
  handleClick,
}: SeanceMobileNavT) => {
  useEffect(() => {
    const activeBtn = document.querySelector(
      `#${activeScheduleItemKey}_seBtn`
    ) as HTMLButtonElement

    if (activeBtn) activeBtn.click()
  }, [])

  return (
    <>
      <div className='sushiMobileNav__container--back'>
        <div ref={constraintRef} className='sushiMobileNav__container'>
          <motion.div
            style={{ x }}
            ref={sliderRef}
            drag='x'
            dragConstraints={constraintRef}
            className={`sushiMobileNav ${isChanging ? 'changing' : ''}`}>
            {datesArr.map(item => (
              <button
                id={item[0] + '_seBtn'}
                key={item[0] + '_seBtn'}
                className={`sushiMobileNav__item ${
                  activeScheduleItemKey === item[0] ? 'active' : ''
                }`}
                onClick={e => handleClick(e, item[0], sliderRef)}>
                {`${item[1]} ${item[2]}`}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
      <hr ref={hrRef} className='sushiMobileNav__anchor'></hr>
    </>
  )
}

export default SeanceMobileNav

type SeanceMobileNavT = {
  x: MotionValue<number>
  constraintRef: React.RefObject<HTMLDivElement>
  sliderRef: React.RefObject<HTMLDivElement>
  hrRef: React.RefObject<HTMLHRElement>
  isChanging: boolean
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  datesArr: SeanceStateT['datesArr']
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    dateKey: SeanceStateT['datesArr'][0][0],
    ref: React.RefObject<HTMLDivElement>
  ) => void
}
