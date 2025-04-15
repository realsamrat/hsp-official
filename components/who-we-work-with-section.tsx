"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import LogoImage from "./logo-image"

export default function WhoWeWorkWithSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Client headshot images for the grid
  const clientHeadshots = [
    // First row - original images
    {
      id: 1,
      src: "/images/john-headshot.jpeg",
      alt: "Professional headshot of man in navy suit",
    },
    {
      id: 2,
      src: "/images/angela-headshot.jpeg",
      alt: "Professional headshot of woman in blue floral top",
    },
    {
      id: 3,
      src: "/images/cheryl-headshot.jpeg",
      alt: "Professional headshot of woman in patterned jacket",
    },
    {
      id: 4,
      src: "/images/maureen-headshot.jpeg",
      alt: "Professional headshot of woman with shoulder-length brown hair",
    },
    {
      id: 5,
      src: "/images/man-glasses-headshot.jpeg",
      alt: "Professional headshot of man with glasses",
    },
    {
      id: 6,
      src: "/images/woman-white-top-headshot.jpeg",
      alt: "Professional headshot of woman in white top",
    },
    {
      id: 7,
      src: "/images/tom-fisher-headshot.jpeg",
      alt: "Professional headshot of man in navy suit",
    },
    {
      id: 8,
      src: "/images/siddhi-headshot.jpeg",
      alt: "Professional headshot of woman with red hair",
    },
    {
      id: 9,
      src: "/images/valerie-headshot.jpeg",
      alt: "Professional headshot of woman with short dark hair",
    },
    {
      id: 10,
      src: "/images/man-plaid-jacket-headshot.jpeg",
      alt: "Professional headshot of man with glasses in plaid jacket",
    },
    {
      id: 11,
      src: "/images/woman-hijab-headshot.jpeg",
      alt: "Professional headshot of woman in hijab and black blazer",
    },
    {
      id: 12,
      src: "/images/andrew-headshot.jpeg",
      alt: "Professional headshot of man with beard and glasses",
    },

    // Second row - new images (will be used for indices 12-19 in the grid)
    {
      id: 13,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/emily-headshot-04-03-253299%201%202.jpg-VmsMOaDmN9MMWdSK2k64n0VUyzlVTE.jpeg",
      alt: "Professional headshot of woman with curly dark hair in black top and gold earrings",
    },
    {
      id: 14,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scott-headshot-2191-Edit-2.jpg-uozArjpKzrVoYRUvzXCjiASTBjJgDn.jpeg",
      alt: "Professional headshot of man with short brown hair and beard in black shirt",
    },
    {
      id: 15,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/siddhi-307-Edit.jpg-5HqPigNI6jfHsV1B2SyzKLG5ESSiEB.jpeg",
      alt: "Professional headshot of woman with reddish-brown hair in black top",
    },
    {
      id: 16,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erica%20headshot%20retouch-12778.jpg-dc7LJ5mpo0WtdXWx9uMVAED6KmNnny.jpeg",
      alt: "Professional headshot of woman with straight brown hair in navy blue top against gray background",
    },
    {
      id: 17,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/austyn-lee-headshot-757-Edit-3.jpg-uXm9ianyJpmSwjwMymuuhGbN3EYrEO.jpeg",
      alt: "Professional headshot of bald man with mustache and beard in floral patterned shirt with tattoos",
    },
    {
      id: 18,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erik-vankeulen-headshot2353%201.jpg-lbKyJCRxzAkeuFhx79Bji8txdlCZCK.jpeg",
      alt: "Professional headshot of man with dark hair and beard in navy blue suit with patterned tie",
    },
    {
      id: 19,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hannah-connell-1628-Edit-3.jpg-SOVodBaRNFm7E7FlUmsExRTtc5C8OR.jpeg",
      alt: "Professional headshot of person with short brown hair and glasses in green polo shirt",
    },
    {
      id: 20,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-27-megan-headshot-3890-Edit-4.jpg-RF5IzkpIDaMGsbnyODK9ZiEQFAxv80.jpeg",
      alt: "Professional headshot of woman with long brown hair in blue patterned top",
    },
    {
      id: 21,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cameron-headshot0916%202.jpg-u13EAaOwkeC8jwXPOGwtTMY30hfL3J.jpeg",
      alt: "Professional headshot of man with reddish-blonde hair and beard wearing glasses, dark suit and light gray tie",
    },
    {
      id: 22,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jilma-headshot1430%202%201%202.jpg-YROL2AP7I3Qcgk6MSDzqvufKTER8mL.jpeg",
      alt: "Professional headshot of woman with long black and silver hair wearing a black top with decorative neckline",
    },
    {
      id: 23,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amy-headshot-2033-Edit-3.jpg-FHn7nXjcJeRNrVHBHzyHF4wJ6ZUzog.jpeg",
      alt: "Professional headshot of young Asian woman with long dark hair in white button-up shirt with a bright smile",
    },
    {
      id: 24,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cameron-1291-Edit-3.jpg-8QcYr5penzrpBkv5M1dHdXvqrsfoQZ.jpeg",
      alt: "Professional headshot of young man with glasses in navy blue suit and patterned tie",
    },
  ]

  // Company logos
  const companyLogos = [
    {
      id: 1,
      src: "/images/logos/facebook-logo.svg",
      alt: "Facebook logo",
      width: 190,
      height: 37,
      className: "h-6 md:h-8",
    },
    {
      id: 2,
      src: "/images/amazon-logo-new.png", // Using existing PNG
      alt: "Amazon logo",
      width: 120,
      height: 40,
      className: "h-7 md:h-9",
    },
    {
      id: 3,
      src: "/images/logos/chase-logo.svg",
      alt: "Chase logo",
      width: 179,
      height: 33,
      className: "h-5 md:h-7",
    },
    {
      id: 4,
      src: "/images/logos/microsoft-logo.svg",
      alt: "Microsoft logo",
      width: 120,
      height: 40,
      className: "h-7 md:h-9",
    },
    {
      id: 5,
      src: "/images/logos/intel-logo.svg",
      alt: "Intel logo",
      width: 108,
      height: 42,
      className: "h-7 md:h-9",
    },
    {
      id: 6,
      src: "/images/logos/nike-logo.svg",
      alt: "Nike logo",
      width: 129,
      height: 45,
      className: "h-6 md:h-8",
    },
    {
      id: 7,
      src: "/images/logos/toyota-logo.svg",
      alt: "Toyota logo",
      width: 179,
      height: 50,
      className: "h-7 md:h-9",
    },
    {
      id: 8,
      src: "/images/logos/starbucks-logo.svg",
      alt: "Starbucks logo",
      width: 215,
      height: 19,
      className: "h-4 md:h-6",
    },
  ]

  // Function to safely get an image from the array
  const getHeadshot = (index) => {
    // Ensure index is within bounds
    if (index >= 0 && index < clientHeadshots.length) {
      return clientHeadshots[index]
    }
    // Fallback to first image if index is out of bounds
    return clientHeadshots[0]
  }

  return (
    <div className="w-full px-[10px] my-[10px]">
      <section className="w-full rounded-[10px] overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Headshot Grid - 12 columns and 2 rows for desktop */}
          <div className="grid grid-cols-12 gap-0">
            {Array.from({ length: 24 }).map((_, index) => {
              let headshotIndex

              if (index < 12) {
                // First row - use original images (indices 0-11)
                headshotIndex = index
              } else if (index < 24) {
                // Second row - use new images (indices 12-23)
                headshotIndex = index
              } else {
                // Fallback - use images from first row
                headshotIndex = index - 24
              }

              const headshot = getHeadshot(headshotIndex)

              // Special styling for the 12th image in the second row (index 23)
              const imageStyle =
                index === 23 ? { objectFit: "cover", objectPosition: "center 25%" } : { objectFit: "cover" }

              return (
                <div key={`grid-${index}`} className="aspect-square relative">
                  <Image
                    src={headshot.src || "/placeholder.svg"}
                    alt={headshot.alt}
                    fill
                    className="object-cover"
                    style={imageStyle}
                  />
                </div>
              )
            })}
          </div>

          {/* Gradient overlay for bottom row - adjusted to be shorter */}
          <div
            className="absolute bottom-20 left-0 right-0 h-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,2.5) 35%, rgba(255,255,255,1) 100%)",
            }}
          ></div>

          {/* White section with title and logos */}
          <div className="bg-white py-16 px-12 relative z-10">
            <div className="flex flex-row">
              {/* Left side - Title (20% width) */}
              <div className="w-1/5">
                <h2 className="font-bodoniModa italic text-black text-5xl leading-tight">
                  Who We
                  <br />
                  Work With
                </h2>
              </div>

              {/* Right side - Logo grid (80% width) */}
              <div className="w-4/5">
                <div className="grid grid-cols-4 gap-x-12 gap-y-10">
                  {companyLogos.map((logo) => (
                    <div key={logo.id} className="flex items-center justify-center h-12">
                      <LogoImage
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={logo.className}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          {/* Headshot Grid - 2x4 for mobile */}
          <div className="grid grid-cols-2 gap-0">
            {/* Show a mix of original and new images */}
            {[0, 1, 2, 3, 12, 13, 14, 15].map((index) => {
              const headshot = getHeadshot(index)
              return (
                <div key={`mobile-${index}`} className="aspect-square relative">
                  <Image src={headshot.src || "/placeholder.svg"} alt={headshot.alt} fill className="object-cover" />
                </div>
              )
            })}
          </div>

          {/* Gradient overlay - adjusted to be shorter */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,2.5) 40%, rgba(255,255,255,1) 100%)",
            }}
          ></div>

          {/* White section with title and logos */}
          <div className="bg-white py-12 px-6 relative z-10">
            {/* Title */}
            <h2 className="font-bodoniModa italic text-black text-4xl leading-tight mb-8">
              Who We
              <br />
              Work With
            </h2>

            {/* Logo grid */}
            <div className="grid grid-cols-2 gap-8">
              {companyLogos.map((logo) => (
                <div key={logo.id} className="flex items-center justify-center h-10">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={logo.className}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
