import { useState, useEffect } from 'react';
import AsideNavbar from './components/AsideNavbar';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [openAsideNav, SetOpenAsideNav] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
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
        <About />
      </main>
    </div>
  );
}
export default App;

AsideNavbar.propTypes = {
  openAsideNav: PropTypes.bool.isRequired,
  SetOpenAsideNav: PropTypes.func.isRequired,
};
