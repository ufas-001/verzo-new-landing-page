"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const businessTypes = [
  {
    title: "Solopreneurs",
    description: "Create and send professional invoices in minutes.",
    image: "/freelancer.svg",
  },
  {
    title: "Small Businesses",
    description: "Create and send professional invoices in minutes.",
    image: "/contractor.svg",
  },

  {
    title: "Freelancers",
    description: "Create and send professional invoices in minutes.",
    image: "/enterprises.svg",
  },
];

// Common card styling component to ensure consistency
const CardStyle = "bg-[#F1E3DF] rounded-[18px] p-8 h-full flex flex-col";

export function BusinessTypesSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add global styles to hide scrollbars
  useEffect(() => {
    // Add a style tag to the document head
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(styleTag);

    // Clean up
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 400; // Width of each card
    const gapWidth = 24; // Gap between cards (6 * 4px = 24px)
    const totalCards = businessTypes.length;

    const interval = setInterval(() => {
      // Increment the current index
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalCards;

        // Scroll to the next card
        scrollContainer.scrollTo({
          left: nextIndex * (cardWidth + gapWidth),
          behavior: "smooth",
        });

        return nextIndex;
      });
    }, 4000); // Change card every 4 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Handle manual scrolling
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 278;
    const gapWidth = 24;
    const scrollPosition = scrollContainer.scrollLeft;

    // Calculate the current index based on scroll position
    const newIndex = Math.round(scrollPosition / (cardWidth + gapWidth));
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="w-full overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          {/* Static first card */}
          <div className="min-w-[278px] max-w-[278px] h-[400px] shrink-0 mr-6">
            <div className={`${CardStyle} justify-center`}>
              <h3 className="text-2xl font-bold mb-8">
                Perfect for any businesses
              </h3>
              <div className="">
                <Button
                  variant="ghost"
                  className="w-fit p-0 hover:bg-transparent hover:translate-x-2 transition-transform"
                >
                  Get started
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scrollable container that extends to the right edge */}
          <div className="overflow-visible">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar"
              style={{
                width: `calc(100vw - ${278 + 24 + 32}px)`, // Viewport width minus (first card width + gap + left padding)
              }}
              onScroll={handleScroll}
            >
              {businessTypes.map((business, index) => (
                <div
                  key={index}
                  className="min-w-[278px] max-w-[278px] h-[400px] shrink-0"
                >
                  <div className={CardStyle}>
                    <h3 className="text-2xl font-bold">
                      {business.title}
                    </h3>
                    <div className="relative h-[300px] ">
                      <Image
                        src={business.image || "/placeholder.svg"}
                        alt={`${business.title} illustration`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-lg">{business.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
