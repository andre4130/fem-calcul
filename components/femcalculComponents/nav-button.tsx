import React from 'react';
import { NavigationMenuItem } from '../ui/navigation-menu';

export default function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <NavigationMenuItem className="p-2 min-w-[50px] flex justify-center rounded-sm hover:bg-slate-100">
      {children}
    </NavigationMenuItem>
  );
}
