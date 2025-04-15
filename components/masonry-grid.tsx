"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface MasonryGridProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function MasonryGrid({ images, className = "" }: MasonryGridProps) {
  const [columns, setColumns] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateColumns = () => {
      if (!containerRef.current) return

      const width = window.innerWidth
      if (width < 640) {
        setColumns(2)
      } else if (width < 1024) {
        setColumns(3)
      } else {
        setColumns(4)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  // Distribute images across columns
  const getColumnImages = () => {
    const columnImages: (typeof images)[] = Array.from({ length: columns }, () => [])

    images.forEach((image, index) => {
      const columnIndex = index % columns
      columnImages[columnIndex].push(image)
    })

    return columnImages
  }

  return (
    <div ref={containerRef} className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {getColumnImages().map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="aspect-[3/4]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
