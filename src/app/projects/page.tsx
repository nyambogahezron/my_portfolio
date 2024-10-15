'use client';
import PortfolioCard from '@/components/PortfolioCard';
import React, { useState } from 'react';
import { portfolioItems } from '@data/index';
import styles from '@/components/pages/Portfolio/index.module.css';
import '@assets/css/globals.css';
import Link from 'next/link';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Extract unique categories from portfolioItems
const categories = [
  'All',
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      className={`${styles.portfolio} section pageSection`}
      id='portfolio'
    >
      <div className={styles.container}>
        <div className='row min-nav'>
          <div className='home-link'>
            <Link href='/'>Home</Link>
          </div>
          <span>/</span>
          <div className='text'>Portfolio</div>
        </div>
        <div className='row'>
          <div className={styles.portfolioHeading}>
            <h2>My Projects</h2>
          </div>
        </div>
        <div className={styles.headerNav}>
          <div className={styles.wrapper}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.navButton} ${
                  selectedCategory === category ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <TransitionGroup className={styles.portfolioGrid}>
          {filteredItems.map((item) => (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames={{
                enter: styles.itemEnter,
                enterActive: styles.itemEnterActive,
                exit: styles.itemExit,
                exitActive: styles.itemExitActive,
              }}
            >
              <PortfolioCard item={item} styles={styles} isForProject={true} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
}
