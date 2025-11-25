import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-4pa.pages.dev'),
  title: 'Hariharan T | Full Stack Engineer & AI/ML Enthusiast',
  description: 'Aspiring Full Stack Engineer & AI/ML Enthusiast with strong skills in React, Python, and AI-driven applications. Experienced in developing scalable projects that integrate Machine Learning, NLP, GenAI APIs, and Web Technologies.',
  keywords: 'Hariharan T, Portfolio, Full Stack Engineer, AI, ML, Machine Learning, Artificial Intelligence, React, Python, Next.js, Chennai, Software Developer',
  authors: [{ name: 'Hariharan T' }],
  creator: 'Hariharan T',
  publisher: 'Hariharan T',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-4pa.pages.dev',
    title: 'Hariharan T | Full Stack Engineer & AI/ML Enthusiast',
    description: 'Aspiring Full Stack Engineer & AI/ML Enthusiast with strong skills in React, Python, and AI-driven applications.',
    siteName: 'Hariharan T Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariharan T | Full Stack Engineer & AI/ML Enthusiast',
    description: 'Aspiring Full Stack Engineer & AI/ML Enthusiast with strong skills in React, Python, and AI-driven applications.',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  )
}