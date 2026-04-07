import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UnitBrowser from "@/components/UnitBrowser";
import Footer from "@/components/Footer";
import { getUnits } from "@/lib/storeganise";

export default async function Home() {
  const units = await getUnits();

  return (
    <main className="min-h-screen bg-void-black">
      <Navbar />
      <Hero />
      <UnitBrowser units={units} />
      <HowItWorks />
      <Footer />
    </main>
  );
}
