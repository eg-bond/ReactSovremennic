import { useCallback, useEffect, useRef, useState } from 'react'
import { menuButtons } from '../sushiHelpers'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import type { SushiElemsT } from '../sushiT'
import {
  motion,
  useMotionValue,
  useDragControls,
  useTransform,
  useMotionValueEvent,
  useAnimate,
} from 'framer-motion'

window.slider = document.querySelector('.sushiSlider')

export const SushiSliders = ({
  currentImgKey,
  changeImage,
}: {
  sliderKey: keyof SushiElemsT['slidersKeys']
  imgVisible: boolean
  onLoad: () => void
}) => {
  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    setWidth(
      containerRef.current.scrollWidth - containerRef.current.offsetWidth
    )
  }, [])
  const x = useMotionValue(0)

  // useMotionValueEvent(x, 'animationStart', () => {
  //   console.log('animation started on x')
  // })

  // useMotionValueEvent(x, 'change', latest => {
  //   console.log('x changed to', latest)
  // })

  const [scope, animate] = useAnimate()
  const [trans, setTrans] = useState(-100)
  const handleClick = (e, item) => {
    const left = e.pageX
    const offLeft = e.target.offsetLeft
    const widthEl = e.target.offsetWidth
    const widthW = window.innerWidth

    const scrollWidth = e.target.offsetParent.scrollWidth

    const diff = scrollWidth - offLeft

    const maxTranslate = scrollWidth - widthW

    const translateEdge = (widthW - widthEl) / 2
    const translate = offLeft - translateEdge
    console.log(e)

    console.log(
      'left: ',
      left,
      'offLeft: ',
      offLeft,
      'widthW: ',
      widthW,
      'widthEl: ',
      widthEl,
      'scrollWidth: ',
      scrollWidth,
      'diff: ',
      diff,
      'maxTranslate: ',
      maxTranslate,
      'translate: ',
      translate
    )
    // console.log(e)
    if (translate < maxTranslate) {
      x.set(-translate)
    }
    // setTrans(trans - 100)
    // animate(scope.current, { translateX: trans })
    // console.log(e.target.offsetParent.scrollWidth)
    // console.log(e.target.offsetParent.scrollWidth)
    // sliderRef.current.style.transform = 'translateX(-200px) !important'
    // console.log(sliderRef.current.style.translateX)

    changeImage(item)
  }

  return (
    <motion.div className='sushiSlider__container' ref={containerRef}>
      <button onClick={() => x.set(0)}>opacity</button>
      <motion.div
        style={{ x }}
        // ref={sliderRef}
        ref={scope}
        drag='x'
        dragConstraints={{ right: -trans - 100, left: -width - trans - 100 }}
        className='sushiSlider'
        // animate={{ translateX: '-100px' }}
      >
        {menuButtons.map((item, i) => (
          <button
            key={item[0] + 'btn'}
            className={`sushiSlider__item ${
              currentImgKey === item[0] ? 'active' : ''
            }`}
            onClick={e => handleClick(e, item[0])}>
            {item[1].toUpperCase()}
          </button>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default SushiSliders
