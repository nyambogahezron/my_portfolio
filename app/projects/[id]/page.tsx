'use client';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems } from '@/Data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/globals.css';
import styles from './page.module.css';

interface PortfolioItem {
  id: number;
  title: string;
  desc: string;
  img: string;
  site: string;
  github: string;
}

export default function SingleProject() {
  const projectId = useParams();

  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    const item = portfolioItems.filter((item) => item.id === 1);

    // setCurrentItem(item);
  }, [projectId]);
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className='row min-nav'>
          <div className='home-link'>
            <Link href='/'>Home</Link>
          </div>
          <span>/</span>
          <div className='home-link'>
            <Link href='/projects'>Projects</Link>
          </div>
          <span>/</span>
          <div className='text'>Project 1</div>
        </div>

        <div className='info'>
          <div className='image'></div>
          <div className='desc'>
            <h1 className='title'>t</h1>
            <p className='body'>body</p>
            <div className='links'>
              <a href=''>
                <span className='icon'></span>
                <h2>GitHub</h2>
              </a>
              <a href=''>
                <span className='icon'></span>
                <h2>Site</h2>
              </a>
            </div>
          </div>
        </div>
        <div className='stack'>
          <ul>
            <li>
              <h2>1</h2>
            </li>
            <li>
              <h2>2</h2>
            </li>
            <li>
              <h2>3</h2>
            </li>
            <li>
              <h2>4</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
