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

    const isMobile = window.innerWidth < 768

    if (isMobile) {
      // On mobile: only load video after user scrolls
      const handleScroll = () => {
        window.removeEventListener("scroll", handleScroll)
        setTimeout(() => {
          // src is already in HTML — just trigger load
          video.load()
        }, 1000)
      }
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => {
        video.removeEventListener("canplay", handleCanPlay)
        window.removeEventListener("scroll", handleScroll)
      }
    } else {
      // On desktop: load after 2s delay
      const timer = setTimeout(() => {
        video.load()
      }, 2000)
      return () => {
        video.removeEventListener("canplay", handleCanPlay)
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-label="Background video showing headshot photography studio sessions"
    />
  )
}
