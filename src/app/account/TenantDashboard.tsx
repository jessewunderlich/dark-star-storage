"use client";

import { useState } from "react";
import BlackHoleLogo from "@/components/BlackHoleLogo";
import type { Customer, Booking, Unit, Invoice } from "@/lib/storeganise";

interface TenantDashboardProps {
  customer: Customer | null;
  booking: Booking | null;
  unit: Unit | null;
  invoices: Invoice[];
  isLive: boolean;
}

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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-horizon bg-horizon/20 p-6">
      <h3 className="font-display text-sm font-semibold text-starlight-muted uppercase tracking-widest mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function OverviewTab({
  customer,
  booking,
  unit,
  invoices,
}: {
  customer: Customer;
  booking: Booking;
  unit: Unit | null;
  invoices: Invoice[];
}) {
  const nextInvoice = invoices.find((i) => i.status === "pending");
  const paidCount = invoices.filter((i) => i.status === "paid").length;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Your Unit">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="font-display text-3xl font-bold text-starlight">
              {unit?.size || booking.unitId}
            </p>
            <p className="font-body text-sm text-starlight-muted mt-1">
              Unit {booking.unitId}
              {unit && ` · ${unit.sqft} sq ft · Floor ${unit.floor}`}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-gold">
              ${booking.monthlyRate}
            </p>
            <p className="font-body text-xs text-starlight-muted">/month</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {unit?.climate && <StatusBadge label="Climate Controlled" variant="good" />}
          <StatusBadge
            label={booking.status === "active" ? "Active Lease" : booking.status}
            variant={booking.status === "active" ? "good" : "warn"}
          />
        </div>
        <p className="mt-4 font-body text-xs text-starlight-muted">
          Move-in: {booking.moveInDate} · Deposit: ${booking.depositPaid}
        </p>
      </Card>

      <Card title="Gate Code">
        <p className="font-mono text-5xl font-bold text-gold tracking-[0.3em] text-center py-4">
          {customer.gateCode || "————"}
        </p>
        <p className="font-body text-xs text-starlight-muted text-center mt-2">
          Enter this at the keypad to open the main gate. Active 24/7.
        </p>
      </Card>

      <Card title="Billing">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Next payment</span>
            <span className="font-mono text-sm text-starlight">
              {nextInvoice ? nextInvoice.dueDate : "—"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Amount</span>
            <span className="font-mono text-sm text-starlight">
              ${nextInvoice ? nextInvoice.amount.toFixed(2) : "0.00"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Autopay</span>
            <StatusBadge
              label={booking.autopay ? "Enabled" : "Disabled"}
              variant={booking.autopay ? "good" : "warn"}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Payments made</span>
            <span className="font-mono text-sm text-starlight">{paidCount}</span>
          </div>
        </div>
      </Card>

      <Card title="Recent Invoices">
        <div className="space-y-2">
          {invoices.slice(0, 4).map((inv) => (
            <div
              key={inv.id}
              className="flex items-center justify-between py-1.5 border-b border-horizon/40 last:border-0"
            >
              <div>
                <p className="font-body text-sm text-starlight">{inv.description}</p>
                <p className="font-mono text-xs text-starlight-muted">{inv.dueDate}</p>
              </div>
              <StatusBadge
                label={inv.status === "paid" ? "Paid" : inv.status === "overdue" ? "Overdue" : "Due"}
                variant={inv.status === "paid" ? "good" : "warn"}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function PaymentsTab({ booking, invoices }: { booking: Booking; invoices: Invoice[] }) {
  return (
    <div className="space-y-6">
      <Card title="Autopay">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-sm text-starlight">Automatic monthly payments</p>
            <p className="font-body text-xs text-starlight-muted mt-1">
              ${booking.monthlyRate}/mo charged on the 1st of each month.
            </p>
          </div>
          <StatusBadge
            label={booking.autopay ? "Enabled" : "Disabled"}
            variant={booking.autopay ? "good" : "warn"}
          />
        </div>
      </Card>

      <Card title="Payment History">
        <div className="space-y-2">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="flex items-center justify-between py-2 border-b border-horizon/40 last:border-0"
            >
              <div>
                <p className="font-body text-sm text-starlight">
                  ${inv.amount.toFixed(2)} — {inv.description}
                </p>
                <p className="font-mono text-xs text-starlight-muted">
                  Due: {inv.dueDate}
                  {inv.paidDate && ` · Paid: ${inv.paidDate}`}
                </p>
              </div>
              <StatusBadge
                label={inv.status === "paid" ? "Paid" : inv.status === "overdue" ? "Overdue" : "Pending"}
                variant={inv.status === "paid" ? "good" : "warn"}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function AccessTab({ customer, booking }: { customer: Customer; booking: Booking }) {
  return (
    <div className="space-y-6">
      <Card title="Gate Code">
        <div className="text-center py-6">
          <p className="font-mono text-6xl font-bold text-gold tracking-[0.4em]">
            {customer.gateCode || "————"}
          </p>
          <p className="font-body text-sm text-starlight-muted mt-4">
            Active 24 hours a day, 7 days a week. Enter at the keypad by the main gate.
          </p>
        </div>
      </Card>

      <Card title="Smart Lock">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-sm text-starlight">
              Unit {booking.unitId} — Smart Lock
            </p>
            <p className="font-body text-xs text-starlight-muted mt-1">
              Tied to your account. Unlocks automatically when gate code is verified.
            </p>
          </div>
          <StatusBadge label="Active" variant="good" />
        </div>
      </Card>

      <Card title="ID Verification">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-sm text-starlight">Identity verification</p>
            <p className="font-body text-xs text-starlight-muted mt-1">
              Required for gate and unit access.
            </p>
          </div>
          <StatusBadge
            label={customer.idVerified ? "Verified" : "Pending"}
            variant={customer.idVerified ? "good" : "warn"}
          />
        </div>
      </Card>
    </div>
  );
}

function SettingsTab({ customer, booking }: { customer: Customer; booking: Booking }) {
  return (
    <div className="space-y-6">
      <Card title="Profile">
        <div className="space-y-3">
          {[
            { label: "Name", value: `${customer.firstName} ${customer.lastName}` },
            { label: "Email", value: customer.email },
            { label: "Phone", value: customer.phone },
            {
              label: "Address",
              value: `${customer.address.line1}, ${customer.address.city}, ${customer.address.state} ${customer.address.zip}`,
            },
          ].map((field) => (
            <div key={field.label} className="flex items-center justify-between">
              <div>
                <p className="font-body text-xs text-starlight-muted">{field.label}</p>
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
            <span className="font-body text-sm text-starlight-muted">Start date</span>
            <span className="font-mono text-sm text-starlight">{booking.moveInDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Term</span>
            <span className="font-mono text-sm text-starlight">Month-to-month</span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-sm text-starlight-muted">Status</span>
            <StatusBadge label="Active" variant="good" />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-horizon/40 flex gap-3">
          <button
            disabled
            className="rounded-lg border border-horizon px-4 py-2 font-display text-xs font-semibold text-starlight-muted cursor-not-allowed opacity-50"
          >
            View Lease Agreement
          </button>
          <button
            disabled
            className="rounded-lg border border-horizon px-4 py-2 font-display text-xs font-semibold text-starlight-muted cursor-not-allowed opacity-50"
          >
            Download PDF
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
            <div key={pref.label} className="flex items-center justify-between">
              <span className="font-body text-sm text-starlight">{pref.label}</span>
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
          Need to end your lease? Submit a 30-day move-out notice. No penalties, no hassle.
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

export default function TenantDashboard({
  customer,
  booking,
  unit,
  invoices,
  isLive,
}: TenantDashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  if (!customer || !booking) {
    return (
      <div className="mx-auto max-w-4xl text-center py-16">
        <BlackHoleLogo size={64} />
        <h1 className="mt-6 font-display text-2xl font-bold text-starlight">
          No Active Account
        </h1>
        <p className="mt-4 font-body text-starlight-muted">
          You don&apos;t have an active rental. Browse units to get started.
        </p>
        <a
          href="/#units"
          className="mt-6 inline-block rounded-lg bg-gold px-6 py-3 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors"
        >
          Browse Units
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <BlackHoleLogo size={48} />
        <div>
          <h1 className="font-display text-2xl font-bold text-starlight">
            Welcome back, {customer.firstName}
          </h1>
          <p className="font-body text-sm text-starlight-muted">
            Unit {booking.unitId}
            {unit && ` · ${unit.size}`} · ${booking.monthlyRate}/mo
          </p>
        </div>
      </div>

      {/* Mock data banner */}
      {!isLive && (
        <div className="mb-6 rounded-lg border border-gold/30 bg-gold/5 px-4 py-3">
          <p className="font-body text-xs text-gold">
            <span className="font-semibold">Preview Mode</span> — This dashboard
            shows sample data. It will connect to your real account when Storeganise
            integration is activated.
          </p>
        </div>
      )}

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
      {activeTab === "overview" && (
        <OverviewTab customer={customer} booking={booking} unit={unit} invoices={invoices} />
      )}
      {activeTab === "payments" && <PaymentsTab booking={booking} invoices={invoices} />}
      {activeTab === "access" && <AccessTab customer={customer} booking={booking} />}
      {activeTab === "settings" && <SettingsTab customer={customer} booking={booking} />}
    </div>
  );
}
