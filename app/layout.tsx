import * as React from 'react';
import ThemeRegistry from './components/ThemeRegistry';
import './globals.css';

export const metadata = {
  title: 'EcoFind',
  description: 'Find eco-friendly products and services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
