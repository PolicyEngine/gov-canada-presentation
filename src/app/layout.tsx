import type { Metadata, Viewport } from 'next';
import './globals.css';

const TITLE = 'PolicyEngine — Government of Canada';
const DESCRIPTION =
  'PolicyEngine presentation for the Government of Canada. Microsimulation of tax and benefit policy.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'PolicyEngine' }],
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#319795',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
