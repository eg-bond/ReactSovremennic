import { memo, useState } from 'react';
import { sushiState } from '../sushiState';
import { animationDelay } from '../sushiHelpers';
import type { SushiT } from '../sushiT';

const SushiItems = memo(function SushiItems({
  currentImgKey,
}: {
  currentImgKey: SushiT['currentImgKey'];
}) {
  return (
    <div className="sushi_page__grid">
      {sushiState[currentImgKey].map((item, i) => (
        <div
          className="sushi_page__gridItem fadeInDown"
          key={currentImgKey + i}
          style={{ animationDelay: animationDelay(0.05, i) }}
        >
          <SushiImg alt={item.name} picSrc={item.pic} />
          <div className="sushi_page__desc">
            <div>
              <h3>{item.name}</h3>
              {!!item.recipe && <p>{item.recipe}</p>}
            </div>
            <h3>{`${item.price} ₽`}</h3>
          </div>
        </div>
      ))}
    </div>
  );
});

const SushiImg = ({ picSrc, alt }: {
  alt: string; picSrc: string;
}) => {
  const [loaded, setloaded] = useState(false);

  return (
    <div className={`sushi_page__imgCont ${loaded ? '' : 'loading'}`}>
      <img
        alt={alt}
        className="sushi_page__img"
        src={picSrc}
        onLoad={() => setloaded(true)}
      />
    </div>
  );
};

export default SushiItems;
