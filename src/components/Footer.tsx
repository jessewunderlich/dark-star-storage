"use client";

import { useState } from "react";
import BlackHoleLogo from "./BlackHoleLogo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PHONE = "(218) 438-7483"; // (218) GET-SITE — real Quo number
const EMAIL = "hello@darkstarstorage.com";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ref = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer id="contact" className="border-t border-horizon bg-void-black py-16 px-6" ref={ref}>
      <div className="mx-auto max-w-5xl">
        {/* Top row: logo + contact info + social */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + info */}
          <div className="scroll-reveal flex flex-col gap-6">
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

            {/* Map */}
            <div className="w-full rounded-lg overflow-hidden border border-horizon">
              <iframe
                title="Dark Star Storage location in Frazee, Minnesota"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43888.13!2d-95.72!3d46.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c8a8e8c8c8c8c8%3A0x0!2sFrazee%2C+MN+56544!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="scroll-reveal scroll-reveal-delay-1 flex-1 md:max-w-sm">
            <h3 className="font-display text-lg font-semibold text-starlight mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              {/* Honeypot — hidden from real users, bots fill it */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="footer-website">Website</label>
                <input
                  id="footer-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
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
                  className="w-full rounded-lg border border-horizon bg-horizon/20 px-4 py-2.5 font-body text-sm text-starlight placeholder:text-starlight-muted/50 focus:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-colors duration-200"
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
                  className="w-full rounded-lg border border-horizon bg-horizon/20 px-4 py-2.5 font-body text-sm text-starlight placeholder:text-starlight-muted/50 focus:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-colors duration-200"
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
                  className="w-full resize-none rounded-lg border border-horizon bg-horizon/20 px-4 py-2.5 font-body text-sm text-starlight placeholder:text-starlight-muted/50 focus:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-colors duration-200"
                />
              </div>

              {status === "sent" && (
                <p className="text-plasma font-body text-sm text-center">
                  Message sent! We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-dwarf font-body text-sm text-center">
                  Failed to send. Please try again or email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-gold px-5 py-2.5 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
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
