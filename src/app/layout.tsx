import type { Metadata } from 'next';
import React from 'react';

import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { MotionProvider } from '@/components/motion/motion-primitives';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s · Emmanuel Mwamba',
    default: 'Emmanuel Mwamba Software Developer Founder',
  },
  description:
    'Emmanuel Mwamba is a Software Developer and Startup Founder based in Ndola, Zambia. He builds software products and digital solutions that solve real problems.',
  authors: [{ name: 'Emmanuel Mwamba' }],
  openGraph: {
    title: 'Emmanuel Mwamba Software Developer Founder',
    description:
      'Building software products and digital solutions that solve real problems. Based in Ndola, Zambia.',
    type: 'website',
    locale: 'en',
    siteName: 'Emmanuel Mwamba',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@emmanuelmwamba',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="bg-background text-text antialiased selection:bg-accent selection:text-[#090909]">
        <MotionProvider>
          <Navbar />
          <main className="relative min-h-screen isolation">{children}</main>
          <Footer />
          <ScrollToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
