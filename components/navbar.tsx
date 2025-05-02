"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AuthModal } from "@/components/auth-modal"

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Boutiques",
    href: "/boutiques",
    submenu: [
      { name: "View All", href: "/boutiques" },
      { name: "Submit Boutique", href: "/boutiques/submit" },
    ],
  },
  {
    name: "Designers",
    href: "/designers",
    submenu: [
      { name: "View All", href: "/designers" },
      { name: "Submit Designer Profile", href: "/designers/submit" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      { name: "Inspiration Corner", href: "/resources/inspiration" },
      { name: "Community News", href: "/resources/community-news" },
      { name: "Industry News", href: "/resources/industry-news" },
    ],
  },
  {
    name: "About",
    href: "/about",
  },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                FashionBuyersClub
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) =>
                item.submenu ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name}>
                          <Link href={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                      pathname === item.href
                        ? "border-primary text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    )}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <AuthModal />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("sm:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 pb-3 pt-2">
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.submenu ? (
                <>
                  <div className="px-3 py-2 text-base font-medium text-gray-500">{item.name}</div>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className={cn(
                        "block border-l-4 py-2 pl-6 pr-4 text-base font-medium",
                        pathname === subItem.href
                          ? "border-primary bg-primary-foreground text-primary"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                      )}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                    pathname === item.href
                      ? "border-primary bg-primary-foreground text-primary"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <AuthModal />
          </div>
        </div>
      </div>
    </nav>
  )
}
