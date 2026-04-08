import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getUnits } from "@/lib/storeganise";

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
    const { unitId } = body;

    if (!unitId) {
      return NextResponse.json(
        { error: "Missing required field: unitId" },
        { status: 400 }
      );
    }

    // Look up unit server-side — never trust client-submitted price
    const units = await getUnits();
    const unit = units.find((u) => u.id === unitId && u.available);

    if (!unit) {
      return NextResponse.json(
        { error: "Unit not found or unavailable" },
        { status: 404 }
      );
    }

    const { size: unitSize, price } = unit;

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
        unitId: unit.id,
        unitSize: unit.size,
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
