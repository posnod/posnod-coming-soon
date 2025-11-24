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
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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

  manifest: '/manifest.json',

  alternates: {
    canonical: 'https://posnod.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Manifest PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/Favicon-192.png" />

        {/* Theme for mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>

      <body>{children}</body>
    </html>
  );
}

