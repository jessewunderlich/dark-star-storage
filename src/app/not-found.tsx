import Link from "next/link";
import BlackHoleLogo from "@/components/BlackHoleLogo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-void-black px-6 text-center">
      {/* Animated logo */}
      <div className="mb-8">
        <BlackHoleLogo size={120} className="animate-pulse-slow" />
      </div>

      {/* Error code */}
      <p className="font-mono text-sm tracking-widest text-gold mb-2">ERROR 404</p>

      {/* Headline */}
      <h1 className="font-display text-5xl font-bold tracking-tight text-starlight md:text-7xl">
        Lost in the <span className="text-gold">Void</span>
      </h1>

      {/* Copy */}
      <p className="mt-6 max-w-md font-body text-lg text-starlight-muted">
        Whatever you were looking for has been consumed by the black hole. It&rsquo;s in
        there somewhere — beyond the event horizon, outside the reach of light, logic,
        or good navigation.
      </p>

      <p className="mt-3 font-mono text-sm text-starlight-muted/50">
        Unlike your storage unit, this page cannot be accessed 24/7.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          aria-label="Return to the Dark Star Storage homepage"
          className="rounded-lg bg-gold px-8 py-4 font-display text-base font-semibold text-void-black hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_rgba(240,165,0,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          Back to Safety
        </Link>
        <Link
          href="/#units"
          aria-label="Browse available storage units"
          className="rounded-lg border border-horizon px-8 py-4 font-display text-base font-semibold text-starlight hover:border-gold hover:text-gold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
        >
          Browse Units
        </Link>
      </div>
    </main>
  );
}
