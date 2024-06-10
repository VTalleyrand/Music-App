import React from 'react'
import styles from './DashboardNav.module.css'
import Link from 'next/link'
import SignOutButton from './SignOutButton'

const DashboardNav = () => {
  return (
    <header className={styles['header']}>
    <Link href='/dashboard' className={styles['header-logo']}>Aurelius</Link>
    <nav className={styles['nav-top']}>
     <Link href="/dashboard">Dashboard</Link>
     <Link href="/progress">Progress</Link>
     <Link href="/account">Account</Link>
    </nav>
      <SignOutButton />
    </header>
  )
}

export default DashboardNav