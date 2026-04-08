"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    id: 1,
    name: "Dale Hoffmann",
    initials: "DH",
    location: "Frazee, MN",
    rating: 5,
    date: "March 2025",
    text: "Rented a 5×10 unit last fall to store my fishing gear and ice auger over the summer. The whole process took maybe ten minutes online — gate code showed up in my email before I even closed my laptop. Zero complaints.",
  },
  {
    id: 2,
    name: "Tammy Brisk",
    initials: "TB",
    location: "Detroit Lakes, MN",
    rating: 5,
    date: "January 2025",
    text: "I was skeptical about a fully automated facility but it's been flawless. Climate-controlled unit kept my furniture in perfect shape through a brutal winter. Love being able to access it any time without calling anyone.",
  },
  {
    id: 3,
    name: "Rick & Sandy Olson",
    initials: "RO",
    location: "Perham, MN",
    rating: 5,
    date: "November 2024",
    text: "We downsized last year and needed somewhere to put the extra stuff while we figured things out. Dark Star made it so easy. The gate code, the online billing — it all just works. Wish more businesses ran this smoothly.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-gold text-gold"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-nebula to-gold">
      <span className="font-display text-sm font-bold text-void-black">{initials}</span>
    </div>
  );
}

export default function Reviews() {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="relative py-24 px-6 bg-void-black" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <h2 className="scroll-reveal text-center font-display text-4xl font-bold tracking-tight text-starlight md:text-5xl">
          What Our <span className="text-gold">Renters Say</span>
        </h2>
        <p className="scroll-reveal scroll-reveal-delay-1 mt-4 text-center font-body text-starlight-muted">
          Real people. Real storage. Zero hassle.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} rounded-xl border border-horizon bg-horizon/20 p-6 flex flex-col gap-4`}
            >
              <StarRating count={review.rating} />

              <p className="font-body text-sm text-starlight-muted leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-horizon/60 pt-4">
                <Avatar initials={review.initials} />
                <div>
                  <p className="font-display text-sm font-semibold text-starlight">
                    {review.name}
                  </p>
                  <p className="font-mono text-xs text-starlight-muted mt-0.5">
                    {review.location} &middot; {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
