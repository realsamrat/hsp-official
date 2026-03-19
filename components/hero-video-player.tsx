"use client"

import { useEffect, useRef } from "react"

export default function HeroVideoPlayer({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Only autoplay on desktop — on mobile the poster is the LCP element
    // and video download on slow connections causes LCP to spike to 12s+
    if (window.innerWidth >= 768) {
      videoRef.current?.play().catch(() => {})
    }
  }, [])

  return (
    <video
      ref={videoRef}
      suppressHydrationWarning
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay={false}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      fetchPriority="high"
      aria-label="Background video showing headshot photography studio sessions"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
