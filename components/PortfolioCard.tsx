'use client';
import React, { useState } from 'react';
import styles from '../pages/Portfolio/index.module.css';
import { portfolioItems } from '@/Data';
import { FaGithub } from 'react-icons/fa';

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  site: string;
  github: string;
}

export default function PortfolioCard() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const flip = (id: number) => {
    setFlipped([...flipped, id]);
  };

  const unflip = (id: number) => {
    setFlipped(flipped.filter((item) => item !== id));
  };

  return (
    <div className={styles.wrapper}>
      {portfolioItems.map((item: PortfolioItem) => (
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
  );
}