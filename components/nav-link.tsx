"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({
  href,
  children,
  className,
  activeClassName,
}: {
  href: string
  children: React.ReactNode
  className: string
  activeClassName: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href || (href === "/" && pathname === "/")

  return (
    <Link href={href} className={isActive ? activeClassName : className}>
      {children}
    </Link>
  )
}
