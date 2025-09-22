import React from 'react';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
