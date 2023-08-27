import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: "My Little Prison",
  description: "Explore Daffa' Athalla's projects and codes showcased within a mini game-like experience.",
  creator: "Daffa' Athallah",
  themeColor: "#333333",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
