import Link from "next/link";
import { getUnits } from "@/lib/storeganise";
import BlackHoleLogo from "@/components/BlackHoleLogo";

interface RentPageProps {
  params: Promise<{ unitId: string }>;
}

export default async function RentPage({ params }: RentPageProps) {
  const { unitId } = await params;
  const units = await getUnits();
  const unit = units.find((u) => u.id === unitId);

  if (!unit || !unit.available) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-void-black px-6">
        <BlackHoleLogo size={80} />
        <h1 className="mt-6 font-display text-3xl font-bold text-starlight">
          Unit Not Available
        </h1>
        <p className="mt-4 text-starlight-muted">
          This unit is no longer available or does not exist.
        </p>
        <Link
          href="/#units"
          className="mt-8 rounded-lg bg-gold px-6 py-3 font-display text-sm font-semibold text-void-black hover:bg-gold-light transition-colors"
        >
          Browse Units
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-void-black px-6">
      <BlackHoleLogo size={80} />
      <h1 className="mt-6 font-display text-3xl font-bold text-starlight">
        Rent Unit {unit.id}
      </h1>
      <div className="mt-8 w-full max-w-md rounded-xl border border-horizon bg-horizon/30 p-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="font-display text-4xl font-bold text-starlight">
              {unit.size}
            </p>
            <p className="text-sm text-starlight-muted mt-1">
              {unit.sqft} sq ft
              {unit.climate && (
                <span className="ml-2 text-nebula-light">Climate Controlled</span>
              )}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl font-bold text-gold">
              ${unit.price}
            </p>
            <p className="text-xs text-starlight-muted">/month</p>
          </div>
        </div>
        <p className="text-sm text-starlight-muted mb-8">{unit.fits}</p>

        <div className="space-y-4">
          <p className="text-center text-xs text-starlight-muted">
            Stripe checkout will activate when keys are configured.
            <br />
            Test card: 4242 4242 4242 4242
          </p>
          <button
            disabled
            className="w-full rounded-lg bg-gold px-6 py-4 font-display text-base font-semibold text-void-black opacity-60 cursor-not-allowed"
          >
            Proceed to Payment (Coming Soon)
          </button>
          <Link
            href="/#units"
            className="block w-full rounded-lg border border-horizon px-6 py-3 text-center font-display text-sm font-semibold text-starlight hover:border-gold hover:text-gold transition-colors"
          >
            Back to Units
          </Link>
        </div>
      </div>
    </div>
  );
}
