import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authConfig } from '../../api/auth/[...nextauth]/route'

const page = async() => {
  const session = await getServerSession(authConfig)
 
  if(!session || !session?.user) {
    redirect('api/auth/signin')
  }
  

  return (
    <div>
      <h1>Progress</h1>
    </div>
  )
}

export default page