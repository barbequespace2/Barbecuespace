// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import localFont from 'next/font/local';
import AOSProvider from '@/components/AOSProvider'; // ✅ Import AOSProvider
import { SpeedInsights } from "@vercel/speed-insights/next"
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

export const metadata: Metadata = {
  title: 'My Responsive App',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${imperialScript.variable} ${satoshi.variable}`}>
      <head>
         <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
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
      </body>
    </html>
  );
}
