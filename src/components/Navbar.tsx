"use client";

import Link from "next/link";
import BlackHoleLogo from "./BlackHoleLogo";

const navLinks = [
  { href: "#units", label: "Units" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-starlight-muted hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#rent"
            className="rounded-lg bg-gold px-5 py-2.5 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors duration-200"
          >
            Rent a Unit
          </Link>
        </div>
      </div>
    </nav>
  );
}
