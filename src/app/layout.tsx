import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noval Aeroethics | Precision Engineering for Aerospace',
  description:
    'Noval Aeroethics delivers high-precision CNC machined components for aerospace, defense, and precision engineering industries. ISO certified with 3-micron accuracy.',
  keywords: [
    'Noval Aeroethics',
    'CNC Machining',
    'Aerospace Components',
    'Precision Engineering',
    'Manufacturing Bangalore',
    'ISO Certified',
  ],
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#0A1F44]`}
      >
        {children}
      </body>
    </html>
  );
}
