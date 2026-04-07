const STOREGANISE_API_KEY = process.env.STOREGANISE_API_KEY || 'demo-key';
const STOREGANISE_BASE = 'https://api.storeganise.com/v1';

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

export async function getUnits(): Promise<Unit[]> {
  // Mock for demo — replace with real API
  // Real: fetch(`${STOREGANISE_BASE}/units?location_id=1&available=true`, { headers: { Authorization: `Bearer ${STOREGANISE_API_KEY}` } })
  return [
    { id: "A-101", size: "5×5", sqft: 25, price: 49, climate: false, floor: 1, fits: "Boxes, seasonal items.", available: true },
    { id: "B-205", size: "5×10", sqft: 50, price: 79, climate: false, floor: 1, fits: "Studio apt contents.", available: true },
    { id: "C-112", size: "10×10", sqft: 100, price: 119, climate: true, floor: 1, fits: "1-bed apt.", available: false },
    // Live data will auto-populate here
  ];
}
