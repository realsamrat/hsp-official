"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { useEffect, useState, useRef } from "react"

// Load Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
})

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Function to update state based on window width
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkMobile()

      // Add event listener for window resize
      window.addEventListener("resize", checkMobile)

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Ensure video plays when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay was prevented:", error)
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="w-full min-h-[80vh] relative flex flex-col justify-center px-4 md:px-8 lg:px-16 py-6 md:py-12 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/modern-photography-studio.png"
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshothero-pdhaIqDrwHMpqHtCjlzLW1nNsrRcPD.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-1"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Heading */}
          <h1 className="hero-heading font-bodoniModa text-center mb-8 md:mb-8 lg:mb-12 text-white">
            PORTLAND&apos;S TOP-RATED HEADSHOT & PORTRAIT PHOTOGRAPHY STUDIO
          </h1>

          {/* Subheading with Playfair Display */}
          <p
            className={`${playfairDisplay.className} w-full max-w-3xl mx-auto text-center mb-6 md:mb-6 lg:mb-10 text-white`}
          >
            We Offer Headshots & Portraits For Individuals, Teams & Everything In Between. Trusted By Portlands Leading
            Companies & Professionals.
          </p>

          {/* Tagline */}
          <p className={`${playfairDisplay.className} text-center mb-10 md:mb-12 lg:mb-16 text-white`}>
            PROFESSIONAL, POLISHED & PRICED RIGHT, EVERY TIME.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <Link
              href="https://ww3.headshotportland.com/instant-quote"
              className="cta-button cta-primary button-text w-full md:w-auto text-sm md:text-base py-1 md:py-4"
            >
              <span>GET FREE QUOTE</span>
              <span className="arrow-icon w-8 h-8 md:w-10 md:h-10">
                <ArrowUpRight size={16} className="md:size-20" />
              </span>
            </Link>

            <Link
              href="https://ww3.headshotportland.com/instant"
              className="cta-button cta-secondary button-text w-full md:w-auto text-sm md:text-base py-1 md:py-4"
            >
              <span>BOOK NOW</span>
              <span className="arrow-icon w-8 h-8 md:w-10 md:h-10">
                <ArrowUpRight size={16} className="md:size-20" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Leave it to the Pros Section - Updated to match Figma design */}
      <section className="w-full relative mt-0 mb-0">
        <div className="relative">
          {/* Remove the black background div that was here */}

          {/* Headshot Grid - Responsive grid of images with updated rows */}
          <div className="w-full relative overflow-hidden">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 md:gap-2">
              {/* Row 1 - First set of headshots */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/john-headshot.jpeg"
                  alt="Professional headshot of man in navy suit"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/angela-headshot.jpeg"
                  alt="Professional headshot of woman in blue floral top"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/scott-black-shirt-headshot.jpeg"
                  alt="Professional headshot of man in black shirt"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <div className="aspect-square overflow-hidden hidden sm:block">
                <Image
                  src="/images/maureen-new-headshot.jpeg"
                  alt="Professional headshot of woman with shoulder-length brown hair in light blue shirt"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/man-glasses-headshot.jpeg"
                  alt="Professional headshot of man with glasses"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/woman-white-top-headshot.jpeg"
                  alt="Professional headshot of woman in white top"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 2 - Second set of headshots */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/tom-fisher-headshot.jpeg"
                  alt="Professional headshot of man in navy suit"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/siddhi-headshot.jpeg"
                  alt="Professional headshot of woman with red hair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/valerie-headshot.jpeg"
                  alt="Professional headshot of woman with short dark hair"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden sm:block">
                <Image
                  src="/images/man-plaid-jacket-headshot.jpeg"
                  alt="Professional headshot of man with glasses in plaid jacket"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/woman-hijab-headshot.jpeg"
                  alt="Professional headshot of woman in hijab and black blazer"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/andrew-headshot.jpeg"
                  alt="Professional headshot of man with beard and glasses"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 3 - Updated with new headshot images */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/amy-headshot.jpeg"
                  alt="Professional headshot of young Asian woman with long dark hair in white shirt"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 20%",
                    objectFit: "cover",
                    transform: "scale(1.2)",
                  }}
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/cameron-suit-headshot.jpeg"
                  alt="Professional headshot of man in navy suit"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 20%",
                    objectFit: "cover",
                    transform: "scale(1.4)",
                  }}
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/abby-purple-sweater-headshot.jpeg"
                  alt="Professional headshot of woman in purple sweater"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden sm:block">
                <Image
                  src="/images/cheryl-headshot.jpeg"
                  alt="Professional headshot of woman in patterned jacket"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/austyn-floral-shirt-headshot.jpeg"
                  alt="Professional headshot of man in floral shirt"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/hannah-green-polo-headshot.jpeg"
                  alt="Professional headshot of person in green polo"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gradient Overlay for grid */}
            <div className="absolute bottom-0 left-0 right-0 h-2/3 md:h-1/2 bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>
          </div>

          {/* Combined Text Container - Simplified structure */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-0 right-0 text-center z-20 px-4 md:px-0">
            <div className="relative">
              {/* "LEAVE IT TO THE PROS" heading */}
              <h2
                className="text-[#247ba0] font-bodoniModa text-center mb-0 md:mb-0"
                style={{
                  fontSize: "clamp(32px, 12vw, 60px)",
                  lineHeight: "1.1",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                  marginBottom: "-5px", // Negative margin to pull texts closer together
                }}
              >
                LEAVE IT TO THE PROS
              </h2>

              {/* "We're a photography studio..." subheading */}
              <p
                className="collage-subheading text-white mx-auto md:overflow-hidden"
                style={{
                  fontSize: "clamp(12px, 4vw, 24px)",
                  maxWidth: "100%",
                  textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
                  whiteSpace: "normal",
                }}
              >
                <span className="md:whitespace-nowrap">
                  We&apos;re a photography studio for people who hate being photographed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
