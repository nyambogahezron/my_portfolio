import styles from './index.module.css';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolio = () => {


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
        <PortfolioCard />
        </div>

        <div>View All</div>
      </div>
    </section>
  );
};

export default Portfolio;
