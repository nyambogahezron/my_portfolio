const AsideNavbar = ({ SetOpenAsideNav, openAsideNav }) => {
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
        <li>
          <a href='#home' className='nav-link active'>
            <i className='fa fa-home'></i>Home
          </a>
        </li>
        <li>
          <a href='#about' className='nav-link'>
            <i className='fa fa-user'></i> About
          </a>
        </li>
        <li>
          <a href='#services' className='nav-link'>
            <i className='fa fa-list'></i> Skills
          </a>
        </li>
        <li>
          <a href='#portfolio' className='nav-link'>
            <i className='fa fa-briefcase'></i>Portfolio
          </a>
        </li>
        <li>
          <a href='#contact' className='nav-link'>
            <i className='fa fa-comments'></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AsideNavbar;
