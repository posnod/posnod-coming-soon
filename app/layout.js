import './global.css';

export const metadata = {
  metadataBase: new URL('https://posnod.com'),

  title: 'Posnod | The System Learning',
  description:
    'Posnod adalah platform pembelajaran sistem yang modern, cepat, dan mudah digunakan.',
  applicationName: 'Posnod',

  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/images/Favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/images/Favicon.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/images/Favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },

  keywords: [
    'Posnod',
    'System Learning',
    'Pembelajaran',
    'Platform Edukasi',
    'Belajar Online',
  ],

  openGraph: {
    title: 'Posnod | The System Learning',
    description:
      'Platform pembelajaran sistem dengan pengalaman modern dan efisien.',
    url: 'https://posnod.com',
    siteName: 'Posnod',
    images: [
      {
        url: '/images/Favicon.png', 
        width: 1200,
        height: 630,
        alt: 'Posnod Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Posnod | The System Learning',
    description:
      'Platform pembelajaran sistem dengan pengalaman modern dan efisien.',
    images: ['/images/Favicon.png'],
    creator: '@posnod',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nosnippet: false,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },

  alternates: {
    canonical: 'https://posnod.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
