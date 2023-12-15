'use client';
import Image from 'next/image';
import React from 'react';

interface SectionBannerProps {
  image: string;
}

export default function SectionBanner({ image }: SectionBannerProps) {
  return (
    <div className="w-100">
      <Image src={image} alt="Image" className="bg-cover bg-center bg-fixed flex-col items-center justify-between" />
    </div>
  );
}
