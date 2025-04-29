import { SlideType } from './types';
import { BaseSlide } from './BaseSlide';

export const AfishaSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Modal,
      modalImage: {
        src: '/Images/afisha_may_big.webp',
        alt: 'Афиша мероприятий Май (крупным планом)',
      },
    }}
    alt="Афиша мероприятий Май"
    imgSrc="/Images/afisha_may.webp"
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

export const SpringSalesSlide = () => (
  <BaseSlide
    link={{
      type: SlideType.Internal,
      path: '/sushi',
    }}
    alt="Весенние скидки в баре КИН-НО"
    imgSrc="Images/spring_sales.webp"
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
