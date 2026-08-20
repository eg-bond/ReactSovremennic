import type { CSSProperties, MouseEvent } from 'react';

type PhoneLinkProps = {
  /** Text to display. Defaults to `phone`. */
  displayText?: string;
  phone: string;
  style?: CSSProperties;
};

const toTel = (phone: string) => phone.replace(/[^+\d]/g, '');

/**
 * Clickable phone number.
 *
 * Uses `tel:` protocol so mobile OS offers to dial the number.
 * Navigation is triggered programmatically in `onClick` because some mobile
 * browsers (notably iOS Safari) fire a native `tel:`/`mailto:` link only once
 * per page load. Re-assigning `window.location.href` on every tap makes it
 * work reliably on repeated clicks.
 */
const PhoneLink = ({
  phone,
  displayText,
  style,
}: PhoneLinkProps) => {
  const tel = `tel:${toTel(phone)}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = tel;
  };

  return (
    <a
      style={{
        whiteSpace: 'nowrap',
        textDecoration: 'underline',
        color: 'red',
        ...style,
      }}
      href={tel}
      onClick={handleClick}
    >
      {displayText ?? phone}
    </a>
  );
};

export default PhoneLink;
