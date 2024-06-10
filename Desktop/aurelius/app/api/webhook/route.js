import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function handleSubscription(userId, subscription) {
  const currentUser = await prisma.user.findUnique({
    where: { 
      id: userId 
    },
  });

    await prisma.user.update({
      where: { id: userId },
      data: {
        stripeId: subscription.id, 
        subscriptionStatus: subscription.status,
        stripeCustomerId: subscription.customer,
        stripePeriodStart: new Date(subscription.current_period_start * 1000),
        stripePeriodEnd: new Date(subscription.current_period_end * 1000),
        isSubscribed: true
      },
    });
}

async function stripeWebhook(req) {
  const body = await req.text(); 
  const signature = headers().get('stripe-signature') || "" ;
  
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message);
    return new NextResponse("webhook error", {status: 400});
  }
  
  const session = event?.data?.object;
  const userId = session?.metadata?.userId;
  
  try {
    const subscription = await stripe.subscriptions.retrieve(session.subscription);
    switch (event?.type) {
      case 'checkout.session.completed':
        if (!userId) {
          console.error('No userId found in metadata');
          return new NextResponse("No userId", { status: 400 });
        }

        await handleSubscription(userId, subscription);

        break;
      case 'invoice.payment_succeeded':
        await prisma.user.update({
          where: { stripeId: subscription.id},
          data: {
            subscriptionStatus: subscription.status,
            stripePeriodEnd: new Date(subscription.current_period_end * 1000)
          }
        });

        break;

      default:
        console.warn('Unhandled event type:', event?.type);
        break;
    }
  } catch (error) {
    console.error('Database operation failed:', error.message);
    return new NextResponse("webhook error", { status: 400 });
  } finally {
    await prisma.$disconnect();
  }

  return new NextResponse(null, { status: 200 });
}

export { stripeWebhook as POST }