import './global.css';

export const metadata = {
  title: 'Posnod | The System Learning',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
