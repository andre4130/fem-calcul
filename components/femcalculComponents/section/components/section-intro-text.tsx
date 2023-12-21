import React from 'react';

interface SectionIntroTextProps {
  text: string;
}

export default function SectionIntroText({ text }: SectionIntroTextProps) {
  return (
    <div className="flex w-100 justify-center text-center py-[40px]">
      <div className="pt-10 flex max-w-4xl">
        <h4>{text}</h4>
      </div>
    </div>
  );
}
