import { memo } from 'react';
import type { SpecialDispatchesT } from '../../REDUX/special/specialReducerT';

const ImgSwitcherComp = ({ imgHidden, switchImagesVisibility }: {
  imgHidden: boolean;
  switchImagesVisibility: SpecialDispatchesT['switchImagesVisibility'];
}) => {
  const handleImgSwitch = () =>
    imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true);

  const handlePress = (e: React.KeyboardEvent) =>
    e.key === 'Enter' && handleImgSwitch();

  return (
    <div className="specialSettings__flex__item">
      <div className="specialSettings__flex__title">ИЗОБРАЖЕНИЯ</div>
      <div className="switch">
        <label className="switch__label">
          <span
            className={`switch__slider ${
              imgHidden ? 'switch__slider--pressed' : ''
            }`}
            role="button"
            tabIndex={0}
            onClick={handleImgSwitch}
            onKeyDown={handlePress}
          >
          </span>
        </label>
      </div>
    </div>
  );
};

export const ImgSwitcher = memo(ImgSwitcherComp);
