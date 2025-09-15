'use client';

import Link from 'next/link';
import Image from 'next/image';

const socialMediaIcons = [
  { href: '#', src: '/facebook.svg', alt: 'Facebook' },
  { href: '#', src: '/instagram.svg', alt: 'Instagram' },
  { href: '#', src: '/twitter.svg', alt: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-[#E3010F] flex flex-col items-center justify-center py-8 px-[71px] self-stretch">
      {/* Top Section: Three columns */}
      <div className="flex w-full items-start justify-between">
        {/* Leftmost Div (remains the same) */}
        <div className="flex flex-col items-start gap-3">
          <p className="font-satoshi text-black text-[28px] font-medium leading-none tracking-[-1.12px]">
            Contact Us
          </p>
          <div className="flex flex-col gap-2">
            <span className="font-satoshi text-black text-base font-normal">
              <Link href="/" className="mr-1">Home</Link>
              <span className="mr-1">/</span>
              <Link href="/aboutus">About Us</Link>
            </span>
            <span className="font-satoshi text-black text-base font-normal">
              <Link href="/menu" className="mr-1">Menu</Link>
              <span className="mr-1">/</span>
              <Link href="/branches" className="mr-1">Branches</Link>
              <span className="mr-1">/</span>
              <Link href="/gallery">Gallery</Link>
            </span>
          </div>
          <div className="flex gap-2 mt-4">
            {socialMediaIcons.map((icon) => (
              <Link key={icon.alt} href={icon.href}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Center Div (content now aligns to the left) */}
        <div className="flex flex-col items-start justify-center">
          <p className="font-satoshi text-black text-[10px] font-bold uppercase tracking-[0.4px] leading-[130%]">
            Contact us
          </p>
          <p className="mt-1 font-satoshi text-black text-xl font-medium tracking-[-0.4px] leading-[120%]">
            +91 98765 43210
          </p>
          <p className="mt-4 font-satoshi text-black text-[10px] font-bold uppercase tracking-[0.4px] leading-[130%]">
            Email
          </p>
          <p className="mt-1 font-satoshi text-black text-xl font-medium tracking-[-0.4px] leading-[120%]">
            hello@bbqspace.com
          </p>
        </div>

        {/* Right Div with Arrow and Credits (content now aligns to the right) */}
        <div className="flex flex-col items-end justify-center">
          <Image
            src="/arrowtop.png"
            alt="Back to top"
            width={50}
            height={50}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <div className="mt-8 text-right"> {/* Increased top margin for more space and added text-right for alignment */}
            <p className="font-satoshi text-black text-[12px] font-medium leading-[130%]">
              Copyright © 2025 . Powered by Barbeque Space
            </p>
            <p className="font-satoshi text-black text-[12px] font-medium leading-[130%]">
              Designed and developed by Orque
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}