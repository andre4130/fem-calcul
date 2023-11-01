'use client';
import React from 'react';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/femcalculComponents/footer';
import NavButton from '@/components/femcalculComponents/nav-button';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-100 min-h-screen flex-column">
      <NavigationMenu className="flex align-middle justify-start w-100 p-4 bg-white w-full border-b-slate-500 border-b-3 b-opacity-50">
        <div className="flex flex-row w-full justify-between items-center">
          <div>
            <Link href={'/'} className="flex items-center">
              <Image src="/femlogo.svg" height={40} width={40} alt={'logo'} className=" mr-3" />{' '}
              <strong>Fem Calcul</strong>
            </Link>
          </div>
          <div>
            <NavigationMenuList>
              <NavButton>
                <Link href={'/consulting'}>Consulting</Link>
              </NavButton>
              <NavButton>
                <Link href={'/education'}>Education</Link>
              </NavButton>
              <NavButton>
                <Link href={'/research'}>Research</Link>
              </NavButton>
              <NavButton>
                <Link href={'/about'}>About</Link>
              </NavButton>
              <NavButton>
                <Link href={'/contact'}>Contact</Link>
              </NavButton>
              <NavButton>
                <Link href={'/cv'}>CV</Link>
              </NavButton>
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
      <div className="pt-[72px] min-h-[calc(100vh-100px)]">{children}</div>
      <Footer />
    </div>
  );
}
