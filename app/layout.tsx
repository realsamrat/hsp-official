import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { inter, bodoni, playfair, bodoniModa } from "./fonts"

export const metadata: Metadata = {
  title: "Headshot Portland - Professional Photography Studio",
  description: "Portland's top-rated headshot and portrait photography studio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable} ${playfair.variable} ${bodoniModa.variable}`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/LTCBodoni175Pro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
