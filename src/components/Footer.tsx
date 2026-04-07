"use client";

import BlackHoleLogo from "./BlackHoleLogo";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-horizon bg-void-black py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <BlackHoleLogo size={32} />
            <div>
              <span className="font-display text-sm font-bold tracking-widest text-starlight">
                DARK STAR
              </span>
              <span className="ml-2 font-display text-[10px] tracking-[0.2em] text-gold">
                STORAGE
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="font-body text-sm text-starlight-muted">
              Frazee, Minnesota
            </p>
            <p className="font-body text-sm text-starlight-muted mt-1">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-horizon pt-8 md:flex-row">
          <p className="font-body text-xs text-starlight-muted">
            &copy; {new Date().getFullYear()} Dark Star Storage. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-starlight-muted/50">
            Your stuff. Safely consumed.
          </p>
        </div>
      </div>
    </footer>
  );
}
