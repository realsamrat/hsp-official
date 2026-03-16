"use client"

import Image from "next/image"

export default function LeaveItToPros() {
  return (
    <section className="w-full relative mt-0 mb-0">
      <div className="relative">
        {/* Headshot Grid */}
        <div className="w-full relative overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 md:gap-2">
            {/* Row 1 */}
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/angela-headshot-photo.webp"
                alt="Professional headshot of woman with dark hair in blue floral top"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/abby-headshot-portland.webp"
                alt="Professional headshot of woman with reddish-brown hair in purple sweater"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/austyn-portland-headshots.webp"
                alt="Professional headshot of bald man with mustache in floral shirt"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden sm:block">
              <Image
                src="/images/HeroGrid18/john-headshot-portland.webp"
                alt="Professional headshot of man in navy suit"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden md:block">
              <Image
                src="/images/HeroGrid18/cheryl-doctor-headshots.webp"
                alt="Professional headshot of woman in black and white checkered jacket"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden md:block">
              <Image
                src="/images/HeroGrid18/scott-black-shirt-headshot.webp"
                alt="Professional headshot of man in black shirt"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/headshot-portland-amy.webp"
                alt="Professional headshot of Asian woman in white button-up shirt"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/cameron-suit-headshot.webp"
                alt="Professional headshot of young man with glasses in navy suit"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/hannah-headshots-pdx.webp"
                alt="Professional headshot of person with short brown hair in green polo"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden sm:block">
              <Image
                src="/images/HeroGrid18/valerie-headshot-photographer.webp"
                alt="Professional headshot of woman with short dark hair"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden md:block">
              <Image
                src="/images/HeroGrid18/portland-headshot-studio-andrew.webp"
                alt="Professional headshot of man with glasses and beard"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden md:block">
              <Image
                src="/images/HeroGrid18/maureen-studio-headshot.webp"
                alt="Professional headshot of woman with shoulder-length brown hair in light blue shirt"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>

            {/* Row 3 */}
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/woman-hijab-headshot-studio.webp"
                alt="Professional headshot of woman in hijab and black blazer"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/siddhi-headshot-photographer.webp"
                alt="Professional headshot of woman with reddish-brown hair"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/HeroGrid18/woman-white-top-headshot-portraits.webp"
                alt="Professional headshot of woman in white top"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden sm:block">
              <Image
                src="/images/HeroGrid18/headshot-medical-portland.webp"
                alt="Professional headshot of man with glasses and beard in white shirt and tie"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden md:block">
              <Image
                src="/images/HeroGrid18/tom-fisher-headshot-photographer.webp"
                alt="Professional headshot of man in navy suit"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden hidden md:block">
              <Image
                src="/images/HeroGrid18/male-headshot-portland.webp"
                alt="Professional headshot of man with glasses in plaid jacket"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 md:h-1/2 bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>
        </div>

        {/* Text overlay */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-0 right-0 text-center z-20 px-4 md:px-0">
          <div className="relative">
            <h2
              className="text-[#247ba0] font-bodoniModa text-center mb-0 md:mb-0"
              style={{
                fontSize: "clamp(32px, 12vw, 60px)",
                lineHeight: "1.1",
                fontWeight: "400",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                marginBottom: "-5px",
              }}
            >
              LEAVE IT TO THE PROS
            </h2>
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
  )
}
