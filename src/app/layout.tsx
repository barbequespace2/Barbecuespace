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

// ✅ --- Enhanced SEO Metadata ---
export const metadata: Metadata = {
  // Sets the base URL for resolving images, etc.
  metadataBase: new URL('https://www.barbecuespace.in'),

  title: {
    default: 'Barbecue Space Thiruvananthapuram',
    template: `%s | Barbecue Space`, // Used for child pages, e.g., "Menu | Barbecue Space"
  },
  description: 'Discover the authentic taste of Arabic grills, smoky barbecues, and flavorful delights at Barbecue Space. A premium dining experience in Thiruvananthapuram.',

  keywords: ['Barbeque Space, Restaurants near you, all you can eat, bbq, bbq nation, veg buffet barbecue', 'arabic grill', 'restaurant', 'Thiruvananthapuram', 'kuzhimandi', 'al-faham', 'dining', 'food in trivandrum','best manthi in tvm','best barbecues in trivandrum','barbecue space'],

  // --- Open Graph (for Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: 'Barbecue Space | Authentic Arabic Grills & Smoky Barbecues',
    description: 'A premium dining experience in Thiruvananthapuram, serving the best in smoky delights.',
    url: 'https://www.barbecuespace.in',
    siteName: 'Barbecue Space',
    images: [
      {
        url: '/about-image.svg', // IMPORTANT: Create a 1200x630px image and place it in the /public folder
        width: 1200,
        height: 630,
        alt: 'A platter of delicious barbecue from Barbecue Space',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // --- Twitter Card ---
  twitter: {
    card: 'summary_large_image',
    title: 'Barbecue Space | Authentic Arabic Grills & Smoky Barbecues',
    description: 'A premium dining experience in Thiruvananthapuram, serving the best in smoky delights.',
    images: ['/about-image.svg'], // IMPORTANT: The same OG image will be used here
  },

  // --- Search Engine Instructions ---
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${imperialScript.variable} ${satoshi.variable}`}>
      {/* ❌ The <head> tag is no longer needed here. Next.js handles it with the metadata object. */}
      <head>
        <link rel="canonical" href="https://www.barbecusepace.in/" />
        <meta name="google-site-verification" content="Weub2Zua8vMxhG7KNJQ1Y2CM3vvqA6VbFknRaRp4mlA" />
          <meta name="description" content="Barbecue Space offers authentic, mouth-watering barbecue dishes with the perfect blend of spices and flavors. Visit us for an unforgettable dining experience." />
          <meta name="keywords" content="barbecue, grill, restaurant, food, bbq, Barbecue Space" />
      </head>
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