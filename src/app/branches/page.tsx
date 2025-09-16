'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

// --- MOCK DATA ---
const branchesData = [
  {
    name: 'Kumarapuram',
    address: ['Poonthi Road', 'Near Kims Hospital', 'Trivandrum'],
    phone: '+91 95390 94555',
    imageSrc: '/branch-1.png',
  },
  {
    name: 'Kazhakuttam',
    address: ['NH 66 Bypass', 'Near Technopark', 'Trivandrum'],
    phone: '+91 98765 43210',
    imageSrc: '/branch-1.png',
  },
  {
    name: 'Pattom',
    address: ["Pattom Palace Rd", "Opp. St. Mary's School", 'Trivandrum'],
    phone: '+91 91234 56789',
    imageSrc: '/branch-1.png',
  },
  {
    name: 'Kowdiar',
    address: ['Kowdiar Main Road', 'Near Tennis Club', 'Trivandrum'],
    phone: '+91 94444 55555',
    imageSrc: '/branch-1.png',
  },
  {
    name: 'Vazhuthacaud',
    address: ['Forest Office Lane', 'Near Kalabhavan Theatre', 'Trivandrum'],
    phone: '+91 96666 77777',
    imageSrc: '/branch-1.png',
  },
];

// --- PLACEHOLDER COMPONENT ---
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
      data-aos-delay="200"
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

// --- BRANCH CARD COMPONENT ---
type BranchCardProps = {
  name: string;
  address: string[];
  phone: string;
  imageSrc: string;
};

function BranchCard({ name, address, phone, imageSrc }: BranchCardProps) {
  return (
    <div
      className="flex flex-col items-center flex-shrink-0 bg-black overflow-hidden"
      style={{
        width: '302.603px',
        padding: '14.038px 14.819px 32.608px 14.817px',
        borderRadius: '7.799px',
        border: '0.78px solid #E3010F',
      }}
      data-aos="zoom-in"
      data-aos-delay="150"
    >
      {/* Image Div (Top) */}
      <div className="w-full mb-4">
        <Image
          src={imageSrc}
          alt={`${name} branch`}
          width={273}
          height={200}
          className="object-cover rounded-md"
        />
      </div>
      {/* Content Div (Bottom) */}
      <div className="flex flex-col items-start w-full text-left">
        <h3
          className="font-satoshi font-medium text-[#E3010F]"
          style={{ fontSize: '18px' }}
        >
          {name}
        </h3>
        <p
          className="mt-2 font-satoshi font-normal text-white"
          style={{ fontSize: '13px' }}
        >
          {address.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p
          className="mt-4 font-satoshi font-medium text-[#E3010F]"
          style={{ fontSize: '14px' }}
        >
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
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('/branch-image-bg.png')`,
        }}
        data-aos="fade-zoom-in"
        data-aos-delay="100"
      >
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-500 opacity-50 z-[1]"></div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(0deg, #171717 5%, rgba(23, 23, 23, 0.1) 100%)',
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-[3] text-center">
          <h1
            className="font-great-vibes text-[#E3010F]"
            style={{
              fontSize: '100px',
              fontWeight: 400,
              lineHeight: '55.764%',
              paddingTop: '120px',
            }}
          >
            Branches
          </h1>
          <p
            className="mt-8 font-satoshi text-white"
            style={{
              fontSize: '22px',
              fontWeight: 400,
            }}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Find your nearest barbequespace
          </p>
        </div>
      </div>

      {/* Branches Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div
          className="flex flex-wrap justify-center gap-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {branchesData.slice(0, 3).map((branch, idx) => (
            <div key={branch.name} data-aos="zoom-in" data-aos-delay={200 + idx * 100}>
              <BranchCard {...branch} />
            </div>
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {branchesData.slice(3, 5).map((branch, idx) => (
            <div key={branch.name} data-aos="zoom-in" data-aos-delay={300 + idx * 100}>
              <BranchCard {...branch} />
            </div>
          ))}
        </div>
      </div>

      {/* Single Image Section before Footer */}
      <SingleImageSection
        imageSrc="/about-image.svg"
        altText="Barbecue Space restaurant interior"
        width={200}
        height={100}
      />
    </div>
  );
}
