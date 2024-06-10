import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authConfig } from '../../api/auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

const getUserInfo = async(email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
   const newUser = user.isNewUser
   try {
    if(newUser) {
      let trialStart = new Date();
      let trialEnd = new Date(trialStart);
      trialEnd.setDate(trialStart.getDate() + 7);
      await prisma.user.update({
        where: { email: email },
        data: {
          trialStart: trialStart,
          trialEnd: trialEnd,
          isNewUser: false
        }
      });
    }
    return user;
  } catch(err) {
    console.log(err);
  } finally {
    await prisma.$disconnect()
  }
} 

const page = async() => {
  const session = await getServerSession(authConfig)
  const email = session?.user?.email;
  const user = await getUserInfo(email);

  if(!session || !session?.user) {
    redirect('api/auth/signin')
  }
  

  return (
    <div>
     <h1>Dashboard</h1>
    </div>
  )
}

export default page