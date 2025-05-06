"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AuthModal } from "@/components/auth-modal"
import { MessageModal } from "@/components/message-modal"
import { cn } from "@/lib/utils"
import { Menu, X, MessageSquare, User, LogIn, AlertTriangle } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/boutiques",
      label: "Boutiques",
      active: pathname === "/boutiques" || pathname?.startsWith("/boutiques/"),
    },
    {
      href: "/designers",
      label: "Designers",
      active: pathname === "/designers" || pathname?.startsWith("/designers/"),
    },
    {
      href: "/resources",
      label: "Resources",
      active: pathname === "/resources" || pathname?.startsWith("/resources/"),
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ]

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">FashionBuyersClub</h1>
          </Link>
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-500",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Supabase Disconnected
            </div>
          </div>

          <div className="flex items-center ml-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2" aria-label="Messages">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <MessageModal />
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <AuthModal />
              </DialogContent>
            </Dialog>

            <Button size="sm" className="ml-4 hidden md:flex">
              <LogIn className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </div>

          <Button
            variant="ghost"
            className="ml-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden pt-16">
          <nav className="px-6 py-8 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-black",
                  route.active ? "text-black" : "text-neutral-500",
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button className="mt-6">
              <LogIn className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
