'use client';
import { useState, useEffect } from 'react';
import AsideNavbar from '../components/AsideNavbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const HomePage: React.FC = () => {
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
        <Home SetOpenAsideNav={SetOpenAsideNav} openAsideNav={openAsideNav} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
