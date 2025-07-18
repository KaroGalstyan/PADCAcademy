import { CURRENCY } from "../utils/config";
import { stripe } from "./stripe-server+api";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    if (!amount || typeof amount !== "number") {
      return new Response(JSON.stringify({ error: "Invalid amount" }), { status: 400 });
    }

    const customer = await stripe.customers.create();

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2025-04-30.basil" }
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // динамически из тела запроса
      currency: CURRENCY,
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return Response.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    });
  } catch (error) {
    console.error("Payment Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
