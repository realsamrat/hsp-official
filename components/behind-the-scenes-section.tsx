"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function BehindTheScenesSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<number | null>(1)

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

  useEffect(() => {
    // Auto-play all videos when component mounts
    const videoElements = [
      document.getElementById("video-1") as HTMLVideoElement,
      document.getElementById("video-desktop-1") as HTMLVideoElement,
      document.getElementById("video-2") as HTMLVideoElement,
      document.getElementById("video-desktop-2") as HTMLVideoElement,
      document.getElementById("video-3") as HTMLVideoElement,
      document.getElementById("video-desktop-3") as HTMLVideoElement,
      document.getElementById("video-4") as HTMLVideoElement,
      document.getElementById("video-desktop-4") as HTMLVideoElement,
      document.getElementById("video-5") as HTMLVideoElement,
      document.getElementById("video-desktop-5") as HTMLVideoElement,
      document.getElementById("video-6") as HTMLVideoElement,
      document.getElementById("video-desktop-6") as HTMLVideoElement,
    ]

    videoElements.forEach((video) => {
      if (video) {
        video.muted = true // Mute initially to allow autoplay
        video.play().catch((error) => {
          console.error("Autoplay failed:", error)
        })
      }
    })

    // Set first video as playing
    setPlayingVideo(1)
  }, [])

  const handleVideoPlay = (id: number) => {
    if (playingVideo === id) {
      setPlayingVideo(null)
      const videoElement = document.getElementById(`video-${id}`) as HTMLVideoElement
      const desktopVideoElement = document.getElementById(`video-desktop-${id}`) as HTMLVideoElement
      if (videoElement) {
        videoElement.pause()
        videoElement.muted = true
      }
      if (desktopVideoElement) {
        desktopVideoElement.pause()
        desktopVideoElement.muted = true
      }
    } else {
      setPlayingVideo(id)
      const videoElement = document.getElementById(`video-${id}`) as HTMLVideoElement
      const desktopVideoElement = document.getElementById(`video-desktop-${id}`) as HTMLVideoElement
      if (videoElement) {
        videoElement.muted = false
        videoElement.play()
      }
      if (desktopVideoElement) {
        desktopVideoElement.muted = false
        desktopVideoElement.play()
      }
    }
  }

  // Behind the scenes testimonials data
  const btsTestimonials = [
    {
      id: 1,
      name: "JESSICA THORNTON",
      title: "HR Manager, Thorn",
      image: "/confident-blonde-professional.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ericabts-xK21OEM9wEK08g0hJYQM49H5z4SVZM.mp4",
      text: "We were holding an annual team offsite and wanted to make sure we got everyone photographed while we were in the same place. Nathan and his team were easy to work with and made this easy for everyone. Viewing the images instantly was also a huge plus and made things go by quickly.",
    },
    {
      id: 2,
      name: "SARA BRIDGES",
      title: "Real Estate Broker, Redfin",
      image: "/confident-professional.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ScottBTS-Ot31nGVSJsgffLIotpTwf6GKhsRHLh.mp4",
      text: "Nathan is a ball of energy that brings the best out of people. He knew just how to get inside my head and make me feel relaxed in front of the camera witch literally never happens. Coming to the studio was simple and seeing the images right away it really easy.",
    },
    {
      id: 3,
      name: "MICHAEL CHEN",
      title: "Software Engineer, Tech Co.",
      image: "/confident-asian-professional.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EricaBTS2-TjcvDcAwSlhQAuTrXGy6N4Q0vKmSU7.mp4",
      text: "Nathan is a ball of energy that brings the best out of people. He knew just how to get inside my head and make me feel relaxed in front of the camera witch literally never happens. Coming to the studio was simple and seeing the images right away it really easy.",
    },
    {
      id: 4,
      name: "EMILY JOHNSON",
      title: "Marketing Director, Agency X",
      image: "/confident-professional.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ScottBTS2-kpQ433pfSHwfpZOovp0dUojUsDrVXs.mp4",
      text: "Nathan is a ball of energy that brings the best out of people. He knew just how to get inside my head and make me feel relaxed in front of the camera witch literally never happens. Coming to the studio was simple and seeing the images right away it really easy.",
    },
    {
      id: 5,
      name: "DAVID WILSON",
      title: "CEO, Startup Inc.",
      image: "/confident-businessman.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ScottBTS3-U3Nle0DW439UCkHYYLpk4A21mWU42c.mp4",
      text: "Nathan is a ball of energy that brings the best out of people. He knew just how to get inside my head and make me feel relaxed in front of the camera witch literally never happens. Coming to the studio was simple and seeing the images right away it really easy.",
    },
    {
      id: 6,
      name: "JENNIFER LOPEZ",
      title: "Freelance Designer",
      image: "/confident-latina-professional.png",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EricaBTS3-9XPAsxKt5NJNj44j5s1dbOUhcdP1Kj.mp4",
      text: "Nathan is a ball of energy that brings the best out of people. He knew just how to get inside my head and make me feel relaxed in front of the camera witch literally never happens. Coming to the studio was simple and seeing the images right away it really easy.",
    },
  ]

  return (
    <div className="w-full px-[10px] my-[10px]">
      <section
        className="w-full rounded-[10px] bg-[#FDF0E1]"
        style={{
          display: "flex",
          padding: "116px 10px",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Heading */}
          <h2 className="font-bodoniModa text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16">
            <span className="text-[#247BA0]">See</span> <span className="text-black">Behind the Scenes</span>
          </h2>

          {/* BTS Grid - Mobile Layout */}
          <div className="md:hidden space-y-6">
            {btsTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-[16px] overflow-hidden border border-[#1D1C1D] transition-colors duration-300 group bg-[#FDF0E1] hover:bg-[#1D1C1D]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                  gap: "16px",
                }}
              >
                <div className="flex mb-4">
                  <span className="text-black group-hover:text-white text-6xl font-serif">"</span>
                </div>
                <p className="text-black group-hover:text-white text-base mb-6">{testimonial.text}</p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-black group-hover:text-white font-bodoniModa italic text-xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-black group-hover:text-white text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mt-auto rounded-lg overflow-hidden">
                  <div className="aspect-[9/16] relative">
                    {testimonial.id <= 6 && testimonial.video ? (
                      <video
                        id={`video-${testimonial.id}`}
                        src={testimonial.video}
                        className="w-full h-full object-cover rounded-lg"
                        loop
                        playsInline
                        muted={true}
                        autoPlay
                        onClick={() => handleVideoPlay(testimonial.id)}
                      />
                    ) : (
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Behind the scenes with ${testimonial.name}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BTS Grid - Desktop Layout with video on left */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {btsTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-[16px] overflow-hidden border border-[#1D1C1D] transition-colors duration-300 group cursor-pointer bg-[#FDF0E1] hover:bg-[#1D1C1D]"
                style={{
                  display: "flex",
                  height: "440px",
                  padding: "16px",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 0 0",
                }}
              >
                {/* Left side - Video */}
                <div className="w-[40%] h-full relative rounded-lg overflow-hidden">
                  <div className="aspect-[9/16] h-full relative">
                    {testimonial.id <= 6 && testimonial.video ? (
                      <video
                        id={`video-desktop-${testimonial.id}`}
                        src={testimonial.video}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        muted={true}
                        autoPlay
                        onClick={() => handleVideoPlay(testimonial.id)}
                      />
                    ) : (
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Behind the scenes with ${testimonial.name}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Right side - Text content */}
                <div className="w-[60%] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex mb-4">
                      <span className="text-black group-hover:text-white text-6xl font-serif">"</span>
                    </div>
                    <p className="text-black group-hover:text-white text-base">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-black group-hover:text-white font-bodoniModa italic text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-black group-hover:text-white text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
