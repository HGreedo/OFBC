import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FashionHub",
  description: "Discover boutiques and fashion designers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
        <footer className="mt-12 py-6 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            © 2023 FashionHub. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'