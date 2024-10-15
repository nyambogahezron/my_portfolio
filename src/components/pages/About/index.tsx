import AboutTabs from '../../AboutTabs';
import AboutPersonalInfo from '../../AboutPersonalInfo';
import styles from './index.module.css';

const About = () => {
  return (
    <section className={`${styles.about} section`} id='about'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2>About Me</h2>
          </div>
        </div>
        <div className='row'>
          <div className={styles.aboutContent}>
            <div className={styles.wrapper}>
              <div className={styles.aboutText}>
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
              <div>
                <AboutPersonalInfo />
              </div>
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
