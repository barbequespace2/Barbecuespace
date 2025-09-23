import SingleImageSection from '../../components/SingleImageSection';

export default function ContactUsPage() {
  return (
    <div className="bg-[#181818] text-white">
      {/* Hero Section */}
            {/* Hero Section */}
      {/* Hero Section */}
<div
  className="relative flex items-center justify-center h-[400px] bg-cover bg-center"
  style={{ backgroundImage: "url('/contact-bg.png')" }}
>
  {/* Gradient overlay */}
  <div
    className="absolute inset-0 z-10"
    style={{
      background:
        'linear-gradient(0deg, #171717 5%, rgba(23, 23, 23, 0.1) 100%)',
    }}
  ></div>

  {/* Heading */}
  <h1
    className="relative z-20"
    style={{
      color: "#E3010F",
      textAlign: "center",
      fontFamily: "Great Vibes, cursive",
      fontSize: "110.538px",
      fontWeight: 400,
      lineHeight: "55.764%",
    }}
  >
    Contact Us
  </h1>
</div>



      {/* Main Section 1 */}
            {/* Main Section 1 */}
<div className="grid grid-cols-2 gap-10 px-10 py-8 max-w-6xl mx-auto h-[167px] items-center">
  {/* Left text */}
  <div className="flex flex-col gap-2" style={{ width: '530px' }}>
    <h2 className="text-5xl font-bold">Get in touch with us.</h2>
    <p className="text-5xl">We're here to assist you.</p>
  </div>

  {/* Right social icons */}
  <div className="flex flex-col items-center justify-center gap-4 ml-auto">
    <a href="#" aria-label="Instagram">
      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
        <img src="/instagram-red.svg" alt="Instagram" className="w-4 h-4" />
      </div>
    </a>
    <a href="#" aria-label="Facebook">
      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
        <img src="/facebook-red.svg" alt="Facebook" className="w-4 h-4" />
      </div>
    </a>
    <a href="#" aria-label="Twitter">
      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white">
        <img src="/twitter-red.svg" alt="Twitter" className="w-4 h-4" />
      </div>
    </a>
  </div>
</div>



      {/* Main Section 2 - Contact Form */}
      <div className="px-10 py-16 max-w-6xl mx-auto">
        <form className="flex flex-col gap-6">
          {/* Row: Name, Phone, Email */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b border-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-gray-500 focus:outline-none"
            />
          </div>

          {/* Message box */}
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none"
          />

          {/* Send button */}
          <button
            type="submit"
            className="self-start px-8 py-3 text-white rounded-full"
            style={{ background: "#E3010F" }}
          >
            Send Message
          </button>
        </form>
      </div>

            {/* Main Section 3 - Contact Info */}
      <div className="px-10 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First column */}
          <div className="text-left">
            <h3 className="text-sm font-normal">Contact now</h3>
            <p className="mt-2 text-2xl font-bold">
              We are always happy <br /> to assist you
            </p>
          </div>

          {/* Second column */}
          <div className="text-left">
            <h4 className="text-sm font-bold">Email Address</h4>
            <div className="w-12 h-[2px] bg-white mt-1 mb-2"></div>
            <p className="font-bold text-sm">help@info.com</p>
            <p className="mt-2 text-xs">
              Assistance hours:
              <br /> Monday - Friday 6 am to 8 pm EST
            </p>
          </div>

          {/* Third column */}
          <div className="text-left">
            <h4 className="text-sm font-bold">Number</h4>
            <p className="font-bold text-sm">(808) 998-34256</p>
            <p className="mt-2 text-xs">
              Assistance hours:
              <br /> Monday - Friday 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="px-10  max-w-6xl mx-auto flex justify-center">
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
