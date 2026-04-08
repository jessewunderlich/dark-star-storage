export interface Unit {
  id: string;
  size: string;
  sqft: number;
  price: number;
  climate: boolean;
  floor: number;
  fits: string;
  available: boolean;
}

const STOREGANISE_API_KEY = process.env.STOREGANISE_API_KEY || "";
const STOREGANISE_SITE_ID = process.env.STOREGANISE_SITE_ID || "";
const STOREGANISE_BASE = process.env.STOREGANISE_API_BASE || "https://app.storeganise.com/api/v1";

/** Size descriptions for unit types */
const SIZE_DESCRIPTIONS: Record<string, string> = {
  "5x5": "Boxes, seasonal items, small gear.",
  "5×5": "Boxes, seasonal items, small gear.",
  "5x10": "Studio apt contents, mattress, dresser.",
  "5×10": "Studio apt contents, mattress, dresser.",
  "10x10": "1–2 bedroom apt, appliances, furniture.",
  "10×10": "1–2 bedroom apt, appliances, furniture.",
  "10x15": "2–3 bedroom home contents.",
  "10×15": "2–3 bedroom home contents.",
  "10x20": "3–4 bedroom home, vehicles, large furniture.",
  "10×20": "3–4 bedroom home, vehicles, large furniture.",
};

function getSizeDescription(name: string): string {
  // Try exact match first, then check if any key is contained in the name
  if (SIZE_DESCRIPTIONS[name]) return SIZE_DESCRIPTIONS[name];
  for (const [key, desc] of Object.entries(SIZE_DESCRIPTIONS)) {
    if (name.toLowerCase().includes(key.toLowerCase())) return desc;
  }
  return "Storage unit.";
}

function parseSqft(name: string): number {
  // Try to parse "10x20" → 200
  const match = name.match(/(\d+)\s*[x×]\s*(\d+)/i);
  if (match) return parseInt(match[1]) * parseInt(match[2]);
  return 0;
}

/**
 * Fetch units from Storeganise API.
 * Falls back to mock data if API key is not configured or request fails.
 */
export async function getUnits(): Promise<Unit[]> {
  // Use live API if configured
  if (STOREGANISE_API_KEY && STOREGANISE_API_KEY !== "demo-key" && STOREGANISE_SITE_ID) {
    try {
      const res = await fetch(
        `${STOREGANISE_BASE}/sites/${STOREGANISE_SITE_ID}/unit-types`,
        {
          headers: {
            Authorization: `Bearer ${STOREGANISE_API_KEY}`,
            "Content-Type": "application/json",
          },
          next: { revalidate: 300 }, // Cache for 5 minutes
        }
      );

      if (!res.ok) {
        console.error(`Storeganise API error: ${res.status} ${res.statusText}`);
        return getMockUnits();
      }

      const data = await res.json();

      // Map Storeganise unit types to our Unit interface
      // Adjust field names based on actual API response shape
      const units: Unit[] = (data.unitTypes || data || []).map(
        (ut: Record<string, unknown>, idx: number) => ({
          id: (ut.id as string) || `UNIT-${idx + 1}`,
          size: (ut.name as string) || (ut.label as string) || "Unknown",
          sqft: (ut.sqft as number) || parseSqft((ut.name as string) || ""),
          price: (ut.defaultPrice as number) || (ut.price as number) || 0,
          climate: Boolean(ut.climateControlled || ut.climate),
          floor: (ut.floor as number) || 1,
          fits: getSizeDescription((ut.name as string) || ""),
          available: (ut.availableCount as number) > 0,
        })
      );

      return units.length > 0 ? units : getMockUnits();
    } catch (err) {
      console.error("Storeganise API fetch failed:", err);
      return getMockUnits();
    }
  }

  return getMockUnits();
}

/** Mock data for development and demo */
function getMockUnits(): Unit[] {
  return [
    { id: "A-101", size: "5×5", sqft: 25, price: 49, climate: false, floor: 1, fits: "Boxes, seasonal items, small gear.", available: true },
    { id: "A-102", size: "5×5", sqft: 25, price: 49, climate: false, floor: 1, fits: "Boxes, seasonal items, small gear.", available: true },
    { id: "B-201", size: "5×10", sqft: 50, price: 79, climate: false, floor: 1, fits: "Studio apt contents, mattress, dresser.", available: true },
    { id: "B-205", size: "5×10", sqft: 50, price: 79, climate: true, floor: 1, fits: "Studio apt contents, mattress, dresser.", available: true },
    { id: "C-112", size: "10×10", sqft: 100, price: 119, climate: true, floor: 1, fits: "1–2 bedroom apt, appliances, furniture.", available: false },
    { id: "C-115", size: "10×10", sqft: 100, price: 119, climate: true, floor: 1, fits: "1–2 bedroom apt, appliances, furniture.", available: true },
    { id: "D-301", size: "10×20", sqft: 200, price: 179, climate: false, floor: 1, fits: "3–4 bedroom home, vehicles, large furniture.", available: true },
    { id: "D-305", size: "10×20", sqft: 200, price: 179, climate: true, floor: 1, fits: "3–4 bedroom home, vehicles, large furniture.", available: false },
  ];
}
