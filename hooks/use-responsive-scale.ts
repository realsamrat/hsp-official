"use client"

import { useState, useEffect } from "react"

export function useResponsiveScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    // Function to calculate scale based on viewport width
    const calculateScale = () => {
      const width = window.innerWidth
      if (width < 480) {
        return 0.6
      } else if (width < 768) {
        return 0.8
      } else if (width < 1024) {
        return 0.9
      } else {
        return 1
      }
    }

    // Set initial scale
    setScale(calculateScale())

    // Update scale on resize
    const handleResize = () => {
      setScale(calculateScale())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return scale
}
