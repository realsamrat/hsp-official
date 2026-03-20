"use client"

import { useState } from "react"

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Headshot+Portland,+805+SW+Broadway,+Portland,+OR+97209,+United+States&output=embed"

export default function InteractiveMap() {
  const [showMap, setShowMap] = useState(false)

  if (showMap) {
    return (
      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        title="Headshot Portland Studio Location"
        aria-label="Interactive map showing Headshot Portland studio location at 750 SW 9th Ave, Portland, OR 97205"
      />
    )
  }

  return (
    <div
      className="relative cursor-pointer group w-full h-full"
      onClick={() => setShowMap(true)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/map-static.webp"
        alt="Map showing Headshot Portland at 750 SW 9th Ave, Portland, OR 97205"
        className="w-full h-full object-cover rounded-md"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors rounded-md">
        <button className="bg-white text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          View Interactive Map
        </button>
      </div>
    </div>
  )
}
