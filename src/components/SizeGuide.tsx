"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const sizes = [
  {
    id: "5x5",
    label: "5 × 5",
    sqft: 25,
    price: "from $49/mo",
    image: "/images/unit-5x5.webp",
    tagline: "Closet-sized",
    summary: "Seasonal items, boxes, and small gear.",
    details: [
      "Holiday decorations & seasonal clothing",
      "Small furniture pieces (end table, lamp)",
      "Boxes of books, documents, or kitchenware",
      "Camping gear, hunting accessories",
      "About the size of a large walk-in closet",
    ],
  },
  {
    id: "5x10",
    label: "5 × 10",
    sqft: 50,
    price: "from $79/mo",
    image: "/images/unit-5x10.webp",
    tagline: "Studio apartment",
    summary: "Contents of a studio or dorm room.",
    details: [
      "Studio or 1-bedroom apartment contents",
      "Sofa, mattress set, dresser",
      "10–15 medium boxes",
      "Bicycles, outdoor equipment",
      "About the size of a large walk-in closet + hallway",
    ],
  },
  {
    id: "10x10",
    label: "10 × 10",
    sqft: 100,
    price: "from $119/mo",
    image: "/images/unit-10x10.webp",
    tagline: "1–2 bedroom apartment",
    summary: "Furniture, appliances, and full room contents.",
    details: [
      "1–2 bedroom apartment contents",
      "Washer, dryer, refrigerator",
      "Sofa, dining set, bedroom suite",
      "20–30 medium boxes",
      "Snowmobiles, ATVs, or small watercraft accessories",
    ],
  },
  {
    id: "10x20",
    label: "10 × 20",
    sqft: 200,
    price: "from $179/mo",
    image: "/images/unit-10x20.webp",
    tagline: "3–4 bedroom home",
    summary: "Large home contents or vehicles.",
    details: [
      "3–4 bedroom home full contents",
      "Full-size pickup truck or SUV",
      "Large furniture sets from multiple rooms",
      "Business inventory or equipment",
      "About the size of a one-car garage",
    ],
  },
];

export default function SizeGuide() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="size-guide" className="relative py-24 px-6 bg-horizon/10" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <h2 className="scroll-reveal text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          Find the Right <span className="text-gold">Size</span>
        </h2>
        <p className="scroll-reveal scroll-reveal-delay-1 mt-4 text-center font-body text-starlight-muted">
          Click a size to see what fits inside.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((size, i) => {
            const isOpen = expanded === size.id;
            return (
              <button
                key={size.id}
                onClick={() => setExpanded(isOpen ? null : size.id)}
                aria-expanded={isOpen}
                className={`scroll-reveal scroll-reveal-delay-${i + 1} text-left rounded-xl border p-5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
                  isOpen
                    ? "border-gold/60 bg-gold/5 shadow-[0_0_24px_rgba(240,165,0,0.12)]"
                    : "border-horizon bg-void-black hover:border-gold/30 hover:bg-gold/5"
                }`}
              >
                {/* Unit image */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src={size.image}
                    alt={`${size.label} storage unit — ${size.tagline}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`mt-1 text-xs font-mono transition-colors ${
                      isOpen ? "text-gold" : "text-starlight-muted"
                    }`}
                  >
                    {isOpen ? "▲ less" : "▼ more"}
                  </span>
                </div>

                {/* Size label */}
                <p
                  className={`mt-2 font-display text-2xl font-bold transition-colors ${
                    isOpen ? "text-gold" : "text-starlight"
                  }`}
                >
                  {size.label}
                </p>
                <p className="font-mono text-xs text-starlight-muted mt-0.5">
                  {size.sqft} sq ft &middot; {size.price}
                </p>

                {/* Tagline */}
                <p className="mt-2 font-display text-sm font-semibold text-starlight">
                  {size.tagline}
                </p>
                <p className="mt-1 font-body text-xs text-starlight-muted leading-relaxed">
                  {size.summary}
                </p>

                {/* Expanded details */}
                {isOpen && (
                  <ul className="mt-4 space-y-1.5 border-t border-gold/20 pt-4">
                    {size.details.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 font-body text-xs text-starlight-muted leading-relaxed"
                      >
                        <span className="mt-0.5 text-gold shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            );
          })}
        </div>

        <p className="mt-8 text-center font-body text-xs text-starlight-muted">
          Not sure what you need?{" "}
          <a
            href="#units"
            aria-label="Browse available storage units with sizes and prices"
            className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded"
          >
            Browse available units
          </a>{" "}
          — sizes and prices shown on each card.
        </p>
      </div>
    </section>
  );
}
