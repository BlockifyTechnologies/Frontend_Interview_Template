import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { Providers } from './providers';
import clsx from 'clsx';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className='flex flex-col h-screen justify-between'>
            <div>
              <Navbar />
            </div>
            {children}
            <div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
