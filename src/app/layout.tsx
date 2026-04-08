import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkstarstorage.com"),
  title: "Dark Star Storage — Your Stuff. Safely Consumed.",
  description:
    "Fully automated self-storage with 24/7 smart access, online rentals, and zero hassle. Dark Star Storage — once it's in, it's secure.",
  keywords: [
    "self storage",
    "storage units",
    "automated storage",
    "smart storage",
    "climate controlled storage",
  ],
  openGraph: {
    title: "Dark Star Storage",
    description: "Your stuff. Safely consumed.",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dark Star Storage",
  description:
    "Fully automated self-storage with 24/7 smart access, online rentals, and zero hassle. Located in Frazee, Minnesota.",
  url: "https://darkstarstorage.com",
  telephone: "+1-218-438-7483",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frazee",
    addressRegion: "MN",
    postalCode: "56544",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.7302,
    longitude: -95.7,
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  image: "https://darkstarstorage.com/opengraph-image",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-void-black text-starlight font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
