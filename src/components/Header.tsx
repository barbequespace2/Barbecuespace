'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 1. Import usePathname hook
import MobileMenu from './MobileMenu';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Menu', href: '/menu' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // 2. Get the current path

  return (
    <>
      <header className="fixed inset-x-0 top-[33px] z-50 mx-auto flex max-w-[1243px] items-center justify-between rounded-[20px] border-b-3 border-b-[rgba(125,1,8,0.50)] bg-black px-[70px] py-2.5 backdrop-blur-sm md:justify-normal">
        {/* Left Column (Logo) */}
        <div className="md:flex-1 md:flex md:justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/header-logo.svg"
              alt="Company Logo"
              width={136.1}
              height={96.574}
              className="aspect-[136.1/96.57] h-[96.574px] w-[136.1px] flex-shrink-0"
            />
          </Link>
        </div>

        {/* Center Column (Navigation Links - Hidden on Mobile) */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          {navItems.map((item) => {
            // 3. Check if the current link is active
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href}>
                {/* Apply red text if active, otherwise white */}
                <span
                  className={`text-lg font-medium ${
                    isActive ? 'text-[#E3010F]' : 'text-white'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Column (Contact Button - Hidden on Mobile) */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link href="/contactus">
            <button className="flex items-center justify-center gap-2.5 rounded-[500px] bg-[#E3010F] px-[35px] py-[14px] font-bold text-white">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile (Visible only on mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F]"></span>
          <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F]"></span>
          <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F]"></span>
        </button>
      </header>

      {/* Mobile Menu (Conditionally Rendered) */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}