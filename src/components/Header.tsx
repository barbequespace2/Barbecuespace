'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu'; // Import the new mobile menu component

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Menu', href: '/menu' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-[33px] z-50 mx-auto flex max-w-[1243px] items-center justify-between rounded-[20px] border-b-2 border-b-[rgba(125,1,8,0.15)] bg-black px-[70px] py-2.5 backdrop-blur-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/header-logo.svg"
            alt="Company Logo"
            width={136.1}
            height={96.574}
            className="aspect-[136.1/96.57] h-[96.574px] w-[136.1px] flex-shrink-0"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden flex flex-col justify-center items-center gap-1.5"
  aria-label="Toggle menu"
>
  <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F] transition-transform duration-300"></span>
  <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F] transition-opacity duration-300"></span>
  <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F] transition-transform duration-300"></span>
</button>

        {/* Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="text-white text-lg font-medium">
                {item.name}
              </span>
            </Link>
          ))}
          <Link href="/contactus">
            <button className="flex items-center justify-center gap-2.5 rounded-[500px] bg-[#E3010F] px-[35px] py-[14px] font-bold text-white">
              Contact Us
            </button>
          </Link>
        </nav>
      </header>

      {/* Mobile Menu (Conditionally Rendered) */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}