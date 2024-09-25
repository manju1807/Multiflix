import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  metadataBase: new URL('https://multiflix18.netlify.app/'),
  title: 'Multiflix',
  description:
    'Multiflix is a streaming platform for those who enjoy relaxing and binge-watching their favorite movies, series, and more.',
  keywords:
    'streaming platform, movies, TV series, binge-watching, entertainment, Multiflix, relaxation, cinema, film, television',
  openGraph: {
    type: 'website',
    url: 'https://multiflix18.netlify.app/',
    title: 'Multiflix - Your Ultimate Streaming Platform',
    description:
      'Explore a vast library of movies and TV series on Multiflix. Discover, stream, and enjoy your favorite content across various genres.',
    siteName: 'Multiflix',
    images: [
      {
        url: 'https://multiflix18.netlify.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Multiflix - Your Ultimate Streaming Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multiflix - Your Ultimate Streaming Platform',
    description:
      'Discover and stream your favorite movies and TV series on Multiflix. Enjoy a vast library of content across various genres.',
    images: ['https://multiflix18.netlify.app/opengraph-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png'
  },
  alternates: {
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES'
    },
    canonical: 'https://multiflix18.netlify.app/'
  },
  authors: [{ name: 'Manjunath R' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  applicationName: 'Multiflix',
  category: 'Entertainment, Streaming Platform, Movies, TV Series'
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`${inter.className} scroll-smooth`}>
        <head>
          <link
            rel="alternate"
            hrefLang="en-US"
            href="https://multiflix18.netlify.app/en-US"
          />
          <link
            rel="alternate"
            hrefLang="es-ES"
            href="https://multiflix18.netlify.app/es-ES"
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://multiflix18.netlify.app/"
          />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col antialiased">
              <div className="flex-1">
                <Navbar />
                {children}
              </div>
            </div>
            <Footer />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
