"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    title: "Your All-in-One Bookkeeping Solution",
    description:
      "Transform the way you work with tools designed to save time, reduce stress, and deliver results.",
    image: "/heroImage.svg", // Image in public directory
    cta: "Get 30 days free",
  },
  {
    title: "Smart Invoicing Made Simple",
    description:
      "Create and send professional invoices in seconds. Get paid faster with automated reminders and tracking.",
    image: "/heroImage.svg", // Image in public directory
    cta: "Get 30 days free",
  },
  {
    title: "Expense Tracking That Works",
    description:
      "Capture receipts, categorize expenses, and generate reports automatically. Stay tax-ready all year round.",
    image: "/heroImage.svg", // Image in public directory
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
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50">
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
                <div className="w-full md:w-1/2 flex items-center">
                  <div className="ml-[14%] max-w-[388px] space-y-6 pr-4">
                    <h1 className="text-4xl font-bold tracking-tight ">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-primary-greyBold">{slide.description}</p>
                    <Button
                      size="lg"
                      className=" bg-primary-brandBlue hover:bg-blue-600 text-white px-8 rounded-[10px]"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Image section - positioned to the right edge */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-full bg-primary-brandTint">
                  <div className="absolute inset-0 md:right-0 md:left-auto md:w-[120%]">
                    <Image
                      src={slide.image}
                      alt={`${slide.title}`}
                      fill
                      className="object-contain object-right"
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
