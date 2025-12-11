import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ashwaniverma.com'),
  title: {
    default: 'Ashwani Verma - Dev building products to create small impacts in life',
    template: '%s | Ashwani Verma',
  },
  description: 'Dev building products to create small impacts in life. Available for monthly retainer and freelance projects.',
  applicationName: 'Ashwani Verma Product Portfolio',
  authors: [{ name: 'Ashwani Verma', url: 'https://ashwaniv.me' }],
  generator: 'Next.js',
  keywords: [
    'full-stack developer', 
    'web development', 
    'React', 
    'Next.js', 
    'AWS', 
    'DevOps', 
    'software engineer', 
    'web applications',
    'frontend development',
    'backend development'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashwaniv.me',
    title: 'Ashwani Verma - Dev - Building products to create small impacts in life',
    description: 'Dev building products to create small impacts in life. Available for monthly retainer and freelance projects.',
    siteName: 'Ashwani Verma Product Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ashwani Verma - Dev building products to create small impacts in life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashwani Verma - Dev - Building products to create small impacts in life',
    description: 'Dev building products to create small impacts in life. Available for monthly retainer and freelance projects.',
    creator: '@ashwanivermax',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Script
        src="https://www.feedinbox.com/widget.js"
        strategy="lazyOnload"
      />
      <Script id="feedinbox-config">
        {`
          window.feedinboxConfig = {
            projectKey: "cmj0stzxh000cnruladng1ptx"
          };
        `}
      </Script> 
      </body>
      
    </html>
  )
}
