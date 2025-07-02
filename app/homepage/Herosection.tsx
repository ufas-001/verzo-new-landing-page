"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const src = "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png";

const slides = [
  {
    title: "Invoicing Simplified",
    description:
      "Create professional invoices, accept online payments, and track payments effortlessly.",
    image: src,
    cta: "Get 30 days free",
  },
  {
    title: "Expense Tracking Made Easy",
    description:
      "Effortlessly manage your expenses and gain a clear view of your financial health.",
    image: src,
    cta: "Get 30 days free",
  },
  {
    title: "Efficient Purchase Management",
    description:
      "Centralize supplier information and streamline your procurement process.",
    image: src,
    cta: "Get 30 days free",
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
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[500px] sm:min-h-[600px] md:h-[700px]">
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
                <div className="w-full md:w-1/2 flex justify-start">
                  <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-4 md:space-y-6 text-left px-4 md:px-0">
                    <div className="space-y-3 md:space-y-4">
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
                <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <Image
                      className="w-full h-auto"
                      alt={`${slide.title} illustration`}
                      width={600}
                      height={600}
                      src={slide.image || "/placeholder.svg"}
                      priority={index === 0}
                    />
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
