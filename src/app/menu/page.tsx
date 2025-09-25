'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Great_Vibes } from 'next/font/google';
import SingleImageSection from '@/components/SingleImageSection';

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
            data-aos-delay={250}
          >
            Discover a menu crafted to satisfy every craving—from authentic Arabic grills and smoky
            barbecues to flavorful vegetarian delights,<br /> all prepared with our signature touch.
          </p>
        </div>
      </div>

      {/* Main Menu Container */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        {/* Starters Section */}
        <h2
          className={`${greatVibes.className} text-[#E3010F] font-normal text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}
        >
          Starters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {/* Arabic */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Arabic</h3>
            <ul className="space-y-2">
              {['French Fries','Spicy Fries','Loaded Fries','Spicy Grilled Wings','Smoke & Honey Wings','Grilled Wings Platter'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Tandoor */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Tandoor</h3>
            <ul className="space-y-2">
              {['Paneer Tikka','Chicken Tikka','Kanthari Chicken Tikka','Afghani Chicken Tikka','Chicken Tikka Platter'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Chinese */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Chinese</h3>
            <ul className="space-y-2">
              {['Crispy Fried Veg','Veg 99','Lolly Pop','Kung Pao Chicken','Beef Dry Fry (BDF)','Golden Fried Prawns'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Naadan */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Naadan</h3>
            <ul className="space-y-2">
              {['Wings Fry','Chicken Leg Fry','Chicken 65','Tawa Prawns'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soup & Salad Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {/* Soup */}
          <div className="col-span-1">
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Soup</h2>
            <ul className="space-y-2">
              {['Sweet Corn','Hot & Sour','Clear Noodle'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF',fontFamily:'Satoshi',fontSize:'18px',fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Salad */}
          <div className="col-span-1">
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Salad</h2>
            <ul className="space-y-2">
              {['Green Salad','Grilled Chicken Salad'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF',fontFamily:'Satoshi',fontSize:'18px',fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Momos Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Momos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {/* Classic Momos */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Classic Momos</h3>
            <ul className="space-y-2">
              {['Steamed','Fried'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Signature Momos */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Signature Momos</h3>
            <ul className="space-y-2">
              {['Creamy Chicken','Afghani','Green Pepper','Kanthari','Jamaican'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shawarma Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Shawarma</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20">
          {/* Rumali Shawarma */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Rumali Shawarma</h3>
            <ul className="space-y-2">
              {['Normal','Spicy','Double Cheese','Mexican','Full Meat','Fully Loaded'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Paneer Shawarma */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Paneer Shawarma</h3>
            <ul className="space-y-2">
              {['Normal','Spicy','Cheese'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Grilled Plates */}
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Grilled Plates</h3>
            <ul className="space-y-2">
              {['Jamaican Crunchy','Caribbean Crunchy'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Burgers & Fusion Pasta Bowl Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {/* Burgers */}
          <div className="col-span-1">
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Burgers</h2>
            <ul className="space-y-2">
              {['Jamaican Grilled', 'Normal', 'Spicy', 'Cheese', 'Double Cheese'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Fusion Pasta Bowl */}
          <div className="col-span-1">
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Fusion Pasta Bowl</h2>
            <ul className="space-y-2">
              {['Jamaican Chicken', 'Afghani Chicken', 'Creamy Veg', 'Mexican Veg'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Al-Faham Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Al-Faham</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-20">
          {/* Chicken */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Chicken</h3>
            <ul className="space-y-2">
              {['Jamaican Charcoal', 'Smoke & Honey', 'Normal'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Beef */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Beef</h3>
            <ul className="space-y-2">
              {['Normal', 'Jamaican'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Platter */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Platter</h3>
            <ul className="space-y-2">
              {['Quarter Leg Of Normal', 'Al-Faham + Jamaican', '+ Smoke & Honey + Beef Al-Faham'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kuzhimandi Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Kuzhimandi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Al-Faham</h3>
            <ul className="space-y-2">
              {['Al-Faham','Jamaican Charcoal Al-Faham','Smoke & Honey Al-Faham','Malappuram'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Beef Al-Faham Mandhi</h3>
            <ul className="space-y-2">
              {['Normal','Jamaican'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Naadan Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Naadan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-20">
          {/* Fry */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Fry</h3>
            <ul className="space-y-2">
              {['Chicken Leg Fry','Boneless Chicken Fry','Beef Dry Fry','Prawn Tawa Fry','Neymeen Tawa Fry','Avoli Tawa Fry'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Curry */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Curry</h3>
            <ul className="space-y-2">
              {['Chicken Chettinad','Chicken Thengapaal','Beef Chettinad','Beef Thengapaal'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Fish Mango Curry */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Fish Mango Curry</h3>
            <ul className="space-y-2">
              {['Neymeen','Prawns'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Perattu */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Perattu</h3>
            <ul className="space-y-2">
              {['Chicken','Beef'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Roast */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Roast</h3>
            <ul className="space-y-2">
              {['Chicken','Beef','Prawns'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Fish Grill Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Fish Grill</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div className="col-span-1">
            <ul className="space-y-2">
              {['Hamour','Sheri','Jumbo Prawns'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tawa Fish Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Tawa Fish</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div className="col-span-1">
            <ul className="space-y-2">
              {['Prawns','Avoli','Neymeen'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* North Indian Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>North Indian</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-20">
          {/* Tikka */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Tikka</h3>
            <ul className="space-y-2">
              {['Chicken Tikka','Kanthari Chicken Tikka','Afghani Chicken Tikka','Jamaican Chicken Tikka','Tikka Platter'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Creamy Tikka */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Creamy Tikka</h3>
            <ul className="space-y-2">
              {['Afghani Chicken Tikka','Kanthari Chicken Tikka','Jamaican Chicken Tikka'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Gravy */}
          <div className="col-span-1">
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Gravy</h3>
            <ul className="space-y-2">
              {['Paneer Butter Masala','Paneer Tikka Masala','Butter Chicken','Chicken Tikka Masala'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chinese Main Course Section */}
        <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-12 text-left`}>Chinese</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Non Veg</h3>
            <ul className="space-y-2">
              {['Chilly Chicken', 'Gobi Manchurian', 'Schezwan Chicken', 'Chilly Beef', 'Dragon Chicken', 'Oyster Beef', 'Oyster Prawns'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[#E3010F] font-satoshi text-[26px] font-bold">Veg</h3>
            <ul className="space-y-2">
              {['Chilly Paneer', 'Chilly Mushroom', 'Chilly Gobi', 'Gobi Manchurian'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Breads, Rice & Noodles Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Breads</h2>
            <ul className="space-y-2">
              {['Khubz', 'Chapathi', 'Malabar Parotta', 'Rumali Rotti', 'Plain Pathiri', 'Oretti', 'Tandoor Rotti', 'Butter Rotti', 'Naan', 'Butter Naan', 'Garlic Naan', 'Pathiri Set (3pc)', 'Steamed Bread Set (3pc)'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Rice</h2>
            <ul className="space-y-2">
              {['Fried Rice', 'Schezwan Fried Rice', 'Jamaican Rice', 'Kanthari Rice', 'Afghani Rice'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Noodles</h2>
            <ul className="space-y-2">
              {['Noodles', 'Schezwan Noodles', 'Jamaican Noodles', 'Kanthari Noodles', 'Afghani Noodles'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soda Sarbath Section */}
        <div className="mb-20">
          <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Soda Sarbath</h2>
          <ul className="space-y-2">
            {['Naruneendi', 'Ginger', 'Mint', 'Passion Fruit', 'Sweet Lime'].map((item, idx) => (
              <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Fruit Juice & Smoothie Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Fruit Juice</h2>
            <ul className="space-y-2">
              {['Watermelon', 'Pineapple', 'Citrus Orange'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Smoothie</h2>
            <ul className="space-y-2">
              {['Papaya', 'Shamam'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Mojitos Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Mojitos</h2>
            <ul className="space-y-2">
              {['Mint', 'Watermelon', 'Green Apple', 'Vanilla Blue', 'Peach', 'Kacha Mango'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Signature Mojitos</h2>
            <ul className="space-y-2">
              {['Strawberry', 'Mango', 'Tender Melon', 'Passion Fruit', 'Berry Magic', 'Lychee Rose'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hot Beverages Section */}
        <div className="mb-20">
          <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Hot Beverages</h2>
          <ul className="space-y-2">
            {['Mint Lime Tea', 'Masala Tea', 'Milk Coffee', 'Premium Hot Chocolate'].map((item, idx) => (
              <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Jar Ice Creams & Ice Cream Shake Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Jar Ice Creams</h2>
            <ul className="space-y-2">
              {['Eclair', 'Milk Candy', 'Tender Coconut', 'Pot Ice', 'Fruit Salad'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Ice Cream Shake</h2>
            <ul className="space-y-2">
              {['Chocolate', 'Vanilla', 'Strawberry'].map((item, idx) => (
                <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Exotic Ice Cream & Falooda Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
  {/* Exotic Ice Cream */}
  <div className="col-span-2">
    <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Exotic Ice Cream</h2>
    <ul className="space-y-2">
      {['Mint Candy', 'Bubble Chocolate', 'English Toffee'].map((item, idx) => (
        <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
      ))}
    </ul>
  </div>
  {/* Falooda */}
  <div className="col-span-1">
    <h2 className={`${greatVibes.className} text-[#E3010F] text-4xl sm:text-5xl md:text-6xl mb-8 text-left`}>Falooda</h2>
    <ul className="space-y-2">
      {['Rabdi', 'Milk Candy', 'Dry Fruit'].map((item, idx) => (
        <li key={idx} style={{color:'#FFF', fontFamily:'Satoshi', fontSize:'18px', fontWeight:500}}>{item}</li>
      ))}
    </ul>
  </div>
</div>
              <div className="px-4 sm:px-10 max-w-6xl mx-auto flex justify-center pb-0" data-aos="fade-up" data-aos-delay="350">
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