'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SingleImageSection from '@/components/SingleImageSection';
import Image from 'next/image';

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({
      duration: 900, // slightly faster than homepage
      once: false,
      easing: 'ease-in-out',
      offset: 100, // trigger slightly earlier
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white bg-[#181818]">

      {/* Hero Section */}
      <div
        className="relative w-full h-80 md:h-96 flex items-center justify-center"
        data-aos="fade-zoom-in"
        data-aos-delay="100"
      >
        <Image
          src="/about-bg.png"
          alt="Interior of the Barbecue Space restaurant"
          fill
          quality={100}
          className="z-0 object-cover"
        />
        <h1
          className="relative z-20 text-[#E3010F] font-great-vibes text-[110px] font-normal leading-[61px] text-center"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          About Us
        </h1>
      </div>

      {/* Main content container */}
      <div className="px-4 md:px-16">

        {/* First Single Image Section */}
        <div data-aos="fade-up" data-aos-delay="200">
          <SingleImageSection
            imageSrc="/about-image.svg"
            altText="Barbecue Space restaurant interior"
            width={200}
            height={100}
          />
        </div>

        {/* Three Content Divs */}
        <div className="flex flex-col gap-8 lg:gap-16 mt-16 max-w-7xl mx-auto">

          {/* First Div */}
          <div
            className="flex flex-col items-start p-4"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
              Our Mission
            </h2>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              At Barbecue Space, our mission is to redefine the dining experience. We believe a restaurant should be more than just a place to eat; it should be a space where people can come together to enjoy delicious food, great company, and a warm, inviting atmosphere. Our journey began with the simple idea of sharing our passion for food and bringing innovative, high-quality dishes to the Thiruvananthapuram community.
            </p>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              We are committed to using the best ingredients and creating a diverse menu that caters to all tastes, whether you&apos;re a vegetarian or a meat lover. Our goal is to make every visit a memorable one, where our guests can enjoy mouth-watering food and exceptional service in a friendly setting.
            </p>
            <Image
              src="/about-image.png"
              alt="Delicious food platter"
              width={1440}
              height={200}
              className="mt-6 rounded-lg"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>

          {/* Second Div */}
          <div
            className="flex flex-col items-start p-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
              Our Story
            </h2>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              Barbecue Space is the creation of three brothers, Muhammed Saler, Muhammed Harris, and Mohammed Fazil. Their shared love for food and a vision to create something truly special led them to open our first location. From the very beginning, they were determined to offer a unique dining experience and a menu that would stand out from the rest.
            </p>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              Driven by a passion for perfection, the founders personally curated every detail of the restaurant, from the unique blend of spices in our dishes to the comfortable and modern ambiance. Their dedication and hands-on approach have been the heart of our success, and their commitment to our guests is what makes Barbecue Space feel like home.
            </p>
          </div>

          {/* Third Div */}
          <div
            className="flex flex-col items-start p-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
              Our Philosophy
            </h2>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              What sets Barbecue Space apart is our dedication to being a &quot;game changer&quot; in the food industry. We believe in innovation and variety. Our menu is a reflection of this philosophy, offering a wide range of options that cater to every food lover. From our signature charcoal-grilled items and rich Arabian Kuzhimanthi to unique preparations like our Jamaican Mandi, we&apos;re constantly exploring new flavors to delight your palate.
            </p>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              We&apos;ve carefully crafted a menu that is both delicious and exciting. Whether you&apos;re a fan of our flavorful grilled chicken or you want to try a new vegetarian dish, you&apos;ll find something you love. We are proud of our food and can&apos;t wait for you to experience the passion we put into every meal.
            </p>
          </div>
        </div>

        {/* Second Single Image Section */}
        <div
          className="mb-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <SingleImageSection
            imageSrc="/about-image.svg"
            altText="Barbecue Space restaurant interior"
            width={200}
            height={100}
          />
        </div>

      </div>
    </div>
  );
}
