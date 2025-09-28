// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import localFont from 'next/font/local';
import AOSProvider from '@/components/AOSProvider';
import { SpeedInsights } from "@vercel/speed-insights/next";

const greatVibes = localFont({
  src: '../../public/fonts/GreatVibes-Regular.ttf',
  variable: '--font-great-vibes',
});

const imperialScript = localFont({
  src: '../../public/fonts/ImperialScript-Regular.ttf',
  variable: '--font-imperial-script',
});

const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});

// ✅ SEO Metadata with Favicon, Canonical & Extras
export const metadata: Metadata = {
  metadataBase: new URL('https://www.barbecuespace.in'),

  title: {
    default: 'Barbecue Space Thiruvananthapuram',
    template: `%s | Barbecue Space`,
  },
  description:
    'Discover the authentic taste of Arabic grills, smoky barbecues, and flavorful delights at Barbecue Space. A premium dining experience in Thiruvananthapuram.',

  keywords: [
    'Barbeque Space',
    'Restaurants near you',
    'all you can eat',
    'bbq',
    'bbq nation',
    'veg buffet barbecue',
    'arabic grill',
    'restaurant',
    'Thiruvananthapuram',
    'kuzhimandi',
    'al-faham',
    'dining',
    'food in trivandrum',
    'best manthi in tvm',
    'best barbecues in trivandrum',
    'barbecue space',
  ],

  openGraph: {
    title: 'Barbecue Space | Authentic Arabic Grills & Smoky Barbecues',
    description:
      'A premium dining experience in Thiruvananthapuram, serving the best in smoky delights.',
    url: 'https://www.barbecuespace.in',
    siteName: 'Barbecue Space',
    images: [
      {
        url: '/about-image.svg',
        width: 1200,
        height: 630,
        alt: 'A platter of delicious barbecue from Barbecue Space',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Barbecue Space | Authentic Arabic Grills & Smoky Barbecues',
    description:
      'A premium dining experience in Thiruvananthapuram, serving the best in smoky delights.',
    images: ['/about-image.svg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ Favicons
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  // ✅ Canonical URL
  alternates: {
    canonical: 'https://www.barbecuespace.in',
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${imperialScript.variable} ${satoshi.variable}`}
    >
      <body className="bg-[#181818]">
        <AOSProvider>
          <div className="relative">
            <Image
              src="/bg-whole.png"
              alt="Website background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
            <div className="relative z-10">
              <Header />
              <main className="pt-[0px]">{children}</main>
              <Footer />
            </div>
          </div>
        </AOSProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
