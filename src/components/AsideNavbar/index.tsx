'use client';
import { useState } from 'react';
import styles from './index.module.css';
import { links } from '@data/index';
import Link from 'next/link';

const AsideNavbar = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [openAsideNav, SetOpenAsideNav] = useState(false);

  const handleClick = (link: string) => {
    setActiveLink(link);
    SetOpenAsideNav(!openAsideNav);
  };

  return (
    <div className={`${styles.aside} ${openAsideNav ? styles.open : ''}`}>
      <div className={styles.logo}>
        <a href='#'>
          <span>H</span>ezron
        </a>
      </div>
      <div
        onClick={() => SetOpenAsideNav(!openAsideNav)}
        className={styles.navToggler}
      >
        <span></span>
      </div>
      <ul className={styles.nav}>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={`${link.link}`}
              className={
                activeLink === link.name
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
              onClick={() => handleClick(link.name)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideNavbar;
