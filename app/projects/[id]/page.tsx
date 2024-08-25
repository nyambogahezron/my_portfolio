'use client';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems } from '@/Data';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/globals.css';
import styles from './page.module.css';
import Image from 'next/image';
import myImg from '../../../public/images/stock.PNG';
import { FaGithub } from 'react-icons/fa';
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
          <div className='text'>Project 1</div>
        </div>
        {/* project info  */}
        <div className={styles.info}>
          <div className={styles.image}>
            <Image
              src={myImg}
              alt='project image'
              width={'100%'}
              height={380}
              placeholder='blur'
              style={{ objectFit: 'cover' }}
              blurDataURL='data:image/png'
            />
          </div>
          <div className={styles.desc}>
            <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
            <p className={styles.body}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              beatae porro amet, totam ut aliquid recusandae quo suscipit enim
              mollitia alias delectus pariatur! Nulla molestiae at labore
              similique unde illum accusantium in ipsa sit id. Commodi sunt quas
              iusto sit eos ut fugit nobis, harum modi voluptatibus eum
              similique cum!
            </p>
            <div className={styles.links}>
              <a href=''>
                <span className={styles.icon}>
                  <FaGithub />
                </span>
                <h4>Code</h4>
              </a>
              <a href=''>
                <span className={styles.icon}>
                  <FaGithub />
                </span>
                <h4>Site</h4>
              </a>
            </div>
          </div>
        </div>
        {/* languages / project stack  */}
        <div className={styles.stack}>
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
