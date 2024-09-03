import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "My Little Prison",
  description: "Explore Daffa' Athalla's projects and codes showcased within a mini game experience.",
  authors: [{ name: "The Promised Desire" }],
  keywords: ["Daffa Athallah", "Daffa'Athallah", "Muhammad Daffa Athallah' Rifqi", "My Little Prison Daffa", "My Little Prison"],
  creator: "Daffa' Athallah",
  themeColor: "#333333",
  verification: { google: "QxUv0RTXoyXKd6Q5sk7z4hXvYEbaFzpk0s_gOD0HI_M" },
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
