import Image from 'next/image';
import React from 'react';
import HeroImg from '../../assets/images/hero.png';
import TopNavbar from '../../components/TopNavbar';
import styles from './index.module.css';
import LanguagesList from './languagesList';

const Home = () => {
  return (
    <section className={styles.home} id='home'>
      <TopNavbar />
      <div className='container'>
        <div className='row'>
          <div className={styles.homeInfo}>
            <h3 className={styles.hello}>
              Hello, My Name Is
              <span className={styles.name}> Nyamboga Hezron </span>
            </h3>
            <h3 className={styles.myProfession}>
              {`I'm a`}
              <span>Full Stack Software Developer </span>
            </h3>
            <p className={styles.homeDesp}>
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
