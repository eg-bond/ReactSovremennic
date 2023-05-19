import { memo } from 'react'
import type { SushiImageT } from '../sushiT'
import SushiSliders from './SushiSliders'
import { sushiImgSrc } from '../sushiHelpers'
import { sushiElems } from '../sushiHelpers'

const SushiImage = memo<SushiImageT>(function SushiImage({
  currentImgKey,
  imgVisible,
  clearPBTimeout,
  showProgressBar,
}) {
  const onLoad = () => {
    showProgressBar(false)
    clearPBTimeout()
  }

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
        onLoad={onLoad}
        className={'sushi__page__img'}
        src={sushiImgSrc(currentImgKey)}
        alt={currentImgKey}
      />
    </div>
  )
})

export default SushiImage
