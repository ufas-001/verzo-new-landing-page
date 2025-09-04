"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Hero1 from "@/public/hero-1";
import Hero2 from "@/public/hero-2";
import Hero3 from "@/public/hero-3";
import Hero4 from "@/public/hero-4";

// const src = "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png";

const slides = [
  {
    title: "Manage Your Finances with Clarity",
    description:
      "Verzo brings everything you need to manage your business finances into one place. No stress, no scattered tools.",
    image: "/hero-1.png",
    cta: "Get 30 days free",
    icon: Hero1,
  },
  {
    title: "Grow Your Sales with Clear Invoicing",
    description:
      "Verzo simplifies invoicing to help your sales thrive. Easily create invoices, send to customers, manage payments, and provide receipts, all in one streamlined system.",
    image: "/hero-2.png",
    cta: "Get 30 days free",
    icon: Hero2,
  },
  {
    title: "Track what you spend to stay in control",
    description:
      "From buying products and supplies to covering everyday costs, record every expense and always know where your money goes.",
    image: "/hero-3.png",
    cta: "Get 30 days free",
    icon: Hero3,
  },
  {
    title: "Where Your Business Finances Come Together",
    description:
      "From incoming revenue to outgoing expenses or staff payments, Verzo ensures your financial records stay clear and manageable.",
    image: "/hero-4.png",
    cta: "Get 30 days free",
    icon: Hero4,
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 pt-16 md:pt-36">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="relative min-h-[500px] sm:min-h-[600px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col md:flex-row h-full items-center">
                {/* Content section */}
                <div className="w-full md:w-1/2 flex justify-start h">
                  <div className="max-w-lg md:max-w-xl lg:max-w-lg space-y-4 md:space-y-6 text-left px-4 md:px-0">
                    <div className="space-y-3 md:space-y-4 h-[250px]">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary-black leading-tight md:leading-[59px]">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-6 md:leading-8 text-primary-greyBold max-w-md md:max-w-none mx-auto md:mx-0">
                        {slide.description}
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-primary-brandBlue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-5 rounded-[10px]  sm:w-auto"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Image section */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <div className="relative w-full  flex justify-end">
                    {/* <Image
                      className="object-fit"
                      alt={`${slide.title} illustration`}
                      width={450}
                      height={700}
                      src={slide.image || "/placeholder.svg"}
                      priority={index === 0}
                    /> */}
                    <slide.icon />
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
}
