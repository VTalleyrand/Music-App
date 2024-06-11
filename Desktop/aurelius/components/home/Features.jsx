import React from 'react';
import styles from './Features.module.css';
import Image from 'next/image';

const Features = () => {
  return (
    <section className={styles['features-container']}>
      <div className={styles['feature']}>
        <div className={styles['feature-image-container']}>
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="540"
            height="540"
          />
        </div>
        <div className={styles['feature-text-container']}>
          <h2 className={styles['feature-title']}>
            Absorb the genius of great writing through <span>copywork</span>
          </h2>
          <p className={styles['feature-text']}>
            Embark on the meticulous craft of copywork, where every word you
            transcribe is a step toward literary finesse. It&#39;s more than
            just copying—it&#39;s a meditative ritual that subtly shapes your
            own writing intuition.
          </p>
        </div>
      </div>

      <div className={styles['feature']}>
        <div className={styles['feature-text-container']}>
          <h2 className={styles['feature-title']}>
            Shape Your Voice with the Art of <span>Rewriting</span>
          </h2>
          <p className={styles['feature-text']}>
            Read and absorb, take structured notes, then rewrite with
            originality. Afterward, our AI provides detailed feedback,
            sharpening your skills and enhancing your writing craft
          </p>
        </div>
        <div className={styles['feature-image-container']}>
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="540"
            height="540"
          />
        </div>
      </div>

      <div className={styles['feature']}>
        <div className={styles['feature-image-container']}>
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="540"
            height="540"
          />
        </div>
        <div className={styles['feature-text-container']}>
          <h2 className={styles['feature-title']}>
            Absorb the genius of great writing through <span>copywork</span>
          </h2>
          <p className={styles['feature-text']}>
            Embark on the meticulous craft of copywork, where every word you
            transcribe is a step toward literary finesse. It&#39;s more than
            just copying—it&#39;s a meditative ritual that subtly shapes your
            own writing intuition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
