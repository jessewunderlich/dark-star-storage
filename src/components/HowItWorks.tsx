"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function SearchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="9" stroke="#F0A500" strokeWidth="2" />
      <line x1="21" y1="21" x2="28" y2="28" stroke="#6C3CE1" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SignIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="#F0A500" strokeWidth="2" fill="none" />
      <line x1="10" y1="10" x2="22" y2="10" stroke="#6C3CE1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="14" x2="22" y2="14" stroke="#6C3CE1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="18" x2="18" y2="18" stroke="#6C3CE1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 22 L18 24 L22 20" stroke="#F0A500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="7" stroke="#F0A500" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="#6C3CE1" />
      <line x1="17" y1="17" x2="27" y2="27" stroke="#F0A500" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="24" y2="28" stroke="#6C3CE1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function VoidIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="#6C3CE1" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="5" fill="#F0A500" opacity="0.8" />
      <ellipse cx="16" cy="16" rx="14" ry="6" stroke="#F0A500" strokeWidth="1.5" fill="none" opacity="0.5" transform="rotate(-20 16 16)" />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Choose Your Unit",
    description:
      "Browse available units by size, climate control, and floor level. Real-time availability — what you see is what's open.",
    Icon: SearchIcon,
  },
  {
    number: "02",
    title: "Rent Online",
    description:
      "Complete your rental in minutes. E-sign your lease, set up autopay, and you're done. No office visit required.",
    Icon: SignIcon,
  },
  {
    number: "03",
    title: "Get Instant Access",
    description:
      "Your gate code and smart lock access activate immediately. Walk in anytime, 24/7. Your phone is your key.",
    Icon: KeyIcon,
  },
  {
    number: "04",
    title: "Store & Forget",
    description:
      "Your stuff is monitored by cameras around the clock. Autopay handles the rest. It's in the void now.",
    Icon: VoidIcon,
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-horizon/10" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <h2 className="scroll-reveal text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          How It <span className="text-gold">Works</span>
        </h2>
        <p className="scroll-reveal scroll-reveal-delay-1 mt-4 text-center font-body text-starlight-muted">
          Four steps. Zero humans. Fully automated from search to storage.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} group rounded-xl border border-horizon bg-horizon/30 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-horizon/50`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-sm text-gold/60">
                  {step.number}
                </span>
                <step.Icon />
              </div>
              <h3 className="font-display text-xl font-semibold text-starlight group-hover:text-gold transition-colors">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-starlight-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
