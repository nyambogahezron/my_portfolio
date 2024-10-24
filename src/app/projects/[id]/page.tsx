'use client';
import { portfolioItems } from '@data/projects';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '@assets/css/globals.css';
import styles from './page.module.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { PortfolioItem } from '../../../../types';
import { AiOutlineGlobal } from 'react-icons/ai';

export default function SingleProject() {
  const projectId = useParams();
  const Id = Number(projectId?.id);
  const [currentItem, setCurrentItem] = useState<PortfolioItem[]>([]);

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
          <div className='flex flex-col border rounded-lg  mb-5 '>
            <div className={styles.desc}>
              <div className='flex w-full justify-start '>
                <p className={styles.body}>{currentItem[0]?.desc}</p>
              </div>
            </div>
            <div>
              {currentItem[0]?.img && (
                <Image
                  src={currentItem[0]?.img}
                  alt='project image'
                  height={800}
                  width={1000}
                  placeholder='blur'
                  blurDataURL='data:image/png'
                  style={{
                    width: '100%',
                    height: 600,
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '5px',
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.desc}>
            <div>
              <div className='projectCard'>
                <h1 style={{ marginLeft: 10 }} className={styles.title}>
                  Stack
                </h1>
                <div className={styles.stack}>
                  <ol className='list-disc'>
                    {currentItem[0]?.stack &&
                      Object.values(currentItem[0].stack).map(
                        (stack: any, index) => (
                          <li key={index} className='flex flex-row gp-2'>
                            <span className='projectCardIcon'>*</span>
                            <h3>{stack}</h3>
                          </li>
                        )
                      )}
                  </ol>
                </div>
              </div>
              <div className='projectCard'>
                <h1 style={{ marginLeft: 10 }} className={styles.title}>
                  Features
                </h1>
                <div className={styles.stack}>
                  <ol>
                    {currentItem[0]?.features &&
                      Object.values(currentItem[0].features).map(
                        (feature: any, index) => (
                          <li
                            key={index}
                            className='flex flex-row gp-2 mb-2 items-center'
                          >
                            <span className='projectCardIcon'>*</span>{' '}
                            <h3>{feature}</h3>
                          </li>
                        )
                      )}
                  </ol>
                </div>
              </div>
            </div>
            <div className='ml-20'>
              <div className={styles.links}>
                <a
                  href={currentItem[0]?.github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className={styles.icon}>
                    <FaGithub />
                  </span>
                  <h4>Code</h4>
                </a>
                <a href={currentItem[0]?.site} target='_blank' rel='noreferrer'>
                  <span className={styles.icon}>
                    <AiOutlineGlobal />
                  </span>
                  <h4>Site</h4>
                </a>
                {currentItem[0]?.download && (
                  <>
                    <a
                      href={currentItem[0]?.download.appStore}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Image
                        src='/images/app-store.svg'
                        alt='app-store'
                        height={120}
                        width={100}
                      />
                    </a>
                    <a
                      href={currentItem[0]?.download.playStore}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Image
                        src='/images/google-play.svg'
                        alt='google-play'
                        height={120}
                        width={100}
                      />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
