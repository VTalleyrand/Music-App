import React from 'react';
import styles from './page.module.css';
import faqData from "../../../data/faqData.js";

const Page = () => {
  return (
    <main className={styles['faq-main']}>
      <h2 className={styles['faq-title']}>FAQ</h2>
      <div className={styles['faq-list']}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles['faq-card']}>
            <h5 className={styles['faq-card-question']}>
              {faq.question}
            </h5>
            <p className={styles['faq-card-answer']}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;