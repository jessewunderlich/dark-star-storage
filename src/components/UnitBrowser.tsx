"use client";

import type { Unit } from "@/types/unit";

/**
 * Placeholder unit browser — will connect to Storeganise API.
 * For now, shows sample units to demonstrate the UI pattern.
 */

const sampleUnits: Unit[] = [
  {
    id: "A-101",
    size: "5×5",
    sqft: 25,
    price: 49,
    climate: false,
    floor: 1,
    fits: "Closet-sized. Boxes, seasonal items, small furniture.",
    available: true,
  },
  {
    id: "B-205",
    size: "5×10",
    sqft: 50,
    price: 79,
    climate: false,
    floor: 1,
    fits: "Walk-in closet. Studio apartment or small office contents.",
    available: true,
  },
  {
    id: "C-112",
    size: "10×10",
    sqft: 100,
    price: 119,
    climate: true,
    floor: 1,
    fits: "Half a garage. 1-bedroom apartment contents.",
    available: true,
  },
  {
    id: "D-308",
    size: "10×15",
    sqft: 150,
    price: 159,
    climate: true,
    floor: 1,
    fits: "Full garage. 2-bedroom apartment or small house.",
    available: true,
  },
  {
    id: "E-401",
    size: "10×20",
    sqft: 200,
    price: 199,
    climate: true,
    floor: 1,
    fits: "Large garage. 3-bedroom house or vehicle storage.",
    available: false,
  },
  {
    id: "F-501",
    size: "10×30",
    sqft: 300,
    price: 279,
    climate: true,
    floor: 1,
    fits: "Commercial. Multi-room house, inventory, or equipment.",
    available: true,
  },
];

export default function UnitBrowser() {
  return (
    <section id="units" className="relative py-24 px-6 bg-horizon/20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          Find Your <span className="text-gold">Unit</span>
        </h2>
        <p className="mt-4 text-center font-body text-starlight-muted">
          Select a size. See what fits. Rent in minutes.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleUnits.map((unit) => (
            <div
              key={unit.id}
              className={`group relative rounded-xl border p-6 transition-all duration-300 ${
                unit.available
                  ? "border-horizon bg-void-black hover:border-gold/40 hover:shadow-[0_0_20px_rgba(240,165,0,0.08)] cursor-pointer"
                  : "border-horizon/50 bg-void-black/50 opacity-50 cursor-not-allowed"
              }`}
            >
              {/* Unit ID */}
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

              {/* Size + Price */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-3xl font-bold text-starlight group-hover:text-gold transition-colors">
                    {unit.size}
                  </p>
                  <p className="text-xs text-starlight-muted mt-1">
                    {unit.sqft} sq ft
                    {unit.climate && (
                      <span className="ml-2 text-nebula-light">
                        ❄️ Climate
                      </span>
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

              {/* What fits */}
              <p className="mt-4 font-body text-sm text-starlight-muted leading-relaxed">
                {unit.fits}
              </p>

              {/* CTA */}
              {unit.available && (
                <button className="mt-6 w-full rounded-lg border border-gold/30 py-2.5 font-display text-sm font-semibold text-gold hover:bg-gold hover:text-void-black transition-all duration-200">
                  Rent This Unit
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
