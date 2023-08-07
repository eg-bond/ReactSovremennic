import { useRef, useState, useEffect, useCallback } from 'react'
import { scrollToNavbar } from '../sushiHelpers'
import { useMotionValue } from 'framer-motion'
import type { SushiT } from '../sushiT'
import { useWindowWidth } from '../../../hooks/useWindowWidth'
import SushiMobileNav from './SeanceMobileNav'
import { DateKeysT, SeanceStateT } from '../../REDUX/seance/seanceReducerT'
import { ChangeTableContentT } from './Seance'

export const SushiMobileNavContainer = ({
  activeScheduleItemKey,
  datesArr,
  buttonTitle,
  changeTableContent,
  contentRef,
}: {
  activeScheduleItemKey: SeanceStateT['activeScheduleItemKey']
  buttonTitle: string
  datesArr: SeanceStateT['datesArr']
  changeTableContent: ChangeTableContentT
  contentRef: React.RefObject<HTMLDivElement>
}) => {
  // adds class "changing" with transition style to slider for smooth animation
  const [isChanging, setIsChanging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const constraintRef = useRef<HTMLDivElement>(null)
  const hrRef = useRef<HTMLHRElement>(null)
  const x = useMotionValue(0)
  // window.innerWidth
  const { width } = useWindowWidth()

  const margins = 14

  useEffect(() => {
    scrollToNavbar(contentRef, hrRef)
  }, [])

  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      dateKey: DateKeysT,
      title: string,
      ref: React.RefObject<HTMLDivElement>
    ) => {
      setIsChanging(true)

      const target = e.target as HTMLButtonElement
      const scrollWidth = ref.current?.scrollWidth
      // x coordinate for active item to be in the middle of the screen
      const translateEdge = (width - target.offsetWidth - margins) / 2
      // required translateX css prop
      const translateX = target.offsetLeft - translateEdge

      if (!scrollWidth) return

      if (translateX > 0) {
        if (translateX < scrollWidth - width) x.set(-translateX)
        else x.set(-(scrollWidth - width + margins))
      }
      if (translateX < 0) {
        x.set(0)
      }

      setTimeout(() => setIsChanging(false), 300)
      changeTableContent(dateKey, title)

      scrollToNavbar(contentRef, hrRef)
    },
    [width, changeTableContent, x, contentRef]
  )

  return (
    <SushiMobileNav
      x={x}
      constraintRef={constraintRef}
      sliderRef={sliderRef}
      hrRef={hrRef}
      isChanging={isChanging}
      activeScheduleItemKey={activeScheduleItemKey}
      datesArr={datesArr}
      handleClick={handleClick}
    />
  )
}

export default SushiMobileNavContainer
