export default function AccountLoading() {
  return (
    <div className="min-h-screen bg-void-black pt-24 px-6" aria-label="Loading account" aria-busy="true">
      <div className="mx-auto max-w-4xl">
        {/* Header skeleton */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 rounded-full bg-horizon animate-pulse" />
          <div className="space-y-2">
            <div className="h-6 w-48 rounded bg-horizon animate-pulse" />
            <div className="h-4 w-32 rounded bg-horizon animate-pulse" />
          </div>
        </div>

        {/* Banner skeleton */}
        <div className="mb-6 h-10 rounded-lg bg-gold/5 border border-gold/30 animate-pulse" />

        {/* Tabs skeleton */}
        <div className="flex gap-4 mb-8 border-b border-horizon pb-3">
          <div className="h-5 w-20 rounded bg-horizon animate-pulse" />
          <div className="h-5 w-20 rounded bg-horizon animate-pulse" />
          <div className="h-5 w-16 rounded bg-horizon animate-pulse" />
          <div className="h-5 w-20 rounded bg-horizon animate-pulse" />
        </div>

        {/* Cards skeleton */}
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-horizon bg-horizon/20 p-6 space-y-4">
              <div className="h-4 w-24 rounded bg-horizon animate-pulse" />
              <div className="h-8 w-32 rounded bg-horizon animate-pulse" />
              <div className="h-3 w-full rounded bg-horizon animate-pulse" />
              <div className="h-3 w-3/4 rounded bg-horizon animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
