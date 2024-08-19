import PortfolioCard from '@/components/PortfolioCard';
import React from 'react';
import { portfolioItems } from '@/Data';
import styles from '../../pages/Portfolio/index.module.css';
import '../../assets/css/globals.css';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <section className={`${styles.portfolio} section`} id='portfolio'>
        <div className={styles.container}>
          <div className='row'>
            <div className='section-title'>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className='row'>
            <Link href='/'>Go Back</Link>
          </div>
          <div className='row'>
            <div className={styles.portfolioHeading}>
              <h2>My Projects</h2>
            </div>
          </div>
          <div>
            <PortfolioCard data={portfolioItems} />
          </div>
        </div>
      </section>
    </>
  );
}
