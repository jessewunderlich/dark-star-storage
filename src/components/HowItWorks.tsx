"use client";

const steps = [
  {
    number: "01",
    title: "Choose Your Unit",
    description:
      "Browse available units by size, climate control, and floor level. Real-time availability — what you see is what's open.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Rent Online",
    description:
      "Complete your rental in minutes. E-sign your lease, set up autopay, and you're done. No office visit required.",
    icon: "📝",
  },
  {
    number: "03",
    title: "Get Instant Access",
    description:
      "Your gate code and smart lock access activate immediately. Walk in anytime, 24/7. Your phone is your key.",
    icon: "🔐",
  },
  {
    number: "04",
    title: "Store & Forget",
    description:
      "Your stuff is monitored by cameras around the clock. Autopay handles the rest. It's in the void now.",
    icon: "🌑",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-horizon/10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          How It <span className="text-gold">Works</span>
        </h2>
        <p className="mt-4 text-center font-body text-starlight-muted">
          Four steps. Zero humans. Fully automated from search to storage.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-xl border border-horizon bg-horizon/30 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-horizon/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-sm text-gold/60">
                  {step.number}
                </span>
                <span className="text-2xl">{step.icon}</span>
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
