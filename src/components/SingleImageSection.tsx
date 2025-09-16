// components/SingleImageSection.tsx

import Image from 'next/image';

interface SingleImageSectionProps {
  imageSrc: string;
  altText: string;
  width: number;
  height: number;
}

const SingleImageSection = ({ imageSrc, altText, width, height }: SingleImageSectionProps) => {
  return (
    <section className="py-16 flex justify-center items-center">
      <Image
        src={imageSrc}
        alt={altText}
        width={width}
        height={height}
        className="object-cover"
      />
    </section>
  );
};

export default SingleImageSection;