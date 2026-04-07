"use client";

import Link from "next/link";
import { useState } from "react";
import type { Unit } from "@/lib/storeganise";

interface UnitBrowserProps {
  units: Unit[];
}

type Filter = "all" | "climate" | "available";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Units" },
  { id: "climate", label: "Climate Controlled" },
  { id: "available", label: "Available Only" },
];

export default function UnitBrowser({ units }: UnitBrowserProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = units.filter((unit) => {
    if (activeFilter === "climate") return unit.climate;
    if (activeFilter === "available") return unit.available;
    return true;
  });

  return (
    <section id="units" className="relative py-24 px-6 bg-horizon/20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          Find Your <span className="text-gold">Unit</span>
        </h2>
        <p className="mt-4 text-center font-body text-starlight-muted">
          Select a size. See what fits. Rent in minutes.
        </p>

        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
              className={`rounded-full px-4 py-1.5 font-display text-sm font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
                activeFilter === f.id
                  ? "bg-gold text-void-black"
                  : "border border-horizon text-starlight-muted hover:border-gold/40 hover:text-starlight"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center font-body text-starlight-muted">
            No units match this filter.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((unit) => (
              <div
                key={unit.id}
                className={`group relative rounded-xl border p-6 transition-all duration-300 ${
                  unit.available
                    ? "border-horizon bg-void-black hover:border-gold/40 hover:shadow-[0_0_20px_rgba(240,165,0,0.08)] cursor-pointer"
                    : "border-horizon/50 bg-void-black/50 opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-starlight-muted">
                    {unit.id}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      unit.available
                        ? "bg-plasma/10 text-plasma"
                        : "bg-dwarf/10 text-dwarf"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        unit.available ? "bg-plasma" : "bg-dwarf"
                      }`}
                    />
                    {unit.available ? "Available" : "Full"}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-display text-3xl font-bold text-starlight group-hover:text-gold transition-colors">
                      {unit.size}
                    </p>
                    <p className="text-xs text-starlight-muted mt-1">
                      {unit.sqft} sq ft
                      {unit.climate && (
                        <span className="ml-2 text-nebula-light">Climate</span>
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-gold">
                      ${unit.price}
                    </p>
                    <p className="text-xs text-starlight-muted">/month</p>
                  </div>
                </div>

                <p className="mt-4 font-body text-sm text-starlight-muted leading-relaxed">
                  {unit.fits}
                </p>

                {unit.available && (
                  <Link
                    href={`/rent/${unit.id}`}
                    aria-label={`Rent ${unit.size} unit (${unit.sqft} sq ft) for $${unit.price}/month`}
                    className="mt-6 w-full block rounded-lg border border-gold/30 py-2.5 font-display text-sm font-semibold text-gold hover:bg-gold hover:text-void-black transition-all duration-200 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  >
                    Rent This Unit
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
