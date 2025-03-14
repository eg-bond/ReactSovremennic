import { memo } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../helpers';

const Footer = memo(function Footer() {
  return (
    <div className="footer container">
      <Link className="footer__a" to="/" onClick={scrollToTop}>
        Кинотеатр «Современник» © 2005 - 2025
      </Link>
    </div>
  );
});

export default Footer;
