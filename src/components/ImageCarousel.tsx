'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/explore-photo.png',
  '/explore-photo-1.png',
  '/explore-photo-2.png',
  // You can now add or remove images, and the logic will adapt
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`, // This remains the same
          transform: `translateX(-${(currentImageIndex * 100) / images.length}%)`, // Logic updated for dynamic width
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative" // REMOVED: w-1/3
            style={{ width: `${100 / images.length}%` }} // ADDED: Dynamic width calculation
          >
            <Image
              src={src}
              alt={`Explore section image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;