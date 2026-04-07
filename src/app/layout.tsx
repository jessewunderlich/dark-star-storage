import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
