import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fem Calcul',
  description: 'Fem Calcul - Your Finite Element Method outsourcing service',
  icons: {
    icon: [
      {
        url: '/femlogo.svg',
        href: '/femlogo.svg',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
