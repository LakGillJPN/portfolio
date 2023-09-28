"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Offside } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
export const offside = Offside({ subsets: ['latin'], weight:['400']})

export const jleague = localFont({
  src: [
    {
      path: '../../public/fonts/j-league/JLEAGUEKICK-BoldCondensed.eot',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/j-league/JLEAGUEKICK-BoldCondensed.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/j-league/JLEAGUEKICK-BoldCondensed.woff',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/j-league/JLEAGUEKICK-BoldCondensed.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--jleague'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jleague.variable} font-sans`}>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
