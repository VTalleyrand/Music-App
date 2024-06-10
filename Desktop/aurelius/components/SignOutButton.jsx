'use client'
import React from 'react'
import Link from 'next/link'
import styles from './DashboardNav.module.css'
import { signOut } from 'next-auth/react'

const signOutButton = () => {
  return (
   <button className={styles['signout']} onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
  )
}

export default signOutButton