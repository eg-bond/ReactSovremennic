import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Socials } from './Socials';
import { scrollToTop } from '../helpers';

const Footer = memo(function Footer() {
  return (
    <div className="footer container">
      <div className="footer__content">
        <Link className="footer__a" to="/" onClick={scrollToTop}>
          © 2005 - 2025, Кинотеатр «Современник»
        </Link>
        <Socials />
      </div>
    </div>
  );
});

export default Footer;
