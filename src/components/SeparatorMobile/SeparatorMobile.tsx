import { forwardRef } from 'react';
import { separator } from './SeparatorMobile.css';

type SeparatorVariant = keyof typeof separator;

type SeparatorMobileProps = {
  variant?: SeparatorVariant;
};

export const SeparatorMobile = forwardRef<HTMLDivElement, SeparatorMobileProps>(
  ({ variant = 'default' }, ref) => (
    <div className={separator[variant]} ref={ref} />
  ),
);

SeparatorMobile.displayName = 'SeparatorMobile';
