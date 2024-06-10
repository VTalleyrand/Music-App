'use client';
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SubscriptionBtn = () => {
  const [loading, setLoading] = useState(false)
  const { data: session} = useSession()
  const route = useRouter()

  const handleSubscription = async() => {
     
     try {
      setLoading(true)
       const res = await fetch('api/stripe');
        const data = await res.json();
        route.push(data.url);
     } catch(error) {
      console.log(error)
     } finally {
      setLoading(false)
     }
  }

  const authenticate = () => {
    route.push('/auth/signin');
  }
  return (
    <button disabled={loading} onClick={session && session?.user ? handleSubscription : authenticate}>Subscribe</button>
  )
}

export default SubscriptionBtn