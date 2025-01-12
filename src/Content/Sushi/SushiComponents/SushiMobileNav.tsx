import { motion } from 'framer-motion';
import { SushiMobileNavT } from '../sushiT';
import { menuButtons } from '../sushiState';

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
      <div className="sushiMobileNav__container--back">
        <div className="sushiMobileNav__container" ref={constraintRef}>
          <motion.div
            className={`sushiMobileNav ${isChanging ? 'changing' : ''}`}
            drag="x"
            dragConstraints={constraintRef}
            ref={sliderRef}
            style={{ x }}
          >
            {menuButtons.map(item => (
              <button
                className={`sushiMobileNav__item ${
                  currentImgKey === item[0] ? 'active' : ''
                }`}
                key={item[0] + '_sbtn'}
                onClick={e => handleClick(e, item[0], sliderRef)}
              >
                {item[1]}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
      <hr className="sushiMobileNav__anchor" ref={hrRef}></hr>
    </>
  );
};

export default SushiMobileNav;
