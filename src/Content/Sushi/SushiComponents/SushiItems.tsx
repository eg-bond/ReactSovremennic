import { memo, useState } from 'react'
import { animationDelay, sushiState } from '../sushiHelpers'
import type { SushiT } from '../sushiT'

const SushiItems = memo(function SushiItems({
  currentImgKey,
}: {
  currentImgKey: SushiT['currentImgKey']
}) {
  return (
    <div className='sushi_page__grid'>
      {sushiState[currentImgKey].map((item, i) => (
        <div
          key={currentImgKey + i}
          className={`sushi_page__gridItem fadeInDown`}
          style={{ animationDelay: animationDelay(0.05, i) }}>
          <SushiImg picSrc={item.pic} alt={item.name} />
          <div className='sushi_page__desc'>
            <div>
              <h3>{item.name}</h3>
              {!!item.recipe && <p>{item.recipe}</p>}
            </div>
            <h3>{`${item.price} ₽`}</h3>
          </div>
        </div>
      ))}
    </div>
  )
})

const SushiImg = ({ picSrc, alt }: { picSrc: string; alt: string }) => {
  const [loaded, setloaded] = useState(false)

  return (
    <div className={`sushi_page__imgCont ${loaded ? '' : 'loading'}`}>
      <img
        onLoad={() => setloaded(true)}
        className='sushi_page__img'
        src={picSrc}
        alt={alt}
      />
    </div>
  )
}

export default SushiItems
