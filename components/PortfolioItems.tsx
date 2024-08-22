'use client';
import React, { useState } from 'react';
import styles from '../pages/Portfolio/index.module.css';
import PortfolioCard from './PortfolioCard';

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  site: string;
  github: string;
}

interface PortfolioCardData {
  data: PortfolioItem[];
}

export default function PortfolioCardItems({ data }: PortfolioCardData) {
  return (
    <div className={styles.portfolioCard}>
      <div className={styles.wrapper}>
        {data.map((item: PortfolioItem) => (
          <PortfolioCard key={item.id} styles={styles} item={item} isForProject={false}  />
        ))}
      </div>
    </div>
  );
}
