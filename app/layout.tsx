import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
// import RocketScrollIndicator from '@/components/rocket-scroll-indicator';
import { Suspense } from 'react';
import PageTransition from '@/components/page-transition';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  title: 'ISRO - Indian Space Research Organisation',
  description: 'Exploring space for the benefit of humanity. India\'s premier space agency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased bg-black text-white overflow-x-hidden relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="stars-bg">
            <div className="stars-1"></div>
            <div className="stars-2"></div>
            <div className="stars-3"></div>
          </div>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <Suspense fallback={null}>
              {/* <RocketScrollIndicator /> */}
            </Suspense>
            <main className="flex-1">
              <PageTransition>
                <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">
                  <div className="animate-pulse text-blue-500">Loading...</div>
                </div>}>
                  {children}
                </Suspense>
              </PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}