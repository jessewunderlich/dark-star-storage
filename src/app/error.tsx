"use client";

import Link from "next/link";
import BlackHoleLogo from "@/components/BlackHoleLogo";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-void-black px-6 text-center">
      <div className="mb-8">
        <BlackHoleLogo size={100} />
      </div>

      <p className="font-mono text-sm tracking-widest text-gold mb-2">
        SYSTEM ERROR
      </p>

      <h1 className="font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
        Something Went <span className="text-gold">Wrong</span>
      </h1>

      <p className="mt-6 max-w-md font-body text-lg text-starlight-muted">
        An unexpected error occurred. Our systems are working to resolve it.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-lg bg-gold px-8 py-4 font-display text-base font-semibold text-void-black hover:bg-gold-light transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-horizon px-8 py-4 font-display text-base font-semibold text-starlight hover:border-gold hover:text-gold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
