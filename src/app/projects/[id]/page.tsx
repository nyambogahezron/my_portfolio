'use client';
import { portfolioItems } from '@data/index';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '@assets/css/globals.css';
import styles from './page.module.css';
import Image from 'next/image';
import { FaAngleRight, FaGithub } from 'react-icons/fa';
import { PortfolioItem } from '../../../../types';

export default function SingleProject() {
  const projectId = useParams();
  const Id = Number(projectId?.id);
  const [currentItem, setCurrentItem] = useState<PortfolioItem[]>([]);
  // console.log(currentItem);
  useEffect(() => {
    const item = portfolioItems.filter((item) => item.id === Id);
    setCurrentItem(item);
  }, [projectId]);

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        {/* header  */}
        <div className='row min-nav'>
          <div className='home-link'>
            <Link href='/'>Home</Link>
          </div>
          <span>/</span>
          <div className='home-link'>
            <Link href='/projects'>Projects</Link>
          </div>
          <span>/</span>
          <div className='text'>{currentItem[0]?.title}</div>
        </div>
        {/* project info  */}
        <div className={styles.info}>
          <div className={styles.desc}>
            <h1 className={styles.title}>{currentItem[0]?.title}</h1>
            <p className={styles.body}>{currentItem[0]?.desc}</p>
          </div>
          <div className={styles.image}>
            <Image
              src={currentItem[0]?.img}
              alt='project image'
              height={350}
              placeholder='blur'
              blurDataURL='data:image/png'
              style={{ width: '100%', height: 600 }}
              width={700}
            />
          </div>
          <div className={styles.desc}>
            <div className='mt-4'>
              <h1 className={styles.title}>Stack</h1>
              <div className={styles.stack}>
                <ol>
                  {currentItem[0]?.stack &&
                    Object.values(currentItem[0].stack).map(
                      (stack: any, index) => (
                        <li key={index} className='flex flex-row gp-2'>
                          <FaAngleRight />
                          <h3>{stack}</h3>
                        </li>
                      )
                    )}
                </ol>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className={styles.title}>Features</h1>
              <div className={styles.stack}>
                <ol>
                  {currentItem[0]?.features &&
                    Object.values(currentItem[0].features).map(
                      (feature: any, index) => (
                        <li key={index} className='flex flex-row gp-2 mb-2'>
                          <FaAngleRight />
                          <h3>{feature}</h3>
                        </li>
                      )
                    )}
                </ol>
              </div>
            </div>
            <div className={styles.links}>
              <a href={currentItem[0]?.github}>
                <span className={styles.icon}>
                  <FaGithub />
                </span>
                <h4>Code</h4>
              </a>
              <a href={currentItem[0]?.site}>
                <span className={styles.icon}>
                  <FaGithub />
                </span>
                <h4>Site</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
