import { memo } from 'react';
import { menuButtons } from '../sushiState';
import type { CMB_T } from '../sushiT';

const CreateMenuButtons = memo<CMB_T>(function CreateMenuButtons({ currentImgKey, changeImage }) {
  return (
    <>
      {menuButtons.map(item => (
        <button
          className={`fill_button ${currentImgKey === item[0] ? 'active' : ''}`}
          key={item[0] + 'btn'}
          onClick={() => changeImage(item[0])}
        >
          {item[1].toUpperCase()}
        </button>
      ))}
    </>
  );
});

export default CreateMenuButtons;
