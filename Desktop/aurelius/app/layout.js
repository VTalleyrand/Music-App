import './globals.css'
import React  from 'react'
import SessionProvider from '../providers/sessionProvider'
import { getServerSession } from 'next-auth'
import Nav from '@/components/Nav'
import DashboardNav from '@/components/DashboardNav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Aurelius',
  description: 'An app for current and future writer',
}


 async function RootLayout({ children }) {
  // get user session in a server component
  const session = await getServerSession();

  return (
    <html lang="en">
      <body >
      <SessionProvider>
      {session && session.user ? <DashboardNav /> : <Nav /> }
      {children}
      <Footer />
      </SessionProvider>
      </body>
    </html>
  )
}


export default RootLayout