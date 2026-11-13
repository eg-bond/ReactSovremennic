import { AdvSlider } from '@/components/AdvSlider';
import { SushiWorkModal } from '@/components/SushiWork';
import { SeparatorMobile } from '@/components/SeparatorMobile';
import { KaraokeVidsSlide, KaraokeAfishaSlide, SushiSlide } from '@/components/AdvSlider/Slides';
import * as s from './Adv.css';

const FIRST_SLIDER_SLIDES = [SushiSlide];
const SECOND_SLIDER_SLIDES = [KaraokeAfishaSlide];
const THIRD_SLIDER_SLIDES = [KaraokeVidsSlide];

export function DesktopAdv() {
  return (
    <div className={s.desktopAdvWrapper}>

      <AdvSlider slides={SECOND_SLIDER_SLIDES} type="slide" />

      <div className={s.advMarginTop}>
        <AdvSlider aspectRatio="16/9" slides={THIRD_SLIDER_SLIDES} type="slide" />
      </div>

      <div className={s.advMarginTop}>
        <AdvSlider slides={FIRST_SLIDER_SLIDES} type="slide" />
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

      <SeparatorMobile variant="index" />

      <div className={s.advMarginTop} style={{ marginBottom: '2vw' }}>
        <AdvSlider aspectRatio="16/9" slides={THIRD_SLIDER_SLIDES} type="slide" />
      </div>

    </div>
  );
}
