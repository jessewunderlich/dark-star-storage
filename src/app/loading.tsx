export default function Loading() {
  return (
    <div
      className="min-h-screen bg-void-black"
      aria-label="Loading page content"
      aria-busy="true"
    >
      {/* Navbar skeleton */}
      <div className="fixed top-0 z-50 w-full border-b border-horizon bg-void-black/90 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-horizon animate-pulse" />
            <div className="h-5 w-24 rounded bg-horizon animate-pulse" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="h-4 w-12 rounded bg-horizon animate-pulse" />
            <div className="h-4 w-16 rounded bg-horizon animate-pulse" />
            <div className="h-4 w-10 rounded bg-horizon animate-pulse" />
            <div className="h-9 w-24 rounded-lg bg-gold/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 pt-20">
        <div className="h-40 w-40 rounded-full bg-horizon animate-pulse" />
        <div className="h-12 w-72 rounded-lg bg-horizon animate-pulse md:w-96" />
        <div className="h-8 w-48 rounded-lg bg-gold/20 animate-pulse" />
        <div className="mt-2 space-y-2 flex flex-col items-center">
          <div className="h-4 w-80 rounded bg-horizon animate-pulse" />
          <div className="h-4 w-64 rounded bg-horizon animate-pulse" />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="h-12 w-36 rounded-lg bg-gold/30 animate-pulse" />
          <div className="h-12 w-36 rounded-lg bg-horizon animate-pulse" />
        </div>
      </div>

      {/* Units section skeleton */}
      <div className="py-24 px-6 bg-horizon/20">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="h-10 w-56 rounded-lg bg-horizon animate-pulse" />
            <div className="h-4 w-72 rounded bg-horizon animate-pulse" />
          </div>

          {/* Filter pills */}
          <div className="flex justify-center gap-2 mb-10">
            <div className="h-8 w-20 rounded-full bg-gold/30 animate-pulse" />
            <div className="h-8 w-36 rounded-full bg-horizon animate-pulse" />
            <div className="h-8 w-28 rounded-full bg-horizon animate-pulse" />
          </div>

          {/* Unit cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-horizon bg-void-black p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="h-3 w-16 rounded bg-horizon animate-pulse" />
                  <div className="h-5 w-20 rounded-full bg-horizon animate-pulse" />
                </div>
                <div className="h-9 w-24 rounded-lg bg-horizon animate-pulse" />
                <div className="h-3 w-32 rounded bg-horizon animate-pulse" />
                <div className="h-3 w-full rounded bg-horizon animate-pulse" />
                <div className="h-3 w-3/4 rounded bg-horizon animate-pulse" />
                <div className="h-10 w-full rounded-lg bg-gold/20 animate-pulse mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
