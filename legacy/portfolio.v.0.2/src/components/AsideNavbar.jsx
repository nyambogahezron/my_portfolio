import { useState } from 'react';

const AsideNavbar = ({ SetOpenAsideNav, openAsideNav }) => {
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { name: 'home',  label: 'Home' },
    { name: 'about',  label: 'About' },
    { name: 'services', label: 'Skills' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'contact', label: 'Contact' },
  ];

  const handleClick = (link) => {
    setActiveLink(link);
    SetOpenAsideNav(!openAsideNav);
  };

  return (
    <div className={`aside ${openAsideNav ? 'open' : ''}`}>
      <div className='logo'>
        <a href='#'>
          <span>H</span>ezron
        </a>
      </div>
      <div
        onClick={() => SetOpenAsideNav(!openAsideNav)}
        className='nav-toggler'
      >
        <span></span>
      </div>
      <ul className='nav'>
        {links.map((link) => (
          <li key={link.name}>
            <a href={`#${link.name}`} className={activeLink === link.name ? 'nav-link active' : 'nav-link'} onClick={() => handleClick(link.name)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideNavbar;