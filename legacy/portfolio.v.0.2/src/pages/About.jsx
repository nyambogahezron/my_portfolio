import AboutTabs from '../components/AboutTabs';
import AboutPersonalInfo from '../components/AboutPersonalInfo';
import AboutSkills from '../components/AboutSkills';
 
const About = () => {
  return (
    <section className='about section' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2>About Me</h2>
          </div>
        </div>
        <div className='row'>
          <div className='about-content'>
            <div className='row'>
              <div className='about-text'>
                <p>
                  {` I am well-versed in enhancing my ability to streamline
                  development processes and collaborate effectively with
                  cross-functional teams. My problem-solving skills, coupled
                  with a keen eye for optimization, enable me to create
                  efficient and maintainable code. In addition to my technical
                  capabilities, I am committed to staying abreast of the latest
                  advancements in the Technology ecosystem. I am adept at
                  translating business requirements into technical solutions,
                  ensuring alignment with project objectives. Whether it's agile
                  development or test-driven development, I am dedicated to
                  delivering high-quality code that meets or exceeds
                  expectations.`}
                </p>
              </div>
            </div>
            <div className='personal-info-container'>
              <AboutPersonalInfo />
              <AboutSkills />
            </div>

            {/* Education Section  */}
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
