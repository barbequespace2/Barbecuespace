import SingleImageSection from '@/components/SingleImageSection';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-[#181818]">

      {/* Hero Section with Background Image and Custom Heading */}
      <div className="relative w-full h-80 md-h-96 flex items-center justify-center">
        {/* Background Image using next/image */}
        <Image
          src="/about-bg.png"
          alt="Interior of the Barbecue Space restaurant"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0" // Ensure image is in the background
        />
        
        {/* Heading with custom styles applied */}
        <h1 
          className="relative z-20 text-[#E3010F] font-great-vibes text-[110px] font-normal leading-[61px] text-center"
        >
          About Us
        </h1>
      </div>

      {/* Main content container with original padding */}
      <div className="px-4 md:px-16">
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
              At Barbecue Space, our mission is to redefine the dining experience. We believe a restaurant should be more than just a place to eat; it should be a space where people can come together to enjoy delicious food, great company, and a warm, inviting atmosphere. Our journey began with the simple idea of sharing our passion for food and bringing innovative, high-quality dishes to the Thiruvananthapuram community.
            </p>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              We are committed to using the best ingredients and creating a diverse menu that caters to all tastes, whether you're a vegetarian or a meat lover. Our goal is to make every visit a memorable one, where our guests can enjoy mouth-watering food and exceptional service in a friendly setting.
            </p>
            <Image
              src="/about-image.png"
              alt="Delicious food platter"
              width={1440}
              height={200}
              className="mt-6 rounded-lg"
            />
          </div>

          {/* Second Div - UPDATED */}
          <div className="flex flex-col items-start p-4">
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

          {/* Third Div - UPDATED */}
          <div className="flex flex-col items-start p-4">
            <h2 className="text-[#E3010F] font-satoshi text-2xl font-medium leading-[160%]">
              Our Philosophy
            </h2>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              What sets Barbecue Space apart is our dedication to being a "game changer" in the food industry. We believe in innovation and variety. Our menu is a reflection of this philosophy, offering a wide range of options that cater to every food lover. From our signature charcoal-grilled items and rich Arabian Kuzhimanthi to unique preparations like our Jamaican Mandi, we're constantly exploring new flavors to delight your palate.
            </p>
            <p className="mt-4 text-white font-satoshi text-lg font-normal leading-[160%]">
              We’ve carefully crafted a menu that is both delicious and exciting. Whether you're a fan of our flavorful grilled chicken or you want to try a new vegetarian dish, you'll find something you love. We are proud of our food and can't wait for you to experience the passion we put into every meal.
            </p>
          </div>
        </div>

        {/* Second Single Image Section - MODIFIED TO REMOVE BOTTOM PADDING */}
        <div className="mb-0"> {/* Wrapper to control bottom margin */}
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