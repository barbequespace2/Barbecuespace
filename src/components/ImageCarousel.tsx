'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/explore-photo.png',
  '/explore-photo-1.png',
  '/explore-photo-2.png',
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 relative">
            <Image
              src={src}
              alt={`Explore section image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;