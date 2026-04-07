"use client";

import { useState } from "react";
import BlackHoleLogo from "./BlackHoleLogo";

const PHONE = "(218) 555-0190";
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

            {/* Social icon placeholders */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Dark Star Storage on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-horizon text-starlight-muted hover:border-gold/40 hover:text-gold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {/* Facebook icon */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Dark Star Storage on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-horizon text-starlight-muted hover:border-gold/40 hover:text-gold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {/* Instagram icon */}
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
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
