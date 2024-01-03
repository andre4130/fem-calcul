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
      className={`flex rounded-md max-w-100 opacity-80 h-[200px] pt-[60px] bg-auto md:bg-cover bg-center flex-col items-center justify-between p-4`}
    >
      <div className="text-3xl md:text-5xl p-4 rounded-lg bg-white opacity-90 text-primary" style={{ ...titleStyle }}>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
