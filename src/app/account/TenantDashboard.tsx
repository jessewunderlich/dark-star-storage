"use client";

import { useState } from "react";
import BlackHoleLogo from "@/components/BlackHoleLogo";

// Mock tenant data — replaced by Storeganise API when connected
const MOCK_TENANT = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "(218) 555-0123",
  unit: {
    id: "C-115",
    size: "10×10",
    sqft: 100,
    price: 119,
    climate: true,
    floor: 1,
  },
  gateCode: "4827",
  leaseStart: "2025-04-01",
  nextPayment: "2025-05-01",
  paymentMethod: "Visa ending 4242",
  balance: 0,
  autopay: true,
};

const MOCK_ACTIVITY = [
  { date: "Apr 7, 2025", event: "Gate access", time: "2:34 PM" },
  { date: "Apr 5, 2025", event: "Gate access", time: "10:12 AM" },
  { date: "Apr 1, 2025", event: "Payment processed — $119.00", time: "12:00 AM" },
  { date: "Mar 28, 2025", event: "Gate access", time: "4:55 PM" },
  { date: "Mar 15, 2025", event: "Gate access", time: "11:30 AM" },
  { date: "Mar 1, 2025", event: "Payment processed — $119.00", time: "12:00 AM" },
];

type Tab = "overview" | "payments" | "access" | "settings";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "payments", label: "Payments" },
  { id: "access", label: "Access" },
  { id: "settings", label: "Settings" },
];

