import { memo } from 'react';
import type { SpecialDispatchesT } from '@/REDUX/special/specialReducerT';
import * as s from './SpecialSettings.css.ts';

const ImgSwitcherComp = ({ imgHidden, switchImagesVisibility }: {
  imgHidden: boolean;
  switchImagesVisibility: SpecialDispatchesT['switchImagesVisibility'];
}) => {
  const handleImgSwitch = () =>
    imgHidden ? switchImagesVisibility(false) : switchImagesVisibility(true);

  const handlePress = (e: React.KeyboardEvent) =>
    e.key === 'Enter' && handleImgSwitch();

  return (
    <div className={s.flexItem}>
      <div className={s.flexTitle}>ИЗОБРАЖЕНИЯ</div>
      <div className={s.switchWrapper}>
        <label className={s.switchLabel}>
          <span
            className={`${s.switchSlider} ${imgHidden ? s.switchSliderPressed : ''}`}
            role="button"
            tabIndex={0}
            onClick={handleImgSwitch}
            onKeyDown={handlePress}
          />
        </label>
      </div>
    </div>
  );
};

export const ImgSwitcher = memo(ImgSwitcherComp);
