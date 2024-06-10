import React  from 'react'
import SessionProvider from '../../../providers/sessionProvider'

 async function Layout({ children }) {
  

  return (
   
    <SessionProvider>
      {children}
      </SessionProvider>
     
  )
}


export default Layout