import { useRef, useState } from 'react'
import { menuButtons } from '../sushiHelpers'
import { motion, useMotionValue } from 'framer-motion'
import type { SushiT } from '../sushiT'

export const SushiMobileNavigation = ({
  currentImgKey,
  changeImage,
}: {
  currentImgKey: SushiT['currentImgKey']
  changeImage: SushiT['changeImage']
}) => {
  const [isChanging, setIsChanging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const constraintRef = useRef(null)
  const x = useMotionValue(0)
  const margins = 14

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imgKey: SushiT['currentImgKey'],
    ref: React.MutableRefObject<HTMLDivElement>
  ) => {
    setIsChanging(true)

    const width = window.innerWidth
    const target = e.target as HTMLButtonElement
    const btnWidth = target.offsetWidth
    const scrollWidth = ref.current.scrollWidth

    const translateEdge = (width - btnWidth - margins) / 2
    const translateX = target.offsetLeft - translateEdge

    if (translateX > 0) {
      if (translateX < scrollWidth - width) x.set(-translateX)
      else x.set(-(scrollWidth - width + margins))
    }
    if (translateX < 0) {
      x.set(0)
    }

    setTimeout(() => setIsChanging(false), 300)

    changeImage(imgKey)
    const content = document.querySelector('.sushi_page__content')
    const hr = document.querySelector('.sushiMobileNav__anchor')

    const contentY = content?.getClientRects()[0].y
    const hrY = hr?.getClientRects()[0].y

    if (contentY !== undefined && hrY !== undefined) {
      window.scrollBy(0, -(hrY - contentY))
    }
  }

  return (
    <>
      <div ref={constraintRef} className='sushiMobileNav__container'>
        <motion.div
          style={{ x }}
          ref={sliderRef}
          drag='x'
          dragConstraints={constraintRef}
          className={`sushiMobileNav ${isChanging ? 'changing' : ''}`}>
          {menuButtons.map(item => (
            <button
              key={item[0] + '_sbtn'}
              className={`sushiMobileNav__item ${
                currentImgKey === item[0] ? 'active' : ''
              }`}
              onClick={e => handleClick(e, item[0], sliderRef)}>
              {item[1]}
            </button>
          ))}
        </motion.div>
      </div>
      <hr className='sushiMobileNav__anchor'></hr>
    </>
  )
}

export default SushiMobileNavigation
