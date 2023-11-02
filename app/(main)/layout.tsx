'use client';
import React from 'react';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/femcalculComponents/footer';
import NavButton from '@/components/femcalculComponents/nav-button';
import NavigationDrawer from '@/components/femcalculComponents/navigationDrawer/navigation-drawer';
import Navigation from '@/components/femcalculComponents/navigationMenu/navigation-menu';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-100 min-h-screen flex-column">
      <Navigation />
      <NavigationDrawer />
      <div className="md:pt-[72px] md:min-h-[calc(100vh-100px)]">{children}</div>
      <Footer />
    </div>
  );
}
