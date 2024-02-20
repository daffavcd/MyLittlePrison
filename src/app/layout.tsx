import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "My Little Prison • Daffa' Athallah - Projects Showcase",
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
    <html lang="en" className='scroll-smooth no-scrollbar' style={{ height: "100%" }}>
      <body className={poppins.className} style={{ backgroundColor: "black" }}>{children}</body>
    </html>
  )
}
