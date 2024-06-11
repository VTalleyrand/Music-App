import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles['hero-container']}>
      <h1 className={styles['hero-heading']}>
        Craft <span>Excellence</span>, One Word at a Time.
      </h1>
      <p>
        {' '}
        Embrace timeless practices to elevate your writing, harnessing the power
        of observation, practice, and intelligent feedback.
      </p>
      <Link href="https://copywork.vercel.app" target="_blank">
        <button className={styles['hero-cta']}>Get Started</button>
      </Link>
    </section>
  );
};

export default Hero;
