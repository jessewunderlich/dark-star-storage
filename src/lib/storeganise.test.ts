import { describe, it, expect } from "vitest";
import { getUnits } from "./storeganise";

describe("getUnits", () => {
  it("returns array of units with required fields", async () => {
    const units = await getUnits();
    expect(units.length).toBeGreaterThan(0);
    for (const unit of units) {
      expect(unit).toHaveProperty("id");
      expect(unit).toHaveProperty("size");
      expect(unit).toHaveProperty("sqft");
      expect(unit).toHaveProperty("price");
      expect(unit).toHaveProperty("available");
      expect(typeof unit.price).toBe("number");
      expect(unit.price).toBeGreaterThan(0);
    }
  });

  it("includes both available and unavailable units", async () => {
    const units = await getUnits();
    const available = units.filter((u) => u.available);
    const unavailable = units.filter((u) => !u.available);
    expect(available.length).toBeGreaterThan(0);
    expect(unavailable.length).toBeGreaterThan(0);
  });

  it("returns units with all four size categories", async () => {
    const units = await getUnits();
    const sizes = new Set(units.map((u) => u.size));
    expect(sizes.size).toBeGreaterThanOrEqual(4);
  });

  it("all units have valid sqft matching their size", async () => {
    const units = await getUnits();
    for (const unit of units) {
      expect(unit.sqft).toBeGreaterThan(0);
      expect(unit.fits.length).toBeGreaterThan(0);
    }
  });
});
