"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  unitId: string;
  unitSize: string;
  price: number;
}

export default function CheckoutButton({ unitId, unitSize, price }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stripeConfigured = Boolean(process.env.NEXT_PUBLIC_STRIPE_ENABLED);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to start checkout");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!stripeConfigured) {
    return (
      <>
        <p className="text-center font-body text-xs text-starlight-muted">
          Online payments coming soon. Call{" "}
          <a href="tel:2184387483" className="text-gold hover:text-gold-light transition-colors">
            (218) 438-7483
          </a>{" "}
          to reserve this unit.
        </p>
        <button
          disabled
          className="w-full rounded-lg bg-gold px-6 py-4 font-display text-base font-semibold text-void-black opacity-60 cursor-not-allowed"
        >
          Online Checkout Coming Soon
        </button>
      </>
    );
  }

  return (
    <>
      {error && (
        <p className="text-center font-body text-xs text-dwarf">{error}</p>
      )}
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full rounded-lg bg-gold px-6 py-4 font-display text-base font-semibold text-void-black hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        {loading ? "Redirecting to checkout…" : `Rent for $${price}/mo`}
      </button>
    </>
  );
}
