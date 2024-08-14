import { useState } from 'react';
import styles from './index.module.css';
interface AsideNavbarProps {
  openAsideNav: boolean;
  SetOpenAsideNav: (open: boolean) => void;
}

const AsideNavbar: React.FC<AsideNavbarProps> = ({
  SetOpenAsideNav,
  openAsideNav,
}) => {
  const [activeLink, setActiveLink] = useState<string>('home');

  const links = [
    { name: 'home', label: 'Home' },
    { name: 'about', label: 'About' },
    { name: 'services', label: 'Skills' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'contact', label: 'Contact' },
  ];

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
            <a
              href={`#${link.name}`}
              className={
                activeLink === link.name
                  ? `${styles.navLink} ${styles.active}`
                  : `${styles.navLink}`
              }
              onClick={() => handleClick(link.name)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideNavbar;
