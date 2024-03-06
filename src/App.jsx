import { useState, useEffect } from 'react';
import AsideNavbar from './components/AsideNavbar';
import PropTypes from 'prop-types';
import Home from './pages/Home';

function App() {
  const [openAsideNav, SetOpenAsideNav] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup timer on component unmount
  }, []);

  if (loading) {
    return <div className='preloader' id='preloader'></div>;
  }
  return (
    <div className='dark'>
      <aside>
        <AsideNavbar
          openAsideNav={openAsideNav}
          SetOpenAsideNav={SetOpenAsideNav}
        />
      </aside>
      <main className='main-content'>
        <Home />
      </main>
    </div>
  );
}
export default App;

AsideNavbar.propTypes = {
  openAsideNav: PropTypes.bool.isRequired,
  SetOpenAsideNav: PropTypes.func.isRequired,
};
