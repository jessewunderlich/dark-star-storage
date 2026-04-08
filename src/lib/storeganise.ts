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

/** Storeganise booking/move-in record */
export interface Booking {
  id: string;
  unitId: string;
  customerId: string;
  status: "active" | "reserved" | "ended";
  moveInDate: string;
  moveOutDate: string | null;
  monthlyRate: number;
  depositPaid: number;
  autopay: boolean;
}

/** Storeganise customer record */
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
  gateCode: string;
  idVerified: boolean;
  createdAt: string;
}

/** Storeganise invoice record */
export interface Invoice {
  id: string;
  bookingId: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
  paidDate: string | null;
  description: string;
}

/** Storeganise site/facility details */
export interface SiteInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  accessHours: string;
  gateType: string;
  features: string[];
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
  if (!isApiConfigured()) return getMockUnits();

  const data = await apiFetch<Record<string, unknown>[] | { unitTypes: Record<string, unknown>[] }>(
    `/sites/${STOREGANISE_SITE_ID}/unit-types`,
    []
  );

  const rawUnits = Array.isArray(data)
    ? data
    : (data as { unitTypes: Record<string, unknown>[] }).unitTypes || [];

  if (!rawUnits.length) return getMockUnits();

  const units: Unit[] = rawUnits.map(
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

// ============================================================
// Storeganise features beyond unit browsing
// All functions follow the same pattern: live API when configured, mock fallback otherwise
// ============================================================

function isApiConfigured(): boolean {
  return Boolean(
    STOREGANISE_API_KEY &&
    STOREGANISE_API_KEY !== "demo-key" &&
    STOREGANISE_SITE_ID
  );
}

async function apiFetch<T>(path: string, fallback: T): Promise<T> {
  if (!isApiConfigured()) return fallback;

  try {
    const res = await fetch(`${STOREGANISE_BASE}${path}`, {
      headers: {
        Authorization: `Bearer ${STOREGANISE_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      console.error(`Storeganise API error (${path}): ${res.status}`);
      return fallback;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`Storeganise API fetch failed (${path}):`, err);
    return fallback;
  }
}

/** Fetch site/facility info */
export async function getSiteInfo(): Promise<SiteInfo> {
  const data = await apiFetch(
    `/sites/${STOREGANISE_SITE_ID}`,
    null
  );
  if (data) {
    const d = data as Record<string, unknown>;
    return {
      id: (d.id as string) || STOREGANISE_SITE_ID,
      name: (d.name as string) || "Dark Star Storage",
      address: (d.address as string) || "Frazee, MN 56544",
      phone: (d.phone as string) || "(218) 438-7483",
      email: (d.email as string) || "hello@darkstarstorage.com",
      timezone: (d.timezone as string) || "America/Chicago",
      accessHours: (d.accessHours as string) || "24/7",
      gateType: (d.gateType as string) || "keypad",
      features: (d.features as string[]) || [],
    };
  }
  return getMockSiteInfo();
}

function getMockSiteInfo(): SiteInfo {
  return {
    id: "dark-star-frazee",
    name: "Dark Star Storage",
    address: "Frazee, MN 56544",
    phone: "(218) 438-7483",
    email: "hello@darkstarstorage.com",
    timezone: "America/Chicago",
    accessHours: "24/7",
    gateType: "keypad",
    features: [
      "climate-controlled",
      "24-7-access",
      "security-cameras",
      "smart-locks",
      "online-rentals",
      "autopay",
      "e-sign",
    ],
  };
}

/** Fetch customer by ID (for tenant portal) */
export async function getCustomer(customerId: string): Promise<Customer | null> {
  if (!isApiConfigured()) return getMockCustomer();

  const data = await apiFetch(
    `/sites/${STOREGANISE_SITE_ID}/users/${customerId}`,
    null
  );
  if (!data) return getMockCustomer();

  const d = data as Record<string, unknown>;
  const addr = (d.address || {}) as Record<string, string>;
  return {
    id: (d.id as string) || customerId,
    firstName: (d.firstName as string) || "",
    lastName: (d.lastName as string) || "",
    email: (d.email as string) || "",
    phone: (d.phone as string) || "",
    address: {
      line1: addr.line1 || "",
      city: addr.city || "",
      state: addr.state || "",
      zip: addr.zip || addr.postalCode || "",
    },
    gateCode: (d.gateCode as string) || (d.accessCode as string) || "",
    idVerified: Boolean(d.idVerified),
    createdAt: (d.createdAt as string) || new Date().toISOString(),
  };
}

function getMockCustomer(): Customer {
  return {
    id: "cust-001",
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    phone: "(218) 555-0123",
    address: {
      line1: "123 Lake St",
      city: "Frazee",
      state: "MN",
      zip: "56544",
    },
    gateCode: "4827",
    idVerified: true,
    createdAt: "2025-03-15T00:00:00Z",
  };
}

/** Fetch bookings for a customer */
export async function getBookings(customerId: string): Promise<Booking[]> {
  if (!isApiConfigured()) return getMockBookings();

  const data = await apiFetch<Record<string, unknown>[]>(
    `/sites/${STOREGANISE_SITE_ID}/bookings?userId=${customerId}`,
    []
  );

  if (!data.length) return getMockBookings();

  return data.map((b) => ({
    id: (b.id as string) || "",
    unitId: (b.unitId as string) || (b.unitName as string) || "",
    customerId: (b.userId as string) || customerId,
    status: ((b.status as string) || "active") as Booking["status"],
    moveInDate: (b.startDate as string) || (b.moveInDate as string) || "",
    moveOutDate: (b.endDate as string) || (b.moveOutDate as string) || null,
    monthlyRate: (b.price as number) || (b.monthlyRate as number) || 0,
    depositPaid: (b.deposit as number) || 0,
    autopay: Boolean(b.autopay ?? b.autoPayment),
  }));
}

function getMockBookings(): Booking[] {
  return [
    {
      id: "book-001",
      unitId: "C-115",
      customerId: "cust-001",
      status: "active",
      moveInDate: "2025-04-01",
      moveOutDate: null,
      monthlyRate: 119,
      depositPaid: 119,
      autopay: true,
    },
  ];
}

/** Fetch invoices for a customer */
export async function getInvoices(customerId: string): Promise<Invoice[]> {
  if (!isApiConfigured()) return getMockInvoices();

  const data = await apiFetch<Record<string, unknown>[]>(
    `/sites/${STOREGANISE_SITE_ID}/invoices?userId=${customerId}`,
    []
  );

  if (!data.length) return getMockInvoices();

  return data.map((inv) => ({
    id: (inv.id as string) || "",
    bookingId: (inv.bookingId as string) || (inv.orderId as string) || "",
    amount: (inv.total as number) || (inv.amount as number) || 0,
    status: ((inv.status as string) || "pending") as Invoice["status"],
    dueDate: (inv.dueDate as string) || "",
    paidDate: (inv.paidDate as string) || null,
    description: (inv.description as string) || `Monthly storage rental`,
  }));
}

function getMockInvoices(): Invoice[] {
  return [
    {
      id: "inv-006",
      bookingId: "book-001",
      amount: 119,
      status: "pending",
      dueDate: "2025-05-01",
      paidDate: null,
      description: "Monthly rental — Unit C-115 (10×10)",
    },
    {
      id: "inv-005",
      bookingId: "book-001",
      amount: 119,
      status: "paid",
      dueDate: "2025-04-01",
      paidDate: "2025-04-01",
      description: "Monthly rental — Unit C-115 (10×10)",
    },
    {
      id: "inv-004",
      bookingId: "book-001",
      amount: 119,
      status: "paid",
      dueDate: "2025-03-01",
      paidDate: "2025-03-01",
      description: "Monthly rental — Unit C-115 (10×10)",
    },
    {
      id: "inv-003",
      bookingId: "book-001",
      amount: 119,
      status: "paid",
      dueDate: "2025-02-01",
      paidDate: "2025-02-01",
      description: "Monthly rental — Unit C-115 (10×10)",
    },
  ];
}

/**
 * Create a booking via Storeganise API.
 * This is the online rental flow — creates a reservation/move-in.
 * Falls back to returning a mock booking ID if API is not configured.
 */
export async function createBooking(
  unitId: string,
  customer: { firstName: string; lastName: string; email: string; phone: string }
): Promise<{ bookingId: string; success: boolean; error?: string }> {
  if (!isApiConfigured()) {
    return { bookingId: "mock-book-new", success: true };
  }

  try {
    const res = await fetch(
      `${STOREGANISE_BASE}/sites/${STOREGANISE_SITE_ID}/bookings`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${STOREGANISE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          unitId,
          user: customer,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return {
        bookingId: "",
        success: false,
        error: (err as Record<string, string>).message || `API error: ${res.status}`,
      };
    }

    const data = (await res.json()) as Record<string, string>;
    return { bookingId: data.id || "", success: true };
  } catch (err) {
    console.error("Storeganise booking creation failed:", err);
    return { bookingId: "", success: false, error: "Failed to create booking" };
  }
}

/** Check if Storeganise API is connected (for UI indicators) */
export function isStoreganiseConfigured(): boolean {
  return isApiConfigured();
}
