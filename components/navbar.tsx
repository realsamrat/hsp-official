"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full py-6 px-4 md:px-8 lg:px-16">
      <div className="flex justify-between items-center">
        <Link href="/" className="z-10">
          <Image src="/images/logo.png" alt="Headshot Portland" width={125} height={40} className="h-auto w-35" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { label: "HEADSHOTS", href: "/headshots" },
            { label: "PORTRAITS", href: "/portraits" },
            { label: "GRAD", href: "/grad" },
            { label: "MODEL", href: "/model" },
            { label: "ABOUT", href: "/about" },
            { label: "FOR TEAMS", href: "/for-teams" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white hover:text-teal-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-dark-bg z-50 flex flex-col items-center justify-center">
            <button
              className="absolute top-6 right-4 text-white"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6 text-center">
              {[
                { label: "HEADSHOTS", href: "/headshots" },
                { label: "PORTRAITS", href: "/portraits" },
                { label: "GRAD", href: "/grad" },
                { label: "MODEL", href: "/model" },
                { label: "ABOUT", href: "/about" },
                { label: "FOR TEAMS", href: "/for-teams" },
                { label: "CONTACT", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-xl hover:text-teal-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
