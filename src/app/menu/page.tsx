'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function MenuPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, easing: 'ease-in-out', offset: 100 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white bg-[#171717]">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/menu-bg.png')` }}
        data-aos="fade-zoom-in"
        data-aos-delay={100}
      >
        <div className="absolute inset-0 bg-gray-500 opacity-50 z-[1]"></div>
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: 'linear-gradient(0deg, #171717 5%, rgba(23,23,23,0.1) 100%)',
          }}
        ></div>
        <div className="relative z-[3] text-center px-6">
          <h1
            className={`${greatVibes.className} text-[#E3010F] font-normal text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-[55%] pt-40`}
          >
            Menu
          </h1>
          <p
            className="mt-5 font-satoshi text-white text-lg sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Discover a menu crafted to satisfy every craving—from authentic Arabic grills and smoky
            barbecues to flavorful vegetarian delights,<br /> all prepared with our signature touch.
          </p>
        </div>
      </div>

      {/* Starters Section */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <h2
          className={`${greatVibes.className} text-[#E3010F] font-normal text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}
        >
          Starters
        </h2>

        {/* 4 Categories in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Arabic */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#E3010F',
                fontFamily: 'Satoshi',
                fontSize: '26px',
                fontWeight: 700,
              }}
            >
              Arabic
            </h3>
            <ul className="space-y-2">
              {[
                'French Fries',
                'Spicy Fries',
                'Loaded Fries',
                'Spicy Grilled Wings',
                'Smoke & Honey Wings',
                'Grilled Wings Platter',
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    color: '#FFF',
                    fontFamily: 'Satoshi',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tandoor */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#E3010F',
                fontFamily: 'Satoshi',
                fontSize: '26px',
                fontWeight: 700,
              }}
            >
              Tandoor
            </h3>
            <ul className="space-y-2">
              {[
                'Paneer Tikka',
                'Chicken Tikka',
                'Kanthari Chicken Tikka',
                'Afghani Chicken Tikka',
                'Chicken Tikka Platter',
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    color: '#FFF',
                    fontFamily: 'Satoshi',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Chinese */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#E3010F',
                fontFamily: 'Satoshi',
                fontSize: '26px',
                fontWeight: 700,
              }}
            >
              Chinese
            </h3>
            <ul className="space-y-2">
              {[
                'Crispy Fried Veg',
                'Veg 99',
                'Lolly Pop',
                'Kung Pao Chicken',
                'Beef Dry Fry (BDF)',
                'Golden Fried Prawns',
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    color: '#FFF',
                    fontFamily: 'Satoshi',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Naadan */}
          <div>
            <h3
              className="mb-4"
              style={{
                color: '#E3010F',
                fontFamily: 'Satoshi',
                fontSize: '26px',
                fontWeight: 700,
              }}
            >
              Naadan
            </h3>
            <ul className="space-y-2">
              {['Wings Fry', 'Chicken Leg Fry', 'Chicken 65', 'Tawa Prawns'].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    color: '#FFF',
                    fontFamily: 'Satoshi',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
