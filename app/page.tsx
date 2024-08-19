import AsideNavbar from '../components/AsideNavbar';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import LoadingWrapper from '@/components/LoadingWrapper';

const HomePage = () => {
  return (
    <LoadingWrapper>
      <div>
        <aside>
          <AsideNavbar />
        </aside>
        <main className='main-content'>
          <Home />
          {/* <About />
          <Skills /> */}
          <Portfolio />
          <Contact />
        </main>
      </div>
    </LoadingWrapper>
  );
};

export default HomePage;
