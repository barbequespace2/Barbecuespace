import SingleImageSection from '@/components/SingleImageSection';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-[#181818] px-4 md:px-16">
      {/* First Single Image Section */}
<SingleImageSection
        imageSrc="/about-image.svg"
        altText="Barbecue Space restaurant interior"
        width={200}
        height={100}
      />

      {/* Three Content Divs */}
      <div className="flex flex-col md:flex-column gap-8 lg:gap-16 mt-16 max-w-7xl mx-auto">
        {/* First Div */}
        <div className="flex flex-col items-start p-4">
          <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
            Our Mission
          </h2>
          <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
            Our mission is to transport our guests to the heart of the Middle East and the Arabian Peninsula with every bite. We are committed to serving authentic, flavorful, and memorable culinary experiences that blend traditional recipes with modern innovation. We believe in the power of food to bring people together, creating moments of joy and connection.
          </p>
          <Image
            src="/about-image.png"
            alt="Delicious food platter"
            width={1440}
            height={200}
            className="mt-6 rounded-lg"
          />
        </div>

        {/* Second Div */}
        <div className="flex flex-col items-start p-4">
          <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
            Our Story
          </h2>
          <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
            Barbecue Space began as a small passion project in 2014, founded by three siblings with a shared love for Arabic cuisine. What started as a modest venture quickly grew into a beloved local eatery, cherished for its unique flavors and warm hospitality. Over the years, we have expanded our family to include a team of dedicated chefs and staff who share our vision of culinary excellence.
          </p>
        </div>

        {/* Third Div */}
        <div className="flex flex-col items-start p-4">
          <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
            Our Philosophy
          </h2>
          <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
            At Barbecue Space, we believe in a simple philosophy: quality ingredients, authentic flavors, and genuine passion. We source the finest local produce and use traditional cooking techniques to ensure every dish is a masterpiece. We are constantly innovating, introducing new and exciting dishes like our famous Jamaican Masala, while staying true to the rich heritage of Arabic barbecue.
          </p>
        </div>
      </div>

      {/* Second Single Image Section */}
<SingleImageSection
        imageSrc="/about-image.svg"
        altText="Barbecue Space restaurant interior"
        width={200}
        height={100}
      />
    </div>
  );
}