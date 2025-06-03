import { SlideType } from './types';
import { BaseSlide } from './BaseSlide';

export const AfishaSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Modal,
      modalImage: {
        src: '/Images/afisha_june_big.webp',
        alt: 'Афиша мероприятий Июнь (крупным планом)',
      },
    }}
    alt="Афиша мероприятий Июнь"
    imgSrc="/Images/afisha_june.webp"
    tabIndex={2}
  />
);

export const SushiSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Internal,
      path: '/sushi',
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
