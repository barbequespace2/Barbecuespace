'use client';

import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Menu', href: '/menu' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contactus' },
];

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 z-60 bg-black flex flex-col items-center justify-center p-8">
      {/* Menu Container with Red Border */}
      <div className="w-[358px] h-4/4 flex-shrink-0 bg-black rounded-[18px] border-2 border-[#E3010F] p-4 flex flex-col items-center justify-center relative">
        {/* Close Button (Moved inside the inner div) */}
        <button onClick={onClose} className="absolute top-4 left-4 text-[#E3010F] text-[3rem] font-bold">
          &times;
        </button>

        {/* Logo */}
        <Image
          src="/header-logo.svg"
          alt="Company Logo"
          width={136}
          height={96}
          className="mb-4"
        />
        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={onClose}>
              <span className="text-white text-xl font-bold">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;