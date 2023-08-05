import { memo } from 'react'
import type { SushiImageT } from '../sushiT'
import SushiSliders from './SushiMobileNavigation'
import { sushiImgSrc } from '../sushiHelpers'
import { sushiElems } from '../sushiHelpers'

const SushiImage = memo<SushiImageT>(function SushiImage({
  currentImgKey,
  imgVisible,
  onLoad,
}) {
  if (currentImgKey in sushiElems.slidersKeys) {
    return (
      <SushiSliders
        //@ts-ignore
        sliderKey={currentImgKey}
        imgVisible={imgVisible}
        onLoad={onLoad}
      />
    )
  }

  return (
    <div className={`${imgVisible ? 'fadeInUp' : 'fadeOutDown'}`}>
      <img
        key={currentImgKey}
        onLoad={onLoad}
        className={'sushi_page__img'}
        src={sushiImgSrc(currentImgKey)}
        alt={currentImgKey}
      />
    </div>
  )
})

export default SushiImage
