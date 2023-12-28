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
      className={`flex rounded-md max-w-100 h-[200px] pt-[72px] bg-cover bg-center bg-fixed flex-col items-center justify-between p-4`}
    >
      <h1 style={{ ...titleStyle }}>{title}</h1>
    </div>
  );
}
