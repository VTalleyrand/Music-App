import React from 'react'
import styles from './Footer.module.css';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['left-section']}>
        <li><Link href='/faw'>FAQ</Link></li>
        <li><Link href='/faw'>Terms and Services</Link></li>
        <li><Link href='/faw'>Privacy</Link></li>
      </ul>

      <p>© 2024 Aurelius</p>
    </footer>
  )
}

export default Footer