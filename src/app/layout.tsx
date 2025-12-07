import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'C Vishwak Sena | Portfolio - Computer Science & Data Science Student',
  description: 'Portfolio of C Vishwak Sena - Computer Science & Data Science Student at CMR Institute of Technology. Specializing in Python, Java, C++, Machine Learning, and Full-Stack Development. CGPA: 9.12/10. ISRO Intern.',
  keywords: ['C Vishwak Sena', 'Portfolio', 'Computer Science', 'Data Science', 'Machine Learning', 'Python Developer', 'Full Stack Developer', 'CMRIT', 'ISRO Intern', 'Web Development', 'React', 'Next.js'],
  authors: [{ name: 'C Vishwak Sena' }],
  creator: 'C Vishwak Sena',
  publisher: 'C Vishwak Sena',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vishwaksen.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'C Vishwak Sena | Computer Science & Data Science Portfolio',
    description: 'Computer Science & Data Science Student at CMR Institute of Technology. Specializing in Machine Learning, Python, and Full-Stack Development. CGPA: 9.12/10.',
    url: 'https://vishwaksen.vercel.app',
    siteName: 'C Vishwak Sena Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/vishwak_professional.png',
        width: 1200,
        height: 630,
        alt: 'C Vishwak Sena - Computer Science & Data Science Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C Vishwak Sena | Computer Science & Data Science Portfolio',
    description: 'Computer Science & Data Science Student specializing in Machine Learning and Full-Stack Development.',
    images: ['/vishwak_professional.png'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/vishwak_logo.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className={cn('antialiased min-h-screen bg-background flex flex-col text-base sm:text-base')} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="w-full bg-background">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
