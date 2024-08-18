import { portfolioItems } from '@/Data';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './index.module.css';

const Portfolio = () => {
  const [flipped, setFlipped] = useState([]);

  const flip = (id: number) => {
    setFlipped([...flipped, id]);
  };

  const unflip = (id: number) => {
    setFlipped(flipped.filter((item) => item !== id));
  };

  return (
    <section className={`${styles.portfolio} section`} id='portfolio'>
      <div className={styles.container}>
        <div className='row'>
          <div className='section-title'>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className='row'>
          <div className={styles.portfolioHeading}>
            <h2>My Projects</h2>
          </div>
        </div>
        <div className={styles.portfolioCard}>
          <div className={styles.wrapper}>
            {portfolioItems.map((item) => (
              <div
                className={`${styles.card} ${
                  flipped.includes(item.id) ? styles.flipped : ''
                }`}
                key={item.id}
              >
                <div className={styles.cardFront}>
                  <div className={styles.image}>
                    <a href={item.site} target='_blank' rel='noreferrer'>
                      <img src={item.img} alt={item.title} />
                    </a>
                  </div>
                  <div className={styles.frontInfo}>
                    <h2>{item.title}</h2>
                    <hr />
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className={styles.action}>
                  {flipped.includes(item.id) ? (
                    <button onClick={() => unflip(item.id)}>Back</button>
                  ) : (
                    <button onClick={() => flip(item.id)}>More</button>
                  )}
                  <div className={styles.site}>
                    <span>
                      <a
                        title='View Source Code'
                        href={item.github}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </span>
                    <button className={styles.siteLive} title='View Site'>
                      <a href={item.site} target='_blank' rel='noreferrer'>
                        View Site
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>View All</div>
      </div>
    </section>
  );
};

export default Portfolio;
