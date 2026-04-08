import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2026-03-25.dahlia" });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { unitId, unitSize, price } = body;

    // Validate input
    if (!unitId || !unitSize || !price) {
      return NextResponse.json(
        { error: "Missing required fields: unitId, unitSize, price" },
        { status: 400 }
      );
    }

    if (typeof price !== "number" || price <= 0 || price > 1000) {
      return NextResponse.json(
        { error: "Invalid price" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "usd",
            recurring: { interval: "month" },
            product_data: {
              name: `Storage Unit ${unitId} (${unitSize})`,
              description: `Monthly rental for ${unitSize} storage unit at Dark Star Storage`,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        unitId,
        unitSize,
      },
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/rent/${unitId}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
