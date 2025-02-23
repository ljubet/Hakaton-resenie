import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import FloatingNewsButton from "@/components/FloatingNewsButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Srekja.mk",
  description: "Connect with startups and entrepreneurs",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      {children}
      <FloatingNewsButton />
      </body>
      </html>
  )
}

