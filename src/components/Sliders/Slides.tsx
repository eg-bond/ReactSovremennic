import { BaseSlide } from './BaseSlide';

export const AfishaSlide = () => (
  <BaseSlide
    alt="афиша"
    src="Images/afisha.webp"
  />
);

export const KaraokeSlide = () => (
  <BaseSlide
    link={{
      href: 'https://vk.com/sushikinno?z=photo-46510864_457242824%2Fd9d80b69328fbe3c52',
    }}
    alt="детское караоке"
    src="Images/child_caraoke.webp"
    tabIndex={2}
  />
);

export const SushiSlide = () => (
  <BaseSlide
    alt="бар"
    link={{ to: '/sushi' }}
    src="Images/sushi_adv.webp"
    tabIndex={2}
  />
);

export const SpringSalesSlide = () => (
  <BaseSlide
    alt="весенние скидки"
    link={{ to: '/sushi' }}
    src="Images/spring_sales.webp"
    tabIndex={2}
  />
);

export const LottenSlide = () => (
  <BaseSlide
    alt="lotten кадастровые услуги"
    link={{ href: 'https://lotten.ru' }}
    src="Images/lotten_adv.webp"
    tabIndex={2}
  />
);
