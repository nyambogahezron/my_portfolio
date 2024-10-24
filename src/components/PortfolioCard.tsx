'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { PortfolioCardProps } from '../../types';
import '@assets/css/globals.css';

export default function PortfolioCard({
  item,
  styles,
  isForProject,
}: PortfolioCardProps) {
  const [flipped, setFlipped] = useState<number[]>([]);

  const flip = (id: number) => {
    setFlipped([...flipped, id]);
  };

  const unFlip = (id: number) => {
    setFlipped(flipped.filter((item) => item !== id));
  };
  return (
    <>
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
          <p>
            {item.desc}
            {isForProject ? (
              ''
            ) : (
              <Link
                style={{ color: 'blue', fontSize: 12, marginLeft: 1 }}
                href={`projects/${item.id}`}
              >
                View More
              </Link>
            )}
          </p>
        </div>
        <div className={styles.action}>
          {!isForProject ? (
            flipped.includes(item.id) ? (
              <button
                className='actionBtn text-sm border border-gray-300 items-center  justify-start p-3  w-20 rounded-lg text-bold transition-all hover:bg-white'
                onClick={() => unFlip(item.id)}
              >
                Back
              </button>
            ) : (
              <button
                className='actionBtn text-sm border border-gray-300 items-center justify-start p-3 w-20 rounded-lg text-bold transition-all hover:bg-white'
                onClick={() => flip(item.id)}
              >
                More
              </button>
            )
          ) : (
            <Link
              className='actionBtn text-sm items-center justify-start p-3 rounded-lg text-bold transition-all hover:bg-white'
              href={`projects/${item.id}`}
            >
              View More
            </Link>
          )}
          <div className={styles.site}>
            <span className='text-sm items-center justify-start p-3 rounded-lg text-bold transition-all hover:bg-white'>
              <a
                className='fa-github'
                title='View Source Code'
                href={item.github}
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub />
              </a>
            </span>
            <a
              href={item.site}
              target='_blank'
              rel='noreferrer'
              className='text-black hover:text-white'
            >
              <button
                className='actionBtn text-sm border border-gray-300 items-center justify-start p-3 rounded-lg text-bold transition-all hover:text-white hover:bg-white'
                title='View Site'
              >
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
