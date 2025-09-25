'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

// --- MOCK DATA FOR GALLERY ---
const galleryImages = [
  { src: '/about-image.svg', alt: 'Gallery Image 1' },
  { src: '/about-image.svg', alt: 'Gallery Image 2' },
  { src: '/about-image.svg', alt: 'Gallery Image 3' },
  { src: '/about-image.svg', alt: 'Gallery Image 4' },
  { src: '/about-image.svg', alt: 'Gallery Image 5' },
];

// --- SINGLE IMAGE COMPONENT ---
function SingleImageSection({ imageSrc, altText, width, height }: { imageSrc: string; altText: string; width: number; height: number; }) {
  return (
    <div className="w-full flex justify-center py-16" data-aos="fade-up" data-aos-delay={200}>
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        <Image src={imageSrc} alt={altText} fill style={{ objectFit: 'contain' }} />
      </div>
    </div>
  );
}

// --- GALLERY CARD COMPONENT (MATCHING DESIGN SPECS) ---
function GalleryCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="flex flex-col items-start flex-shrink-0"
      style={{
        width: '375.933px',
        height: '211.87px',
        padding: '17.765px',
        gap: '13.666px',
        flexDirection: 'column',
        aspectRatio: '375.933/211.87',
        background: '#000',
        borderRadius: '9.689px',
        border: '0.969px solid #E3010F',
      }}
      data-aos="zoom-in"
      data-aos-delay={100}
    >
      <div
        className="relative flex justify-center items-center w-full"
        style={{ height: '176.34px', padding: '40.094px 103.035px 39.202px 100.605px' }}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover', borderRadius: '9.689px' }} />
      </div>
      <p className="text-white font-satoshi text-left">{alt}</p>
    </div>
  );
}

// --- MAIN GALLERY PAGE ---
export default function GalleryPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, easing: 'ease-in-out', offset: 100 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[#181818]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/gallary-bg.png')` }}
        data-aos="fade-zoom-in"
        data-aos-delay={100}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-50 z-[1]"></div>
        <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(0deg, #171717 5%, rgba(23,23,23,0.1) 100%)' }}></div>
        <div className="relative z-[3] text-center">
          <h1 className={`${greatVibes.className} text-[#E3010F] font-normal text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-[55%] pt-40 text-center`}>
            Gallery
          </h1>
          <p className="mt-5 font-satoshi text-white text-lg sm:text-xl" data-aos="fade-up" data-aos-delay="250">
            A glimpse into our world of flavors, ambience, and unforgettable dining moments.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16 flex flex-wrap justify-center gap-10 sm:gap-8">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[48%] md:w-[375.933px] flex justify-center mb-6 sm:mb-0"
          >
            <GalleryCard src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Single Image Section */}
      <SingleImageSection imageSrc="/about-image.svg" altText="Barbecue Space interior" width={200} height={100} />
    </div>
  );
}
