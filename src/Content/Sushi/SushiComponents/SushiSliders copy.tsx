import { useCallback, useEffect, useRef, useState } from 'react'
import { menuButtons } from '../sushiHelpers'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import type { SushiElemsT } from '../sushiT'

let activeDrag = false,
  prevPageX,
  prevScrollLeft

const dragStart = (e, ref) => {
  activeDrag = true
  prevPageX = e.pageX || e.touches[0].pageX
  prevScrollLeft = ref.current.scrollLeft
}

const dragging = (e, ref) => {
  if (!activeDrag) return
  e.preventDefault()
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
  ref.current.scrollLeft = prevScrollLeft - positionDiff
}

const dragStop = () => {
  activeDrag = false
}

export const SushiSliders = ({
  sliderKey,
  imgVisible,
  onLoad,
}: {
  sliderKey: keyof SushiElemsT['slidersKeys']
  imgVisible: boolean
  onLoad: () => void
}) => {
  const navbarRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [prevPageXS, setPrevPageX] = useState(undefined)
  const [prevScrollLeftS, setPrevScrollLeft] = useState(undefined)

  const dragInProg = useCallback((e, ref) => {
    if (!isDragging) return
    e.preventDefault()
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageXS
    ref.current.scrollLeft = prevScrollLeftS - positionDiff
  }, [])

  const startDrag = (e, ref) => {
    setIsDragging(true)
    setPrevPageX(e.pageX || e.touches[0].pageX)
    setPrevScrollLeft(ref.current.scrollLeft)
  }
  const stopDrag = () => {
    setIsDragging(false)
  }
  const scrollLeft = () => {
    navbarRef.current.scrollLeft += 150
  }

  useEffect(() => {
    document.addEventListener('mousemove', e => dragInProg(e, navbarRef))
    document.addEventListener('mouseup', stopDrag)

    // document.addEventListener('mousemove', e => dragging(e, navbarRef))
    // document.addEventListener('mouseup', dragStop)

    document.addEventListener('touchmove', e => dragging(e, navbarRef))
    document.addEventListener('touchend', dragStop)
    // return () => {
    //   second
    // }
  }, [])

  return (
    <div>
      <div
        onMouseDown={e => startDrag(e, navbarRef)}
        onMouseMove={e => dragInProg(e, navbarRef)}
        onTouchStart={e => startDrag(e, navbarRef)}
        // onMouseDown={e => dragStart(e, navbarRef)}
        // onTouchStart={e => dragStart(e, navbarRef)}
        ref={navbarRef}
        className='sushiSlider'>
        {menuButtons.map((item, i) => (
          <div key={i + 'sas'} className='sushiSlider__item'>
            {item[1]}
          </div>
        ))}
      </div>
      <button onClick={scrollLeft}>scroll</button>
    </div>
  )
}

export default SushiSliders
