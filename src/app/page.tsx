import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UnitBrowser from "@/components/UnitBrowser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void-black">
      <Navbar />
      <Hero />
      <UnitBrowser />
      <HowItWorks />
      <Footer />
    </main>
  );
}
