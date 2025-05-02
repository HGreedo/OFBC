import { Navbar } from "@/components/navbar"
import { PageTransition } from "@/components/page-transition"
import { cn } from "@/lib/utils"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import Link from "next/link"
import type React from "react"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "FashionBuyersClub",
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
      <body className={cn("min-h-screen bg-background font-sans antialiased", montserrat.className)}>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <footer className="mt-12 py-6 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                © 2025 FashionBuyersClub. All rights reserved.
              </div>
              <div className="space-x-4">
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms and Conditions
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
