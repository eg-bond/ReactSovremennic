import { memo } from 'react'
import type { SushiImageT } from '../sushiT'
import SushiSliders from './SushiSliders'
import { sushiImgSrc, sushiNew } from '../sushiHelpers'
import { sushiElems } from '../sushiHelpers'

// const SushiImage = memo<SushiImageT>(function SushiImage({
//   currentImgKey,
//   imgVisible,
//   onLoad,
// }) {
//   if (currentImgKey in sushiElems.slidersKeys) {
//     return (
//       <SushiSliders
//         //@ts-ignore
//         sliderKey={currentImgKey}
//         imgVisible={imgVisible}
//         onLoad={onLoad}
//       />
//     )
//   }

//   return (
//     <div className={`${imgVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
//       <img
//         key={currentImgKey}
//         onLoad={onLoad}
//         className={'sushi_page__img'}
//         src={sushiImgSrc(currentImgKey)}
//         alt={currentImgKey}
//       />
//     </div>
//   )
// })

const SushiImage = memo<SushiImageT>(function SushiImage({
  currentImgKey,
  imgVisible,
  onLoad,
}) {
  return (
    <div className='sushiGrid'>
      {sushiNew[currentImgKey].map(item => (
        <div className='sushiGrd__item'>
          <img
            className='sushiGrid__img'
            src={'/Images/sushi_item.webp'}
            alt='item'
          />
          <div className='sushiGrid__desc'>
            <div className='sushiGrid__title'>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
            </div>
            <p>{item.ingridients}</p>
          </div>
        </div>
      ))}
    </div>
  )
})

export default SushiImage
