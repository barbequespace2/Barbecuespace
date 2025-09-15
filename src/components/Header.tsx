'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Menu', href: '/menu' },
  { name: 'Branches', href: '/branches' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-[33px] z-50 mx-auto flex max-w-[1243px] items-center justify-between rounded-[20px] border-b-2 border-b-[rgba(125,1,8,0.15)] bg-black px-[70px] py-2.5 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        {/* Replace with your logo image path */}
        <Image
          src="/header-logo.svg"
          alt="Company Logo"
          width={136.1}
          height={96.574}
          className="aspect-[136.1/96.57] h-[96.574px] w-[136.1px] flex-shrink-0"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <span
              className={`text-lg font-medium transition-colors duration-300 ${
                pathname === item.href ? 'text-[#E3010F]' : 'text-white'
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      {/* Contact Us Button */}
      <Link href="/contactus">
        <button className="flex items-center justify-center gap-2.5 rounded-[500px] bg-[#E3010F] px-[35px] py-[14px] font-bold text-white">
          Contact Us
        </button>
      </Link>
    </header>
  );
}