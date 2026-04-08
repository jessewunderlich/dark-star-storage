"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const vehicles = [
  {
    icon: "🚤",
    title: "Boats & Watercraft",
    description:
      "Keep your boat secure in the off-season. Easy drive-up access for trailers. Ready to launch when lake season hits.",
  },
  {
    icon: "🏔️",
    title: "Snowmobiles & ATVs",
    description:
      "Summer storage for sleds, winter storage for ATVs. Protected from the elements year-round.",
  },
  {
    icon: "🚐",
    title: "RVs & Trailers",
    description:
      "Large 10×20 units fit full-size trucks, campers, and utility trailers. No long-term contracts required.",
  },
  {
    icon: "🎿",
    title: "Seasonal Gear",
    description:
      "Fishing gear, hunting equipment, ski gear, camping supplies — swap in and out as the seasons change.",
  },
];

export default function VehicleStorage() {
  const ref = useScrollReveal();

  return (
    <section
      id="vehicle-storage"
      className="relative py-24 px-6 bg-horizon/10"
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="scroll-reveal text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          Lake Country <span className="text-gold">Storage</span>
        </h2>
        <p className="scroll-reveal scroll-reveal-delay-1 mt-4 text-center font-body text-lg text-starlight-muted max-w-2xl mx-auto">
          Frazee sits at the heart of Minnesota lake country. Whether
          it&apos;s boats in winter or snowmobiles in summer, Dark Star keeps
          your toys ready for the next season.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} rounded-xl border border-horizon bg-horizon/20 p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(240,165,0,0.08)]`}
            >
              <span className="text-4xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-starlight">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-base text-starlight-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="scroll-reveal mt-10 text-center font-body text-base text-starlight-muted">
          All vehicle storage includes 24/7 gate access and security cameras.{" "}
          <a
            href="#units"
            className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded"
          >
            Browse units
          </a>{" "}
          or{" "}
          <a
            href="#contact"
            className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded"
          >
            contact us
          </a>{" "}
          for oversized vehicle storage options.
        </p>
      </div>
    </section>
  );
}
