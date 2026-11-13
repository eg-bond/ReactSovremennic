import { SlideType } from './types';
import { reels } from '@/data/reels';
import { BaseSlide } from './BaseSlide';
import { SUSHI_BAR_URL } from '@/utils/constants';

export const SushiSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Internal,
      path: SUSHI_BAR_URL,
    }}
    alt="бар"
    imgSrc="/Images/sushi_adv.webp"
    tabIndex={2}
  />
);

export const KaraokeVidsSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.VideoModal,
      videos: reels,
    }}
    alt="Видео с караоке бара"
    imgSrc="/Images/karaoke_vids.jpg"
    tabIndex={2}
  />
);

export const SushiCutsSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Modal,
      modalImage: {
        src: '/Images/sushi_cuts_big.webp',
        alt: 'Скидки в Баре КИН-НО (крупным планом)',
      },
    }}
    alt="Скидки в Баре КИН-НО"
    imgSrc="/Images/sushi_cuts.webp"
    tabIndex={2}
  />
);

export const KaraokeAfishaSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Modal,
      modalImage: {
        src: '/Images/disco.jpg',
        alt: 'Караоке афиша - ноябрь (крупным планом)',
      },
    }}
    alt="Караоке афиша - ноябрь"
    imgSrc="/Images/disco.jpg"
    tabIndex={2}
  />
);
