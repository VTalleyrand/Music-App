import React from 'react'
import Link from 'next/link'
import  styles  from './Nav.module.css';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/app/api/auth/[...nextauth]/route';

const Nav = () => {
  const session = getServerSession(authConfig);

  return (
    <header className={styles['header']}>
    <nav className={styles['nav-left']}>
    <Link href='/' className={styles['header-logo']}>Aurelius</Link>
    <ul>
    <li><Link href="/" className={styles['menu-links']}>Home</Link></li>
    <li><Link href="/pricing" className={styles['menu-links']}>Pricing</Link></li>
    <li><Link href="/mission" className={styles['menu-links']}>Mission</Link></li>
    <li><Link href="/contact" className={styles['menu-links']}>Contact</Link></li>
    </ul>
    </nav>
    
      
     <nav className={styles['nav-right']}>

    <Link href="/auth/signin" className={styles['menu-links']}>Login</Link>
    <Link href='/api/auth/signup'><button className={styles['signup']}>Join Today</button></Link>
    </nav>
    </header>
  )
}

export default Nav