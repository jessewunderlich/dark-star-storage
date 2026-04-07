"use client";

import { useState } from "react";
import BlackHoleLogo from "./BlackHoleLogo";

const PHONE = "(218) 438-7483"; // (218) GET-SITE — real Quo number
// TODO: domain not yet purchased; placeholder email until darkstarstorage.com is live
const EMAIL = "hello@darkstarstorage.com";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="border-t border-horizon bg-void-black py-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Top row: logo + contact info + social */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + info */}
          <div className="flex flex-col gap-6">
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

            <div className="space-y-1">
              <p className="font-body text-sm text-starlight-muted">Frazee, Minnesota</p>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="block font-body text-sm text-starlight-muted hover:text-gold transition-colors duration-200"
                aria-label={`Call us at ${PHONE}`}
              >
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block font-body text-sm text-starlight-muted hover:text-gold transition-colors duration-200"
                aria-label={`Email us at ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </div>

            {/* Social links removed — add back when real accounts exist */}
          </div>

          {/* Contact form */}
          <div className="flex-1 md:max-w-sm">
            <h3 className="font-display text-lg font-semibold text-starlight mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <div>
                <label
                  htmlFor="footer-name"
                  className="block font-body text-xs text-starlight-muted mb-1"
                >
                  Name
                </label>
                <input
                  id="footer-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-horizon bg-horizon/20 px-4 py-2.5 font-body text-sm text-starlight placeholder:text-starlight-muted/50 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="footer-email"
                  className="block font-body text-xs text-starlight-muted mb-1"
                >
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-horizon bg-horizon/20 px-4 py-2.5 font-body text-sm text-starlight placeholder:text-starlight-muted/50 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="footer-message"
                  className="block font-body text-xs text-starlight-muted mb-1"
                >
                  Message
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What can we help you with?"
                  className="w-full resize-none rounded-lg border border-horizon bg-horizon/20 px-4 py-2.5 font-body text-sm text-starlight placeholder:text-starlight-muted/50 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gold px-5 py-2.5 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-horizon pt-8 md:flex-row">
          <p className="font-body text-xs text-starlight-muted">
            &copy; {new Date().getFullYear()} Dark Star Storage. All rights reserved.
          </p>
          <p className="font-body text-xs text-starlight-muted/50">
            Your stuff. Safely consumed.
          </p>
        </div>
      </div>
    </footer>
  );
}
