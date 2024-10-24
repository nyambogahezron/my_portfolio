import Image from 'next/image';
import React from 'react';
import HeroImg from '@assets/images/hero.png';
import styles from './index.module.css';
import LanguagesList from './languagesList';

const Home = () => {
  return (
    <section className={styles.home} id='home'>
      <div className='container'>
        <div className='row'>
          <div className={styles.homeInfo}>
            <h3 className={styles.hello}>
              Hello, My Name Is
              <span className={styles.name}> Nyamboga Hezron </span>
            </h3>
            <h3 className={styles.myProfession}>
              {`I'm a`}
              <span>Software Engineer </span>
            </h3>
            <p className={styles.homeDesp}>
              Am a developer with expertise in building scalable and secure
              applications across web and mobile platforms. I excel at designing
              and implementing robust APIs, managing complex data flows, and
              ensuring the security and efficiency of applications. My
              expertise spans system architecture, application performance
              optimization, and seamless database integrations. As a
              collaborative team player, I thrive in dynamic, creative
              environments that emphasize open communication and innovation.
            </p>
            <LanguagesList />
            <div className={styles.cvBtn}>
              <a href='/public/Hezron Nyamboga -resume.pdf' download>
                <button className='btn'>Download Resume</button>
              </a>
            </div>
          </div>
          <div className={styles.homeImg}>
            <Image src={HeroImg} alt='my-photo' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
