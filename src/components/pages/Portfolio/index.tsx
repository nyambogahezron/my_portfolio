import Link from 'next/link';
import styles from './index.module.css';
import PortfolioItems from '@/components/PortfolioItems';
import { portfolioItems } from '../../../../data';

const Portfolio = () => {
  const data = portfolioItems.slice(0, 3);
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
        <div>
          <PortfolioItems data={data} />
        </div>
        <Link href='/projects' className={styles.viewAllLink}>
          <div className={`${styles.viewAll}`}>
            <button className='btn'>View All</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
