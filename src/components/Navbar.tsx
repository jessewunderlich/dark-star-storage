"use client";

import { useState } from "react";
import Link from "next/link";
import BlackHoleLogo from "./BlackHoleLogo";

const navLinks = [
  { href: "#units", label: "Units" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#size-guide", label: "Pricing" },
  { href: "#contact", label: "Contact" },
  { href: "/account", label: "My Account" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-void-black"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 z-50 w-full border-b border-horizon bg-void-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <BlackHoleLogo size={40} />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-widest text-starlight">
                DARK STAR
              </span>
              <span className="font-display text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
                STORAGE
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-starlight-muted hover:text-gold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#units"
              aria-label="Rent a storage unit"
              className="rounded-lg bg-gold px-5 py-2.5 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              Rent a Unit
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-starlight transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-starlight transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-starlight transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            role="menu"
            aria-label="Mobile navigation"
            className="md:hidden border-t border-horizon bg-void-black/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className="font-body text-sm text-starlight-muted hover:text-gold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#units"
              role="menuitem"
              aria-label="Rent a storage unit"
              className="rounded-lg bg-gold px-5 py-2.5 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors duration-200 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              onClick={() => setIsOpen(false)}
            >
              Rent a Unit
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
