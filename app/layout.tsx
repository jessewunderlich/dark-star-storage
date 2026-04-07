import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import BlackHoleLogo from '@/components/BlackHoleLogo';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: 'Dark Star Storage - Automated Self-Storage in Frazee, MN',
    template: '%s | Dark Star Storage',
  },
  description: 'Fully automated 24/7 self-storage. Rent online, access instantly, store forever. Frazee, Minnesota.',
  keywords: 'self storage, storage units, Frazee MN, climate controlled storage, automated storage, 24/7 access',
  authors: [{ name: 'Dark Star Storage' }],
  creator: 'Dark Star Storage',
  publisher: 'Dark Star Storage',
  openGraph: {
    title: 'Dark Star Storage',
    description: 'Your stuff. Safely consumed. Fully automated self-storage.',
    url: 'https://darkstarstorage.com',
    siteName: 'Dark Star Storage',
    images: [
      {
        url: '/og-image.png', // TODO: generate
        width: 1200,
        height: 630,
        alt: 'Dark Star Storage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dark Star Storage',
    description: 'Fully automated self-storage. Rent online, access 24/7.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // TODO
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang=\"en\" className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>
      <body className=\"bg-void-black text-starlight overflow-x-hidden\">
        {children}
      </body>
    </html>
  );
}
