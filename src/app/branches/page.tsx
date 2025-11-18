'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

// --- MOCK DATA ---
const branchesData = [
  {
    name: 'Kumarapuram',
    address: ['Poonthi Road', 'Near Kims Hospital', 'Trivandrum'],
    phone: '+91 95390 94555',
    imageSrc: '/bbq-space-kumarapuram.webp',
  },
  {
    name: 'Kazhakuttam',
    address: ['NH 66 Bypass', 'Near Technopark', 'Trivandrum'],
    phone: '+91 95390 68888',
    imageSrc: '/bbq-space-kazhakootam.webp',
  },
  {
    name: 'Pattom',
    address: ["OPP ARCH BISHOP'S HOUSE", "Pattom Trivandrum"],
    phone: '+91 81398 35551',
    imageSrc: '/bbq-space-pattom.webp',
  },
  {
    name: 'Palayam',
    address: ['Anna’s arcade building', 'Opp Canara bank', 'Spencer Jn Palayam '],
    phone: '+91 95390 65555',
    imageSrc: '/palayam.avif',
  },
  {
    name: 'Vazhuthacaud',
    address: ['Opp all India radio', 'DPI Vazhuthacaud', 'Trivandrum'],
    phone: '+91 95392 65555',
    imageSrc: '/branch-1.png',
  },
  {
    name: 'Tiffin Space - Vazhuthacaud',
    address: [
      'Junction, near Vijaya Press, DPI',
      'Vazhuthacaud, Thiruvananthapuram, Kerala 695014',
    ],
    phone: '+91 96335 35559',
    imageSrc: '/tiffin-space.webp',
  },
];

// --- SINGLE IMAGE SECTION ---
function SingleImageSection({
  imageSrc,
  altText,
  width,
  height,
}: {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className="w-full flex justify-center py-16"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <div
        className="relative"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

// --- BRANCH CARD ---
type BranchCardProps = {
  name: string;
  address: string[];
  phone: string;
  imageSrc: string;
};

function BranchCard({ name, address, phone, imageSrc }: BranchCardProps) {
  return (
    <div
      className="flex flex-col items-center bg-black overflow-hidden"
      style={{
        width: '302px',
        minHeight: '420px',
        padding: '14px 15px 32px 15px',
        borderRadius: '8px',
        border: '0.78px solid #E3010F',
      }}
      data-aos="zoom-in"
      data-aos-delay={150}
    >
      {/* Image */}
      <div className="w-full h-[200px] mb-4 relative overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={`${name} branch`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start w-full text-left">
        <h3 className="font-satoshi font-medium text-[#E3010F] text-[18px]">
          {name}
        </h3>
        <p className="mt-2 font-satoshi font-normal text-white text-[13px] h-[60px] overflow-hidden">
          {address.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p className="mt-4 font-satoshi font-medium text-[#E3010F] text-[14px]">
          Contact No : {phone}
        </p>
      </div>
    </div>
  );
}

// --- MAIN PAGE ---
export default function BranchesPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[#181818]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/branch-image-bg.png')` }}
        data-aos="fade-zoom-in"
        data-aos-delay={100}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-50 z-[1]"></div>
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(0deg, #171717 5%, rgba(23, 23, 23, 0.1) 100%)',
          }}
        ></div>

        <div className="relative z-[3] text-center">
          <h1
            className={`${greatVibes.className} text-[#E3010F] font-normal text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-[55%] pt-40`}
          >
            Branches
          </h1>
          <p
            className="mt-3 font-satoshi text-white text-[22px]"
            data-aos="fade-up"
            data-aos-delay={250}
          >
            Find your nearest barbequespace
          </p>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="container mx-auto px-4 py-16">
        <div
          className="flex flex-wrap justify-center gap-8 mb-8"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          {branchesData.slice(0, 4).map((branch) => (
            <BranchCard key={branch.name} {...branch} />
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          {branchesData.slice(4).map((branch) => (
            <BranchCard key={branch.name} {...branch} />
          ))}
        </div>
      </div>

      {/* Single Image Section */}
      <SingleImageSection
        imageSrc="/about-image.svg"
        altText="Barbecue Space restaurant interior"
        width={200}
        height={100}
      />
    </div>
  );
}
