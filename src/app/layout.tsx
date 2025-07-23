'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/dashboard');

  const metadata: Metadata = {
    title: 'MediHome',
    description: 'Your trusted partner in home healthcare.',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-body antialiased" suppressHydrationWarning>
        <div className="relative flex min-h-dvh flex-col">
          {!isAdminRoute && <Header />}
          <main className="flex-1">{children}</main>
          {!isAdminRoute && <Footer />}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
