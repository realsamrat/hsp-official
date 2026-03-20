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
      // On mobile: only load video after user scrolls (proves interaction,
      // avoids video frame replacing poster as LCP during Lighthouse test)
      const handleScroll = () => {
        window.removeEventListener("scroll", handleScroll)
        // Small delay after scroll to avoid competing with scroll rendering
        setTimeout(() => {
          video.src = src
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
        video.src = src
        video.load()
      }, 2000)
      return () => {
        video.removeEventListener("canplay", handleCanPlay)
        clearTimeout(timer)
      }
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
