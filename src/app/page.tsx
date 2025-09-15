import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      {/* Home Section */}
      <section className="flex min-h-screen items-center text-white">
        {/* Left Side: Image */}
        <div className="flex-shrink-0">
          <Image
            src="/side-mandhi.svg"
            alt="Side Mandhi"
            width={700}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="ml-8 pr-16">
          <h1 className="text-white font-satoshi text-[50px] font-bold leading-none">
            Where Flavors Come{" "}
            <span className="font-satoshi text-[50px] italic">
              Alive
            </span>{" "}
            in
          </h1>

          <div className="flex items-end mt-4">
            <h2 className="text-[#E3010F] font-imperialScript text-[248.303px] font-normal leading-none -mb-10">
              T
            </h2>
            <h2 className="text-[#E3010F] font-greatVibes text-[112.047px] font-normal leading-none">
              rivandrum
            </h2>
          </div>

          {/* New Text Content */}
          <div className="mt-8 w-[594px] text-center font-satoshi text-[22px] font-normal leading-normal">
            For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you.
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex min-h-screen items-center justify-center gap-10 p-16 text-white">
        {/* Left Side: Text Content */}
        <div className="w-[883px] flex flex-col">
          <h2 className="text-white font-satoshi text-5xl font-bold">
            About
          </h2>
          <h3 className="text-[#E3010F] font-greatVibes text-8xl font-normal text-left leading-[55.764%]">
            Barbecue Space
          </h3>
          <p className="mt-8 font-satoshi text-[20px] font-normal leading-normal">
            Founded in 2014, Barbecue Space has redefined the dining experience in Thiruvananthapuram. What began as a passion project by three food-loving siblings soon became the city’s favorite destination for
            <span className="text-[#E3010F] font-medium italic"> authentic Arabic flavors. </span>
            From signature dishes like Shawarma, Al Fahm, and Arabian Kuzhimanthi to the unique taste of our in-house Jamaican Masala, Barbecue Space has been creating memorable culinary moments for nearly a decade. Today, with multiple outlets and the premium dining destination
            <span className="text-[#E3010F] font-medium italic"> Urban Space, </span>
            we continue to blend tradition with innovation—delighting food lovers every day.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex-shrink-0">
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
      <section className="min-h-screen text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">Explore Section</h2>
      </section>
    </div>
  );
}