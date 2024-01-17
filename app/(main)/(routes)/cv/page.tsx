import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import React from 'react';
import cv from '../../../../public/images/CV.jpg';

export default function CvPage() {
  return (
    <>
      <SectionBanner image={cv} title="Curriculum Vitae" divClassName="bg-bottom" />
    </>
  );
}
