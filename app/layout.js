import "./global.css";

export const metadata = {
  metadataBase: new URL("https://posnod.com"),

  title: {
    default: "Posnod - Social Learning Platform",
    template: "%s | Posnod",
  },
  description:
    "Platform pembelajaran sosial yang menyediakan pondasi modern untuk belajar, berbagi pengetahuan, dan berkolaborasi.",
  keywords: [
    "Posnod", "Learning", "Pembelajaran", "Platform Edukasi", "Belajar Online",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
  },

  applicationName: "Posnod",
  manifest: "/manifest.json",

  alternates: {
    canonical: "https://posnod.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FBFBFB]">
        <main>{children}</main>
      </body>
    </html>
  );
}