function StatusBadge({ label, variant }: { label: string; variant: "good" | "warn" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        variant === "good" ? "bg-plasma/10 text-plasma" : "bg-gold/10 text-gold"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          variant === "good" ? "bg-plasma" : "bg-gold"
        }`}
      />
      {label}
    </span>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-horizon bg-horizon/20 p-6">
      <h3 className="font-display text-sm font-semibold text-starlight-muted uppercase tracking-widest mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function OverviewTab() {
  const t = MOCK_TENANT;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Unit Info */}
      <Card title="Your Unit">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="font-display text-3xl font-bold text-starlight">
              {t.unit.size}
            </p>
            <p className="font-body text-sm text-starlight-muted mt-1">
              Unit {t.unit.id} · {t.unit.sqft} sq ft · Floor {t.unit.floor}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-gold">
              ${t.unit.price}
            </p>
            <p className="font-body text-xs text-starlight-muted">/month</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {t.unit.climate && (
            <StatusBadge label="Climate Controlled" variant="good" />
          )}
          <StatusBadge label="Active Lease" variant="good" />
        </div>
      </Card>

      {/* Quick Access */}
      <Card title="Gate Code">
        <p className="font-mono text-5xl font-bold text-gold tracking-[0.3em] text-center py-4">
          {t.gateCode}
        </p>
        <p className="font-body text-xs text-starlight-muted text-center mt-2">
          Enter this at the keypad to open the main gate. Active 24/7.
        </p>
      </Card>

      {/* Payment Summary */}
      <Card title="Billing">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">
              Balance
            </span>
            <span className="font-mono text-sm text-plasma font-semibold">
              ${t.balance.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">
              Next payment
            </span>
            <span className="font-mono text-sm text-starlight">
              {t.nextPayment}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">
              Method
            </span>
            <span className="font-mono text-sm text-starlight">
              {t.paymentMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">
              Autopay
            </span>
            <StatusBadge
              label={t.autopay ? "Enabled" : "Disabled"}
              variant={t.autopay ? "good" : "warn"}
            />
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card title="Recent Activity">
        <div className="space-y-2">
          {MOCK_ACTIVITY.slice(0, 5).map((a, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-1.5 border-b border-horizon/40 last:border-0"
            >
              <div>
                <p className="font-body text-sm text-starlight">{a.event}</p>
                <p className="font-mono text-xs text-starlight-muted">
                  {a.date}
                </p>
              </div>
              <span className="font-mono text-xs text-starlight-muted">
                {a.time}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function PaymentsTab() {
  const t = MOCK_TENANT;

  return (
    <div className="space-y-6">
      <Card title="Payment Method">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-14 rounded-lg bg-horizon flex items-center justify-center">
              <span className="font-mono text-xs text-starlight">VISA</span>
            </div>
            <div>
              <p className="font-body text-sm text-starlight">
                {t.paymentMethod}
              </p>
              <p className="font-mono text-xs text-starlight-muted">
                Expires 12/2027
              </p>
            </div>
          </div>
          <button
            disabled
            className="rounded-lg border border-horizon px-4 py-2 font-display text-xs font-semibold text-starlight-muted cursor-not-allowed opacity-50"
          >
            Update
          </button>
        </div>
      </Card>

      <Card title="Payment History">
        <div className="space-y-2">
          {MOCK_ACTIVITY.filter((a) => a.event.includes("Payment")).map((a, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b border-horizon/40 last:border-0"
            >
              <div>
                <p className="font-body text-sm text-starlight">{a.event}</p>
                <p className="font-mono text-xs text-starlight-muted">
                  {a.date}
                </p>
              </div>
              <StatusBadge label="Paid" variant="good" />
            </div>
          ))}
        </div>
      </Card>

      <Card title="Autopay">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-sm text-starlight">
              Automatic monthly payments
            </p>
            <p className="font-body text-xs text-starlight-muted mt-1">
              Charges {t.paymentMethod} on the 1st of each month.
            </p>
          </div>
          <StatusBadge label="Enabled" variant="good" />
        </div>
      </Card>
    </div>
  );
}

function AccessTab() {
  const t = MOCK_TENANT;

  return (
    <div className="space-y-6">
      <Card title="Gate Code">
        <div className="text-center py-6">
          <p className="font-mono text-6xl font-bold text-gold tracking-[0.4em]">
            {t.gateCode}
          </p>
          <p className="font-body text-sm text-starlight-muted mt-4">
            Active 24 hours a day, 7 days a week. Enter at the keypad by the
            main gate.
          </p>
        </div>
      </Card>

      <Card title="Access Log">
        <div className="space-y-2">
          {MOCK_ACTIVITY.filter((a) => a.event.includes("Gate")).map((a, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b border-horizon/40 last:border-0"
            >
              <div>
                <p className="font-body text-sm text-starlight">{a.event}</p>
                <p className="font-mono text-xs text-starlight-muted">
                  {a.date}
                </p>
              </div>
              <span className="font-mono text-xs text-starlight-muted">
                {a.time}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Smart Lock">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-sm text-starlight">
              Unit {t.unit.id} — Smart Lock
            </p>
            <p className="font-body text-xs text-starlight-muted mt-1">
              Tied to your account. Unlocks automatically when gate code is
              verified.
            </p>
          </div>
          <StatusBadge label="Active" variant="good" />
        </div>
      </Card>
    </div>
  );
}

function SettingsTab() {
  const t = MOCK_TENANT;

  return (
    <div className="space-y-6">
      <Card title="Profile">
        <div className="space-y-3">
          {[
            { label: "Name", value: t.name },
            { label: "Email", value: t.email },
            { label: "Phone", value: t.phone },
          ].map((field) => (
            <div key={field.label} className="flex items-center justify-between">
              <div>
                <p className="font-body text-xs text-starlight-muted">
                  {field.label}
                </p>
                <p className="font-body text-sm text-starlight">{field.value}</p>
              </div>
              <button
                disabled
                className="rounded-lg border border-horizon px-3 py-1.5 font-display text-xs font-semibold text-starlight-muted cursor-not-allowed opacity-50"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Lease">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">
              Start date
            </span>
            <span className="font-mono text-sm text-starlight">
              {t.leaseStart}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Term</span>
            <span className="font-mono text-sm text-starlight">
              Month-to-month
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">
              Status
            </span>
            <StatusBadge label="Active" variant="good" />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-horizon/40">
          <button
            disabled
            className="rounded-lg border border-horizon px-4 py-2 font-display text-xs font-semibold text-starlight-muted cursor-not-allowed opacity-50"
          >
            View Lease Agreement
          </button>
        </div>
      </Card>

      <Card title="Notifications">
        <div className="space-y-3">
          {[
            { label: "Payment reminders", enabled: true },
            { label: "Gate access alerts", enabled: false },
            { label: "Promotional offers", enabled: false },
          ].map((pref) => (
            <div
              key={pref.label}
              className="flex items-center justify-between"
            >
              <span className="font-body text-sm text-starlight">
                {pref.label}
              </span>
              <div
                className={`h-6 w-11 rounded-full transition-colors ${
                  pref.enabled ? "bg-plasma" : "bg-horizon"
                } flex items-center px-0.5 cursor-not-allowed opacity-50`}
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition-transform ${
                    pref.enabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Move Out">
        <p className="font-body text-sm text-starlight-muted mb-4">
          Need to end your lease? Submit a 30-day move-out notice. No penalties,
          no hassle.
        </p>
        <button
          disabled
          className="rounded-lg border border-dwarf/40 px-4 py-2 font-display text-xs font-semibold text-dwarf cursor-not-allowed opacity-50"
        >
          Request Move-Out
        </button>
      </Card>
    </div>
  );
}

export default function TenantDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const t = MOCK_TENANT;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <BlackHoleLogo size={48} />
        <div>
          <h1 className="font-display text-2xl font-bold text-starlight">
            Welcome back, {t.name.split(" ")[0]}
          </h1>
          <p className="font-body text-sm text-starlight-muted">
            Unit {t.unit.id} · {t.unit.size} · ${t.unit.price}/mo
          </p>
        </div>
      </div>

      {/* Mock data banner */}
      <div className="mb-6 rounded-lg border border-gold/30 bg-gold/5 px-4 py-3">
        <p className="font-body text-xs text-gold">
          <span className="font-semibold">Preview Mode</span> — This dashboard
          shows sample data. It will connect to your real account when
          Storeganise integration is activated.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 mb-8 border-b border-horizon">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-display text-sm font-semibold transition-colors relative ${
              activeTab === tab.id
                ? "text-gold"
                : "text-starlight-muted hover:text-starlight"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && <OverviewTab />}
      {activeTab === "payments" && <PaymentsTab />}
      {activeTab === "access" && <AccessTab />}
      {activeTab === "settings" && <SettingsTab />}
    </div>
  );
}
