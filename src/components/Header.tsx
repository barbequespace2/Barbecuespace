'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  return (
    <>
      <header
  className="fixed inset-x-0 top-0 z-50 flex items-center justify-between 
             border-b-3 border-b-[rgba(125,1,8,0.50)] 
             bg-[#181818] md:bg-black 
             px-4 py-4 
             md:top-[33px] md:mx-auto md:max-w-[1243px] 
             md:rounded-[20px] md:px-[70px] md:justify-normal"
>

        {/* Left Column (Hamburger - only mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F]"></span>
          <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F]"></span>
          <span className="block h-0.5 w-6 bg-transparent border border-[#E3010F]"></span>
        </button>

        {/* Center Column (Logo) */}
        <div className="flex-1 flex justify-center md:justify-start">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
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
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
