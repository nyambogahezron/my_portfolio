import AsideNavbar from '../components/AsideNavbar';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import LoadingWrapper from '@/components/LoadingWrapper';

const HomePage = () => {
  return (
    <>
      <Home />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
