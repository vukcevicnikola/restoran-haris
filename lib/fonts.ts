import { Nunito, Inter } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});