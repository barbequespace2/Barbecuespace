import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Responsive App',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#181818]`}>
        <div className="relative">
          <Image
            src="/bg-whole.png"
            alt="Website background"
            fill // Fills the parent container
            className="object-cover" // Ensures the image covers the area without distortion
            quality={100} // Set a higher quality for the background image
            priority // Preloads the image
          />
          <Header />
          <main className="relative pt-[160px]">{children}</main>
        </div>
      </body>
    </html>
  );
}