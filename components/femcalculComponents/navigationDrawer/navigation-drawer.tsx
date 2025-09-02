'use client';

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import NavButton from '../nav-button';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';

export default function NavigationDrawer() {
  return (
    <div className="md:hidden p-5 fixed flex w-full items-center bg-[#fff] z-[1] border-b-[2px]">
      <Sheet>
        <SheetTrigger className="w-full flex  text-primary-light ">
          <div className="flex flex-row w-full justify-between">
            <Menu />
            <div>
              <Image src="/FEM_Calcul_Logo.png" height={40} width={80} alt={'logo'} />{' '}
            </div>
            <div></div>
          </div>
        </SheetTrigger>
        <SheetContent className="right-[2%]">
          <SheetHeader>
            <SheetTitle className="justify-center flex ">
              <SheetClose asChild>
                <Link href={'/'} className="flex items-center">
                  <Image src="/FEM_Calcul_Logo.png" height={40} width={100} alt={'logo'} />{' '}
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className="flex w-100 justify-center pt-4">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col w-full items-center justify-start">
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/consulting'}>Consulting</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/education'}>Education</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/research'}>Research</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/technical-writing'}>Technical Writing</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/about'}>About</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/contact'}>Contact</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/cv'}>CV</Link>
                  </SheetClose>
                </NavButton>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
