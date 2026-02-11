import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SS Security Services',
  description: 'Professional security services - Bodyguards, Bouncers, Protocol Guards',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
