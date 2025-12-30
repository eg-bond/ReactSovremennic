import { SlideType } from './types';
import { BaseSlide } from './BaseSlide';
import { SUSHI_BAR_URL } from '@/utils/constants';

export const AfishaSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Modal,
      modalImage: {
        src: '/Images/karaoke_afisha.webp',
        alt: 'Афиша мероприятий Январь (крупным планом)',
      },
    }}
    alt="Афиша мероприятий Январь"
    imgSrc="/Images/karaoke_afisha.webp"
    tabIndex={2}
  />
);

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

export const LottenSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.External,
      path: 'https://lotten.ru',
    }}
    alt="lotten кадастровые услуги"
    imgSrc="Images/lotten_adv.webp"
    tabIndex={2}
  />
);
