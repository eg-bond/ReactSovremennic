import { memo, useState } from 'react'
import { animationDelay, sushiState } from '../sushiHelpers'
import type { SushiItemsT } from '../sushiT'

const SushiItems = memo<SushiItemsT>(function SushiImage({ currentImgKey }) {
  return (
    <div className={`sushi_page__content`}>
      <div className='sushiGrid'>
        {sushiState[currentImgKey].map((item, i) => (
          <div
            key={currentImgKey + i}
            className={`sushiGrid__item fadeInDown`}
            style={{ animationDelay: animationDelay(0.05, i) }}>
            <SushiImg picSrc={item.pic} alt={item.name} />
            <div className='sushiGrid__desc'>
              <div>
                <h3>{item.name}</h3>
                {!!item.recipe && <p>{item.recipe}</p>}
              </div>
              <h3>{`${item.price} ₽`}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

const SushiImg = ({ picSrc, alt }: { picSrc: string; alt: string }) => {
  const [loaded, setloaded] = useState(false)

  return (
    <div className={`sushiGrid__imgCont ${loaded ? '' : 'loading'}`}>
      <img
        onLoad={() => setloaded(true)}
        className='sushiGrid__img'
        src={picSrc}
        alt={alt}
      />
    </div>
  )
}

export default SushiItems
