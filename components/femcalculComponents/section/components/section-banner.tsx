'use client';

import { StaticImageData } from 'next/image';
import React, { CSSProperties } from 'react';

interface SectionBannerProps {
  image: StaticImageData;
  title: string;
  style?: CSSProperties;
  titleStyle?: CSSProperties;
}

export default function SectionBanner({ image, title, style, titleStyle }: SectionBannerProps) {
  return (
    <div
      style={{ ...style, backgroundImage: `url(${image.src})` }}
      className={`flex rounded-md max-w-100 h-[200px] pt-[72px] bg-auto md:bg-cover bg-center flex-col items-center justify-between p-4`}
    >
      <div className="text-3xl md:text-5xl" style={{ ...titleStyle }}>
        {title}
      </div>
    </div>
  );
}
