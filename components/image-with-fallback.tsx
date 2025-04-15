"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.svg?height=200&width=1200",
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  return <Image {...rest} src={error ? fallbackSrc : src} alt={alt} onError={() => setError(true)} />
}
