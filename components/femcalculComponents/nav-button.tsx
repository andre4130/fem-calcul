import React from 'react';
import { NavigationMenuItem } from '../ui/navigation-menu';

export default function NavButton({ children }: { children: React.ReactNode }) {
  return <NavigationMenuItem className="p-2 rounded-sm hover:bg-slate-50">{children}</NavigationMenuItem>;
}
