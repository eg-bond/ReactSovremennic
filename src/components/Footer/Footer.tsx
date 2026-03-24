import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Socials } from './Socials';
import { scrollToTop } from '@/helpers';
import * as s from './Footer.css';

const Footer = memo(function Footer() {
  return (
    <div className={`${s.footer} container`}>
      <div className={s.footerContent}>
        <Link className={s.footerLink} to="/" onClick={scrollToTop}>
          © 2005 - 2025, Кинотеатр «Современник»
        </Link>
        <Socials />
      </div>
    </div>
  );
});

export default Footer;
