"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsReady(true)
      video.play().catch(() => {})
    }

    video.addEventListener("canplay", handleCanPlay)

    // Delay video load so it never competes with LCP
    const isMobile = window.innerWidth < 768
    const delay = isMobile ? 5000 : 2000

    const timer = setTimeout(() => {
      video.src = src
      video.load()
    }, delay)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      clearTimeout(timer)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}
      muted
      loop
      playsInline
      preload="none"
      aria-label="Background video showing headshot photography studio sessions"
    />
  )
}
