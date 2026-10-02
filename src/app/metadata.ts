import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#141113',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nannipy.com'),
  title: {
    default: 'Giovanni Battista Pernazza — Software Engineer',
    template: '%s | Giovanni Battista Pernazza',
  },
  description: 'Software engineer in Rome. Web applications, AI tools, embedded systems — and a life outside the screen.',
  verification: {
    google: 'kJUIQCIwNWnDtwEV658OTfsyg68KzpmVixVQbDE1LnI',
  },
  openGraph: {
    title: 'Giovanni Battista Pernazza — Software Engineer',
    description: 'Software engineer in Rome. Web applications, AI tools, embedded systems — and a life outside the screen.',
    url: 'https://nannipy.com',
    siteName: 'Giovanni Battista Pernazza',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/brand/social-card.png',
        width: 1200,
        height: 630,
        alt: 'Giovanni Battista Pernazza — nanni.py',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giovanni Battista Pernazza — Software Engineer',
    description: 'Software engineer in Rome. Web applications, AI tools, embedded systems — and a life outside the screen.',
    images: ['/brand/social-card.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  applicationName: 'Giovanni Battista Pernazza',
  creator: 'Giovanni Battista Pernazza',
  keywords: [
    'Giovanni Battista Pernazza',
    'developer',
    'entrepreneur',
    'portfolio',
    'software engineer',
  ],
  authors: [{ name: 'Giovanni Battista Pernazza' }],
  category: 'portfolio',
};
