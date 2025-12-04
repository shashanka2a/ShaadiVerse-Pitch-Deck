import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShaadiVerse - Organizing India\'s Massive Tier-2 & Tier-3 Wedding Market',
  description: 'A discovery platform specifically for budgets between ₹5 Lakh – ₹15 Lakh. Simple, Affordable, Trustworthy wedding vendor marketplace for Tier-2 and Tier-3 cities.',
  keywords: ['wedding', 'India', 'Tier-2', 'Tier-3', 'wedding vendors', 'marriage', 'shaadi', 'wedding planning'],
  authors: [{ name: 'ShaadiVerse Team' }],
  openGraph: {
    title: 'ShaadiVerse - Organizing India\'s Massive Tier-2 & Tier-3 Wedding Market',
    description: 'A discovery platform specifically for budgets between ₹5 Lakh – ₹15 Lakh',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShaadiVerse - Organizing India\'s Massive Tier-2 & Tier-3 Wedding Market',
    description: 'A discovery platform specifically for budgets between ₹5 Lakh – ₹15 Lakh',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C41E3A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

