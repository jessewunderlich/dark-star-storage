import Link from "next/link";
import BlackHoleLogo from "@/components/BlackHoleLogo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Welcome to Dark Star Storage",
  description: "Your rental is confirmed. Here's everything you need to get started.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-void-black flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-lg w-full text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <BlackHoleLogo size={72} className="animate-accretion" />
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
            Welcome to{" "}
            <span className="text-gold">Dark Star!</span>
          </h1>
          <p className="mt-4 font-body text-starlight-muted">
            Your rental is confirmed. Your stuff is about to be safely consumed.
          </p>

          {/* Gate code card */}
          <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-6 text-left">
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              Your Gate Code
            </p>
            <p className="font-mono text-4xl font-bold text-starlight tracking-widest">
              ████
            </p>
            <p className="mt-2 font-body text-xs text-starlight-muted">
              Your gate code will be emailed to you within minutes. Keep it somewhere safe — it&apos;s the only way in.
            </p>
          </div>

          {/* Next steps */}
          <div className="mt-8 rounded-xl border border-horizon bg-horizon/20 p-6 text-left">
            <p className="font-display text-sm font-semibold text-starlight mb-4">
              Next Steps
            </p>
            <ol className="space-y-3">
              {[
                "Check your email for your gate code and access confirmation.",
                "Drive to the facility at any time — the gate is open 24/7.",
                "Enter your code at the keypad to open the main gate.",
                "Your unit number is on your confirmation email. Lock is included.",
                "Manage billing and access from your online account.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 h-5 w-5 rounded-full bg-gold/15 text-gold font-mono text-xs flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-body text-sm text-starlight-muted leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="rounded-lg border border-gold/30 px-6 py-3 font-display text-sm font-semibold text-gold hover:bg-gold hover:text-void-black transition-all duration-200 text-center"
            >
              Back to Home
            </Link>
            <a
              href="mailto:hello@darkstarstorage.com"
              className="rounded-lg border border-horizon px-6 py-3 font-display text-sm font-semibold text-starlight-muted hover:border-gold/30 hover:text-starlight transition-all duration-200 text-center"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
