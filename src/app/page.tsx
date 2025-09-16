import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import SingleImageSection from '@/components/SingleImageSection';

export default function HomePage() {
  return (
    <div>
      {/* Home Section */}
{/* Home Section */}
<section className="flex min-h-screen items-center text-white flex-col md:flex-row md:items-center md:justify-center px-6 md:px-16" style={{ paddingRight: '170px' , paddingLeft: '0px' }}>
  {/* Left Side: Image (Hidden on Mobile) */}
  <div className="hidden md:flex flex-shrink-0">
    <Image
      src="/side-mandhi.svg"
      alt="Side Mandhi"
      width={700}
      height={700}
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Right Side: Text Content */}
  <div className="mt-10 md:mt-0 md:ml-0 md:pl-12 text-center md:text-left flex flex-col items-center md:items-start max-w-[700px]">
    <h1 className="text-white font-satoshi text-[36px] md:text-[50px] font-bold leading-none">
      Where Flavors Come{" "}
      <span className="font-satoshi italic">Alive</span> in
    </h1>

    <div className="flex justify-center md:justify-start items-end mt-4">
      <h2 className="text-[#E3010F] font-imperialScript text-[120px] md:text-[248.303px] font-normal leading-none -mb-6 md:-mb-10">
        T
      </h2>
      <h2 className="text-[#E3010F] font-greatVibes text-[72px] md:text-[112.047px] font-normal leading-none">
        rivandrum
      </h2>
    </div>

    <div className="mt-6 md:mt-8 max-w-[594px] text-center md:text-left font-satoshi text-[18px] md:text-[22px] font-normal leading-normal">
      For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you.
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="flex min-h-screen items-center justify-center gap-10 p-6 md:p-16 text-white">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-[883px] flex flex-col items-start text-left">
          <h2 className="text-white font-satoshi text-4xl md:text-5xl font-bold">
            About
          </h2>
          <h3 className="text-[#E3010F] font-greatVibes text-6xl md:text-8xl font-normal leading-[55.764%]">
            Barbecue Space
          </h3>
          <p className="mt-6 md:mt-8 font-satoshi text-[18px] md:text-[20px] font-normal leading-normal">
            Founded in 2014, Barbecue Space has redefined the dining experience in
            Thiruvananthapuram. What began as a passion project by three food-loving
            siblings soon became the city’s favorite destination for
            <span className="text-[#E3010F] font-medium italic">
              {" "}authentic Arabic flavors.{" "}
            </span>
            From signature dishes like Shawarma, Al Fahm, and Arabian Kuzhimanthi to
            the unique taste of our in-house Jamaican Masala, Barbecue Space has been
            creating memorable culinary moments for nearly a decade. Today, with
            multiple outlets and the premium dining destination
            <span className="text-[#E3010F] font-medium italic">
              {" "}Urban Space,{" "}
            </span>
            we continue to blend tradition with innovation—delighting food lovers
            every day.
          </p>
        </div>

        {/* Right Side: Image (hidden on mobile) */}
        <div className="hidden md:flex flex-shrink-0">
          <Image
            src="/about-image.svg"
            alt="Barbecue Space restaurant interior"
            width={500}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Explore Section */}
      <section className="relative flex h-[589px] flex-col items-center justify-center p-16 text-white overflow-hidden">
        <ImageCarousel />
        {/* Overlay for Shaded Effect */}
        <div className="absolute inset-0 bg-[#181818] opacity-70"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white font-satoshi text-5xl font-bold leading-normal">
              Explore
            </h2>
            <h3 className="text-[#E3010F] font-greatVibes text-8xl font-normal leading-[55.764%] text-center">
              Our Menu
            </h3>
          </div>
          <p className="mt-8 max-w-[594px] font-satoshi text-[22px] font-normal leading-normal">
            Discover a menu crafted to satisfy every craving—from authentic Arabic grills and smoky barbecues to flavorful vegetarian delights, all prepared with our signature touch.
          </p>
          <button className="mt-8 flex items-center justify-center gap-2.5 rounded-[500px] bg-[#E3010F] px-[35px] py-[14px] font-bold text-white">
            View Menu
          </button>
        </div>
      </section>

      {/* Single Image Section */}
      <SingleImageSection
        imageSrc="/about-image.svg"
        altText="Barbecue Space restaurant interior"
        width={200}
        height={100}
      />
    </div>
  );
}
