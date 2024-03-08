import EducationSection from '../components/educationSection';
import ExperienceSection from '../components/experienceSection';

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
              <div className='personal-info'>
                <div className='row'>
                  <div className='info-item'>
                    <p>
                      Birthday : <span>08 October 2000</span>
                    </p>
                  </div>

                  <div className='info-item'>
                    <p>
                      Email : <span>hezronnyamboga6@gmail.com</span>
                    </p>
                  </div>
                  <div className='info-item'>
                    <p>
                      Degree : <span>CS</span>
                    </p>
                  </div>
                  <div className='info-item'>
                    <p>
                      Certifications : <span>CCNA</span>
                    </p>
                  </div>
                  <div className='info-item'>
                    <p>
                      Phone : <span>+254 7945 917 84</span>
                    </p>
                  </div>
                  <div className='info-item'>
                    <p>
                      City : <span>Nairobi, Kenya</span>
                    </p>
                  </div>
                  <div className='info-item'>
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='buttons'>
                    <a href='#contact' className='btn hire-me'>
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
              <div className='skills'>
                <div className='row'>
                  <div className='skill-item'>
                    <h5>CSS</h5>
                    <div className='progress'>
                      <div
                        className='progress-in'
                        style={{ width: '90%' }}
                      ></div>
                      <div className='skill-percent'>90%</div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <h5>JS</h5>
                    <div className='progress'>
                      <div
                        className='progress-in'
                        style={{ width: '86%' }}
                      ></div>
                      <div className='skill-percent'>86%</div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <h5>NODE JS</h5>
                    <div className='progress'>
                      <div
                        className='progress-in'
                        style={{ width: '90%' }}
                      ></div>
                      <div className='skill-percent'>90%</div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <h5>PHP</h5>
                    <div className='progress'>
                      <div
                        className='progress-in'
                        style={{ width: '75%' }}
                      ></div>
                      <div className='skill-percent'>75%</div>
                    </div>
                  </div>
                  <div className='skill-item'>
                    <h5>HTML</h5>
                    <div className='progress'>
                      <div
                        className='progress-in'
                        style={{ width: '96%' }}
                      ></div>
                      <div className='skill-percent'>96%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section  */}

            <div className='timeline-row'>
              <EducationSection />

              {/* Experience Section */}
              <ExperienceSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
