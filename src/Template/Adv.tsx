import { AdvSlider } from '@/components/Sliders';
import { LottenSlide, SushiSlide } from '@/components/Sliders/Slides';
import { SushiWorkModal } from './SushiWork';

const FIRST_SLIDER_SLIDES = [
  SushiSlide,
];
const SECOND_SLIDER_SLIDES = [
  LottenSlide,
];

export function DesktopAdv() {
  return (
    <div className="content__gridRightItem--1fr contentMT">
      <AdvSlider drag={false} slides={FIRST_SLIDER_SLIDES} type="slide" />

      <div style={{ marginTop: '1rem' }}>
        <AdvSlider drag={false} slides={SECOND_SLIDER_SLIDES} type="slide" />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <SushiWorkModal />
      </div>
    </div>
  );
}

export function MobileAdv() {
  return (
    <div className="container" data-testid="mobile_adv">
      <div className="indexAdvXS">
        <div className="indexAdvXS__item1">
          <AdvSlider slides={FIRST_SLIDER_SLIDES} />
        </div>

        <div className="indexAdvXS__item1_2">
          <AdvSlider slides={SECOND_SLIDER_SLIDES} />
        </div>
      </div>
    </div>
  );
}
