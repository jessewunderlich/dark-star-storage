"use client";

import { useState } from "react";

const faqs = [
  {
    id: "hours",
    question: "What are your access hours?",
    answer:
      "Dark Star Storage is open 24 hours a day, 7 days a week — including holidays. Your gate code and smart lock access are active around the clock. There is no staffed office, so access is always self-serve.",
  },
  {
    id: "payment",
    question: "How does payment work?",
    answer:
      "We use automated monthly billing. You'll set up a payment method during the online rental process and autopay handles every billing cycle from there. You can update your payment info anytime through your account portal.",
  },
  {
    id: "climate",
    question: "Do you offer climate-controlled units?",
    answer:
      "Yes. We offer climate-controlled units that maintain consistent temperature and humidity year-round — important for furniture, electronics, documents, and anything sensitive to Minnesota winters. Climate-controlled units are marked on each listing.",
  },
  {
    id: "access",
    question: "How do I access my unit?",
    answer:
      "After completing your rental online, you'll receive a gate code and smart lock credentials by email — usually within minutes. Your phone acts as your key. No physical key to lose, no office visit required.",
  },
  {
    id: "security",
    question: "How is the facility secured?",
    answer:
      "The property is monitored by security cameras 24/7. The perimeter gate requires a unique access code, and each unit uses a smart lock tied to your account. All activity is logged.",
  },
  {
    id: "lease",
    question: "What are the lease terms?",
    answer:
      "We offer month-to-month leases with no long-term commitment required. You can move out with 30 days' notice. There are no setup fees and no penalty for ending your rental early.",
  },
  {
    id: "move-in",
    question: "How quickly can I move in?",
    answer:
      "Same day in most cases. Complete the online rental, e-sign your lease, and your access credentials are sent immediately. As long as the unit is available, you can be there within the hour.",
  },
  {
    id: "prohibited",
    question: "What items are prohibited?",
    answer:
      "You may not store hazardous materials (fuel, chemicals, paint, explosives), perishable food, live animals, or anything illegal. Vehicles must be registered and non-operational vehicles require prior approval. When in doubt, contact us before moving anything in.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 px-6 bg-void-black">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          Frequently Asked <span className="text-gold">Questions</span>
        </h2>
        <p className="mt-4 text-center font-body text-starlight-muted">
          Everything you need to know before you store.
        </p>

        <dl className="mt-12 space-y-2">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-btn-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isOpen
                    ? "border-gold/40 bg-gold/5"
                    : "border-horizon bg-void-black hover:border-gold/20"
                }`}
              >
                <dt>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-inset rounded-xl"
                  >
                    <span
                      className={`font-display text-base font-semibold transition-colors ${
                        isOpen ? "text-gold" : "text-starlight"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 font-mono text-xs transition-all duration-200 ${
                        isOpen ? "text-gold rotate-180" : "text-starlight-muted"
                      }`}
                    >
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 font-body text-sm leading-relaxed text-starlight-muted">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
