"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
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
      { name: "Events", href: "/resources/events" },
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
    <nav className="bg-white shadow py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-black">
              FashionBuyersClub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      {/* For items with submenu, make the main item a link too */}
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex items-center px-1 pt-1 pb-2 text-sm font-medium border-b-2",
                          pathname === item.href
                            ? "border-black text-black"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-black",
                        )}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Link>

                      {/* Dropdown menu */}
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center border-b-2 px-1 pt-1 pb-2 text-sm font-medium",
                        pathname === item.href
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-black",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Button (Desktop) */}
          <div className="hidden md:block">
            <AuthModal />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  {/* Main item */}
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      pathname === item.href
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:bg-gray-50 hover:text-black",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>

                  {/* Submenu items if any */}
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-3 py-2 rounded-md text-sm font-medium",
                            pathname === subItem.href
                              ? "bg-gray-100 text-black"
                              : "text-gray-500 hover:bg-gray-50 hover:text-black",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4 flex items-center">
                <AuthModal />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
