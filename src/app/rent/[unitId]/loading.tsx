import BlackHoleLogo from "@/components/BlackHoleLogo";

export default function RentLoading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-void-black px-6"
      aria-label="Loading unit details"
      aria-busy="true"
    >
      <BlackHoleLogo size={80} className="animate-accretion" />
      <div className="mt-6 h-8 w-48 rounded-lg bg-horizon animate-pulse" />
      <div className="mt-8 w-full max-w-md rounded-xl border border-horizon bg-horizon/30 p-8 space-y-6">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="h-10 w-24 rounded bg-horizon animate-pulse" />
            <div className="h-4 w-32 rounded bg-horizon animate-pulse" />
          </div>
          <div className="space-y-2 text-right">
            <div className="h-8 w-16 rounded bg-gold/20 animate-pulse ml-auto" />
            <div className="h-3 w-12 rounded bg-horizon animate-pulse ml-auto" />
          </div>
        </div>
        <div className="h-3 w-full rounded bg-horizon animate-pulse" />
        <div className="h-12 w-full rounded-lg bg-gold/20 animate-pulse" />
        <div className="h-12 w-full rounded-lg bg-horizon animate-pulse" />
      </div>
    </div>
  );
}
