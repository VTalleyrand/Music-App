import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authConfig } from '../../api/auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'


// get user info from database
const getUser = async(email) => {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
   try {
   return user
   } catch(error) {
    console.log(error)
   } finally {
    await prisma.$disconnect();
   }
}

const page = async() => {
  const session = await getServerSession(authConfig)
  const user = await getUser(session?.user.email)

  if(!session || !session?.user) {
    redirect('api/auth/signin')
  }

  return (
    <div>
    <h1>Manage your account</h1>
    <h3>Plan: {user.subscriptionStatus === "active" ? 'PRO' : 'TRIAL'}</h3>
     
    </div>
  )
}

export default page