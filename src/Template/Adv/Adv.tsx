import { AdvSlider } from '@/components/Sliders';
import { LottenSlide, SushiSlide } from '@/components/Sliders/Slides';
import { SushiWorkModal } from '../SushiWork';
import * as s from './Adv.css';

const FIRST_SLIDER_SLIDES = [SushiSlide];
const SECOND_SLIDER_SLIDES = [LottenSlide];

export function DesktopAdv() {
  return (
    <div className={s.desktopAdvWrapper}>
      <AdvSlider slides={FIRST_SLIDER_SLIDES} type="slide" />

      <div className={s.advMarginTop}>
        <AdvSlider slides={SECOND_SLIDER_SLIDES} type="slide" />
      </div>

      <div className={s.advMarginTop}>
        <SushiWorkModal />
      </div>
    </div>
  );
}

export function MobileAdv() {
  return (
    <div className="container" data-testid="mobile_adv">
      <div className={s.mobileAdvGrid}>
        <div className={s.mobileAdvItem1}>
          <AdvSlider slides={FIRST_SLIDER_SLIDES} />
        </div>

        <div className={s.mobileAdvItem2}>
          <AdvSlider slides={SECOND_SLIDER_SLIDES} />
        </div>
      </div>
    </div>
  );
}
