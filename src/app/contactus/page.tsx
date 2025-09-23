'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleImageSection from '../../components/SingleImageSection';
import Image from 'next/image';

export default function ContactUsPage() {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation duration
      once: false,   // animate every time you scroll
      easing: 'ease-in-out',
      offset: 100,   // trigger slightly before element is in viewport
    });
  }, []);

  return (
    <div className="bg-[#181818] text-white min-h-screen">

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[250px] sm:h-[300px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-bg.png')" }}
        data-aos="fade-in"
      >
        <div
          className="hidden md:block absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(0deg, #171717 5%, rgba(23, 23, 23, 0.1) 100%)',
          }}
        ></div>

        <h1
          className="relative z-20 text-center text-[#E3010F] font-normal leading-[0.55] text-3xl sm:text-5xl md:text-[6rem]"
          style={{ fontFamily: "Great Vibes, cursive", top: "60px" }}
          data-aos="zoom-in"
        >
          Contact Us
        </h1>
      </div>

      {/* Main Section 1 */}
      <div className="grid grid-cols-2 gap-4 sm:gap-10 px-4 sm:px-10 py-6 sm:py-8 max-w-6xl mx-auto h-[167px] items-center">
        {/* Left text */}
        <div className="flex flex-col gap-2" style={{ width: '100%', maxWidth: '530px' }} data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Get in touch with us
          </h2>
          <p className="text-base sm:text-lg md:text-2xl">
            We&apos;re here to assist you.
          </p>
        </div>

        {/* Right social icons */}
        <div className="flex flex-col items-center justify-center gap-4 ml-auto" data-aos="fade-left">
          <a href="#" aria-label="Instagram">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
              <Image src="/instagram-red.svg" alt="Instagram" width={16} height={16} />
            </div>
          </a>
          <a href="#" aria-label="Facebook">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
              <Image src="/facebook-red.svg" alt="Facebook" width={16} height={16} />
            </div>
          </a>
          <a href="#" aria-label="Twitter">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
              <Image src="/twitter-red.svg" alt="Twitter" width={16} height={16} />
            </div>
          </a>
        </div>
      </div>

      {/* Main Section 2 - Contact Form */}
      <div className="px-4 sm:px-10 py-12 sm:py-16 max-w-6xl mx-auto" data-aos="fade-up">
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b border-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-500 focus:outline-none text-sm sm:text-base"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="self-start px-6 sm:px-8 py-2 sm:py-3 text-white rounded-full text-sm sm:text-base"
            style={{ background: "#E3010F" }}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Main Section 3 - Contact Info */}
      <div className="px-4 sm:px-10 py-12 sm:py-16 max-w-6xl mx-auto flex flex-wrap justify-between gap-6">
        <div className="flex-1 min-w-[180px]" data-aos="fade-up">
          <h3 className="text-sm sm:text-base font-normal">Contact now</h3>
          <p className="mt-2 text-xl sm:text-2xl md:text-2xl font-bold">
            We are always happy <br /> to assist you
          </p>
        </div>
        <div className="flex-1 min-w-[180px]" data-aos="fade-up" data-aos-delay="150">
          <h4 className="text-sm sm:text-base font-bold">Email Address</h4>
          <div className="w-12 h-[2px] bg-white mt-1 mb-2"></div>
          <p className="font-bold text-sm sm:text-base">help@info.com</p>
          <p className="mt-2 text-xs sm:text-sm">
            Assistance hours:
            <br /> Monday - Friday 6 am to 8 pm EST
          </p>
        </div>
        <div className="flex-1 min-w-[180px]" data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-sm sm:text-base font-bold">Number</h4>
          <p className="font-bold text-sm sm:text-base">(808) 998-34256</p>
          <p className="mt-2 text-xs sm:text-sm">
            Assistance hours:
            <br /> Monday - Friday 6 am to 8 pm EST
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 sm:px-10 max-w-6xl mx-auto flex justify-center pb-20" data-aos="fade-up" data-aos-delay="350">
        <SingleImageSection
          imageSrc="/about-image.svg"
          altText="Barbecue Space restaurant interior"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
