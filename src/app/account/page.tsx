import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TenantDashboard from "./TenantDashboard";
import {
  getCustomer,
  getBookings,
  getInvoices,
  getUnits,
  isStoreganiseConfigured,
} from "@/lib/storeganise";

export const metadata: Metadata = {
  title: "My Account — Dark Star Storage",
  description:
    "Manage your Dark Star Storage account. View your unit, update payment methods, access gate codes, and manage your lease.",
};

export default async function AccountPage() {
  // In production, customerId would come from auth session.
  // For now, fetch mock data through the same Storeganise abstraction.
  const customerId = "cust-001";

  const [customer, bookings, invoices, units] = await Promise.all([
    getCustomer(customerId),
    getBookings(customerId),
    getInvoices(customerId),
    getUnits(),
  ]);

  const isLive = isStoreganiseConfigured();

  // Match booking to unit for display
  const activeBooking = bookings.find((b) => b.status === "active") || bookings[0];
  const bookedUnit = activeBooking
    ? units.find((u) => u.id === activeBooking.unitId)
    : null;

  return (
    <main className="min-h-screen bg-void-black flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 px-6">
        <TenantDashboard
          customer={customer}
          booking={activeBooking || null}
          unit={bookedUnit || null}
          invoices={invoices}
          isLive={isLive}
        />
      </div>
      <Footer />
    </main>
  );
}
