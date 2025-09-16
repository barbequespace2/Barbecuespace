// src/app/fonts.ts

import localFont from 'next/font/local';

// Define your local fonts and export them
export const greatVibes = localFont({
  src: '../../public/fonts/GreatVibes-Regular.ttf',
  variable: '--font-great-vibes', // CSS variable for this font
});

export const imperialScript = localFont({
  src: '../../public/fonts/ImperialScript-Regular.ttf',
  variable: '--font-imperial-script',
});

export const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});