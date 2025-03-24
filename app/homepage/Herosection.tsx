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
    image: src, // Image in public directory
    cta: "Get 30 days free",
  },
  {
    title: "Expense Tracking Made Easy",
    description:
      "Effortlessly manage your expenses and gain a clear view of your financial health.",
    image: src, // Image in public directory
    cta: "Get 30 days free",
  },
  {
    title: "Efficient Purchase Management",
    description:
      "Centralize supplier information and streamline your procurement process.",
    image: src, // Image in public directory
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
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 pt-[80px]">
      <div className="max-w-full mx-auto">
        <div className="relative h-[600px] md:h-[700px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Content section with consistent spacing */}
                <div className="w-full md:w-1/2 flex mt-[70px]">
                  <div className="ml-[14%] lg:max-w-[600px] md:max-w-[800px] md:min-w-[400px] space-y-6 pr-4">
                    <h1 className="md:leading-[59px] leading-9 md:text-5xl text-3xl font-medium tracking-tight text-primary-black ">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-[22px] lg:max-w-[500px] md:max-w-[750px] max-w-[500px] font-normal md:leading-8 leading-6 text-primary-greyBold">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className=" bg-primary-brandBlue hover:bg-blue-600 text-white px-8 py-5 rounded-[10px]"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Image section - positioned to the right edge */}
                <div className="lg:max-w-[580px] max-w-[600px] min-w-[300px] md:min-w-[550px] lg:min-w-[450px] lg:mt-0 lg:flex-grow relative ">
                  {/* <div className="absolute inset-0 md:right-0 md:left-auto md:w-[120%]">
                    <Image
                      src={slide.image}
                      alt={`${slide.title}`}
                      fill
                      className="object-contain object-right"
                      priority={index === 0}
                    />
                  </div> */}

                  <div className="mt-6 lg:max-w-[580px] max-w-[600px] min-w-[300px] md:min-w-[600px] lg:min-w-[450px] lg:mt-0 lg:flex-grow relative">
                    <div className=" z-20 relative max-w-[500px] md:max-w-none">
                      <Image
                        className=" mt-[30px]"
                        alt="Hero"
                        width={1000}
                        height={1000}
                        src={slide.image}
                      />
                    </div>
                    <div className="absolute hidden md:flex top-[80px] md:top-[140px] md:left-[280px] left-[150px] md:w-[480px] md:h-[480px] w-[200px] h-[200px] rounded-full purplegradient z-[10] overflow-y-hidden"></div>
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
