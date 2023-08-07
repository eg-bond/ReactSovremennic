import { motion } from 'framer-motion'
import { SushiMobileNavT } from '../sushiT'
import { menuButtons } from '../sushiHelpers'

const SushiMobileNav = ({
  x,
  constraintRef,
  sliderRef,
  hrRef,
  isChanging,
  currentImgKey,
  handleClick,
}: SushiMobileNavT) => {
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
      </div>
      <hr ref={hrRef} className='sushiMobileNav__anchor'></hr>
    </>
  )
}

export default SushiMobileNav
