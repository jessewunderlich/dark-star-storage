"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: "🔐",
    title: "24/7 Smart Access",
    description: "Your unique gate code and smart lock access work around the clock — no office hours, no waiting.",
  },
  {
    icon: "🌡️",
    title: "Climate Controlled Options",
    description: "Protect furniture, electronics, and documents from Minnesota extremes with regulated temperature and humidity.",
  },
  {
    icon: "📱",
    title: "Fully Automated",
    description: "Rent online, sign digitally, pay automatically. Your phone is your key. Zero human interaction required.",
  },
];

export default function Reviews() {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="relative py-24 px-6 bg-void-black" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <h2 className="scroll-reveal text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          Why <span className="text-gold">Dark Star</span>
        </h2>
        <p className="scroll-reveal scroll-reveal-delay-1 mt-4 text-center font-body text-starlight-muted">
          Storage built for how people actually live.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} rounded-xl border border-horizon bg-horizon/20 p-8 text-center`}
            >
              <span className="text-4xl" aria-hidden="true">{item.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-starlight">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm text-starlight-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
