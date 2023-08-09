import { memo } from 'react'
import type { CMB_T } from '../sushiT'
import { menuButtons } from '../sushiState'

const CreateMenuButtons = memo<CMB_T>(function CreateMenuButtons({
  currentImgKey,
  changeImage,
}) {
  return (
    <>
      {menuButtons.map(item => (
        <button
          key={item[0] + 'btn'}
          className={`fill_button ${currentImgKey === item[0] ? 'active' : ''}`}
          onClick={() => changeImage(item[0])}>
          {item[1].toUpperCase()}
        </button>
      ))}
    </>
  )
})

export default CreateMenuButtons
