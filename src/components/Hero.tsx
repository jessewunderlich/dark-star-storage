"use client";

import Image from "next/image";
import BlackHoleLogo from "./BlackHoleLogo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background facility image */}
      <Image
        src="/images/hero-facility.webp"
        alt="Dark Star Storage facility exterior at twilight"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />

      {/* Gradient overlays on top of image */}
      <div className="absolute inset-0 bg-event-horizon opacity-70" />
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/80" />

      {/* Animated logo */}
      <div className="relative z-10 mb-8">
        <BlackHoleLogo size={180} className="animate-accretion" />
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-center font-display text-5xl font-bold tracking-tight text-starlight md:text-7xl">
        DARK STAR
        <span className="block text-gold">STORAGE</span>
      </h1>

      {/* Tagline */}
      <p className="relative z-10 mt-6 max-w-lg text-center font-body text-lg text-starlight-muted">
        Your stuff. Safely consumed. Fully automated self-storage with 24/7
        smart access, online rentals, and zero hassle.
      </p>

      {/* CTAs */}
      <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#units"
          aria-label="Browse available storage units"
          className="rounded-lg bg-gold px-8 py-4 font-display text-base font-semibold text-void-black hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_rgba(240,165,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          Find Your Unit
        </a>
        <a
          href="#how-it-works"
          aria-label="Learn how the rental process works"
          className="rounded-lg border border-horizon px-8 py-4 font-display text-base font-semibold text-starlight hover:border-gold hover:text-gold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          How It Works
        </a>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-20 grid grid-cols-3 gap-8 border-t border-horizon pt-8 text-center md:gap-16">
        <div>
          <p className="font-mono text-3xl font-bold text-gold">24/7</p>
          <p className="mt-1 font-body text-sm text-starlight-muted">
            Smart Access
          </p>
        </div>
        <div>
          <p className="font-mono text-3xl font-bold text-gold">100%</p>
          <p className="mt-1 font-body text-sm text-starlight-muted">
            Automated
          </p>
        </div>
        <div>
          <p className="font-mono text-3xl font-bold text-gold">0</p>
          <p className="mt-1 font-body text-sm text-starlight-muted">
            Hassle
          </p>
        </div>
      </div>
    </section>
  );
}
