import React from 'react';
import SectionTitle from './components/section-title';

interface SectionWrapperProps {
  title: string;
  boxClassNames?: string;
  titleClassNames?: string;
  children: JSX.Element;
}

export default function SectionWrapper({ title, boxClassNames, titleClassNames, children }: SectionWrapperProps) {
  return (
    <div className="m-4">
      <SectionTitle title={title} boxClassNames={boxClassNames} titleClassNames={titleClassNames} />
      {children}
    </div>
  );
}
