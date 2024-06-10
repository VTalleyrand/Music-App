import { getServerSession } from "next-auth";
import { authConfig } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { stripe } from "@/lib/stripe";

const prisma = new PrismaClient()

const return_url = process.env.NEXT_PUBLIC_BASE_URL;

export const GET = async() => {
  const session = await getServerSession(authConfig);
  
    try {
         if(!session && !session?.user) {
          return NextResponse("unauthorized", { status: 401})
         }

        const email = session.user.email
      
         const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        })
         await prisma.$disconnect();

        
        const stripeSession = await stripe.checkout.sessions.create({
          success_url: return_url,
          cancel_url: return_url,
          payment_method_types: ['card'],
          mode: 'subscription',
          billing_address_collection: 'auto',
          customer_email: email,
          line_items: [
            {
              price_data: {
                   currency: 'USD',
                   product_data: {
                   name: 'Aurelius Pro Plan',
                   }, 
                   unit_amount: 1499,
                   recurring: {
                    interval: 'month'
                   }
          }, 
          quantity: 1
        }
      ],
      metadata: {
        userId: user.id
      }
        })
      
        return NextResponse.json({url: stripeSession.url});
    } catch(error) {
      console.log("stripe error")
     return  NextResponse.json({message: 'Internal server error' }, { status: 500 })
    }
}
