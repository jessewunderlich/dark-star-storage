import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TenantDashboard from "./TenantDashboard";

export const metadata: Metadata = {
  title: "My Account — Dark Star Storage",
  description:
    "Manage your Dark Star Storage account. View your unit, update payment methods, access gate codes, and manage your lease.",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-void-black flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16 px-6">
        <TenantDashboard />
      </div>
      <Footer />
    </main>
  );
}
