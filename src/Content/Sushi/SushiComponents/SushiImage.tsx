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

const delay = (index: number) => {
  return (0.05 * index).toString() + 's'
}

const SushiImage = memo<SushiImageT>(function SushiImage({
  currentImgKey,
  imgVisible,
  onLoad,
}) {
  return (
    <div className='sushiGrid'>
      {sushiNew[currentImgKey].map((item, i) => (
        <div
          key={currentImgKey + i}
          className={`sushiGrid__item fadeInDown`}
          style={{ animationDelay: delay(i) }}>
          <img className='sushiGrid__img' src={item.picture} alt='item' />
          <div className='sushiGrid__desc'>
            <h3>{item.name}</h3>
            {!!item.ingridients && <p>{item.ingridients}</p>}
            <h3>{`${item.price}₽`}</h3>
          </div>
        </div>
      ))}
    </div>
  )
})

export default SushiImage
