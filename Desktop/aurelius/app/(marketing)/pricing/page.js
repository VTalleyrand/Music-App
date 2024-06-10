import React from 'react'
import styles from './page.module.css';
import SubscriptionBtn from '@/components/SubscriptionBtn';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const page = async() => {
  // const session = await getServerSession()
  // console.log(session)
  // if(session && session?.user) {
  //   redirect('/account')
  // }
  return (
    <main className={styles['pricing-main']}>
    <div className={styles['pricing-card']}>
    <p className={styles['price']}>$14<span> .99 / month</span></p>
    <SubscriptionBtn/>
    <p>You can cancel at any time.</p>
    </div>      
    </main>
  )
}

export default page