import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Arabic, Noto_Serif } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingChatButton from "@/components/floating-chat-button"
import { UserProvider } from "@/contexts/UserContext"
import ErrorBoundary from "@/components/error-boundary"
import { Analytics } from '@vercel/analytics/react'
import StructuredData from "@/components/structured-data"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e8b007" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Al-Azhar School" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${notoSansArabic.variable} ${notoSerif.variable} ${notoSansArabic.className}`} suppressHydrationWarning={true}>
        <ErrorBoundary>
          <UserProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <FloatingChatButton />
          </UserProvider>
        </ErrorBoundary>
        <Analytics />
        <StructuredData 
          type="organization" 
          data={{
            name: "Al-Azhar School",
            description: "Learn the Holy Quran from Al-Azhar scholars anywhere in the world."
          }} 
        />
      </body>
    </html>
  )
}

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-noto-sans-arabic"
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
  variable: "--font-noto-serif"
})

export const metadata: Metadata = {
  metadataBase: new URL((process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')) ? process.env.NEXT_PUBLIC_SITE_URL : 'http://localhost:3000'),
  title: {
    default: "Al-Azhar School - Learn Quran & Arabic Online",
    template: "%s | Al-Azhar School"
  },
  description: "Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.",
  keywords: ["Quran", "Arabic", "Islamic Studies", "Online Learning", "Al-Azhar", "Quran Memorization", "Islamic Education"],
  authors: [{ name: "Al-Azhar School" }],
  creator: "Al-Azhar School",
  publisher: "Al-Azhar School",
  generator: 'Next.js',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')) ? process.env.NEXT_PUBLIC_SITE_URL : 'https://alazharschool.com',
    title: 'Al-Azhar School - Learn Quran & Arabic Online',
    description: 'Learn the Holy Quran from Al-Azhar scholars anywhere in the world. Online Quran memorization, Arabic language, and Islamic studies courses.',
    siteName: 'Al-Azhar School',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Al-Azhar School - Islamic Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al-Azhar School - Learn Quran & Arabic Online',
    description: 'Learn the Holy Quran from Al-Azhar scholars anywhere in the world.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GA_ID,
  },
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')) ? process.env.NEXT_PUBLIC_SITE_URL : 'https://alazharschool.com',
  },
  category: 'Education',
  classification: 'Islamic Education',
  referrer: 'origin-when-cross-origin',
}
