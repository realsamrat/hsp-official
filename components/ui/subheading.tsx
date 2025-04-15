import type React from "react"
import { cn } from "@/lib/utils"

interface SubheadingProps {
  children: React.ReactNode
  className?: string
  as?: "h3" | "h4" | "h5" | "h6" | "p"
}

export function Subheading({ children, className, as = "h3" }: SubheadingProps) {
  const Component = as

  return <Component className={cn("subheading font-playfair", className)}>{children}</Component>
}
