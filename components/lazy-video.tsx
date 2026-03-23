"use client"

import { useEffect, useRef, useState } from "react"

export default function LazyVideo({
  src,
  poster,
  className = "",
}: {
  src: string
  poster: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Observe when the video scrolls into view
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Load and play video once visible
  useEffect(() => {
    if (!isVisible) return
    const video = videoRef.current
    if (!video) return

    const handlePlaying = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsReady(true)
        })
      })
    }

    video.addEventListener("playing", handlePlaying)

    // src is already in HTML (Safari requires this for autoplay)
    // Just trigger load + play
    video.load()

    const handleCanPlayThrough = () => {
      video.play().catch(() => {})
    }
    video.addEventListener("canplaythrough", handleCanPlayThrough)

    return () => {
      video.removeEventListener("playing", handlePlaying)
      video.removeEventListener("canplaythrough", handleCanPlayThrough)
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Poster stays visible until video is actually playing */}
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover rounded transition-opacity duration-500 ${isReady ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0"}`}
        src={src}
        muted
        loop
        playsInline
        preload="none"
      />
    </div>
  )
}
