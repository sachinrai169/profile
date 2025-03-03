import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sachin B S - Senior Full Stack/Lead Developer",
  description:
    "Portfolio of Sachin B S, a Senior Full Stack/Lead Developer with expertise in JavaScript, Angular, React, Java, DevOps, and AWS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  )
}



import './globals.css'