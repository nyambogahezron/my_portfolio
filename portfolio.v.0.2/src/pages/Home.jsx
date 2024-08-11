import LanguagesList from "../components/languagesList";
import PropTypes from "prop-types";
import HeroImg from "../assets/images/hero.png";
import TopNavbar from "../components/TopNavbar";
const Home = ({ SetOpenAsideNav, openAsideNav }) => {
  return (
    <section className='home' id='home'>
      <TopNavbar
        SetOpenAsideNav={SetOpenAsideNav}
        openAsideNav={openAsideNav}
      />
      <div className='container'>
        <div className='row'>
          <div className='home-info'>
            <h3 className='hello'>
              Hello, My Name Is<span className='name'> Nyamboga Hezron </span>
            </h3>
            <h3 className='my-profession'>
              {`I'm a`}
              <span>Full Stack Software Developer </span>
            </h3>
            <p className='home-desp'>
              I possess advanced proficiency in JavaScript, a versatile and
              powerful programming language. With a solid foundation in
              JavaScript, I have successfully built my skills around Node JS and
              React JS for the development of scalable web applications and
              implemented solid and secure backend applications. My expertise
              extends to Laravel, Django,Databases, and Networking allowing me
              to build robust APIs, handle complex data manipulations, and build
              secure applications. In addition to my technical proficiency, I am
              a collaborative team player who values open communication and
              thrives in environments that foster creativity.
            </p>
            <LanguagesList />
            <div className='cv-btn'>
              <a href='/public/Hezron Nyamboga -resume.pdf' download>
                <button className='btn'>Download Resume</button>
              </a>
            </div>
          </div>
          <div className='home-img'>
            <img src={HeroImg} alt='my-photo' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
Home.propTypes = {
  openAsideNav: PropTypes.bool.isRequired,
  SetOpenAsideNav: PropTypes.func.isRequired,
};
