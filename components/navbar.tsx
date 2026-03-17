"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "HEADSHOTS", href: "/headshots" },
  { label: "PORTRAITS", href: "/portraits" },
  { label: "GRAD", href: "/grad" },
  { label: "MODEL", href: "/model" },
  { label: "ABOUT", href: "/about" },
  { label: "FOR TEAMS", href: "/for-teams" },
  { label: "CONTACT", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full text-white py-6 px-5 md:px-16">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="block z-10">
          <div className="w-24 h-8 relative">
            <Image
              src="/images/logos/headshot_portland_white.svg"
              alt="Headshot Portland"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.label === "HOME" && pathname === "/")
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={
                      isActive
                        ? "bg-white text-brand-teal px-4 py-2 rounded-full font-bold focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                        : "hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-dark-bg z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-5 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav>
            <ul className="flex flex-col space-y-6 text-center">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.label === "HOME" && pathname === "/")
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={
                        isActive
                          ? "text-brand-teal text-xl font-bold"
                          : "text-white text-xl hover:text-brand-teal transition-colors"
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
