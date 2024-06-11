import React from 'react'
import styles from './Footer.module.css';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['left-section']}>
        <li><Link href='/faq'>FAQ</Link></li>
        <li><Link href='/tos'>Terms of Service</Link></li>
        <li><Link href='/privacy'>Privacy</Link></li>
      </ul>

      <p>© 2024 Aurelius</p>
    </footer>
  )
}

export default Footer