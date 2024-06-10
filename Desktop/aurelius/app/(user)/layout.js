import React  from 'react'
import Nav from '@/components/Nav'
import SessionProvider from '../../providers/sessionProvider'
import { getServerSession } from 'next-auth'
import DashboardNav from '@/components/DashboardNav' 


 async function Layout({ children }) {
  // get user session in a server component
  const session = await getServerSession();

  return (
    
    <SessionProvider>
      {session && session.user ? <DashboardNav /> : <Nav /> }
      {children}
      </SessionProvider>
  )
}


export default Layout