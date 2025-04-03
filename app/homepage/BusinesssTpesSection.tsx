"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const businessTypes = [
  {
    title: "Freelancers",
    description:
      "Keep your books in check, your clients happy, and your work on track.",
    link: "/freelancers",
  },
  {
    title: "Solopreneurs",
    description:
      "Keep your books in check, your clients happy, and your work on track. Invest in accounting software that respects your time so you can spend it on building your business, not crunching numbers.",
    link: "/solopreneurs",
  },
  {
    title: "Small businesses",
    description:
      "Save time (and money!) by using Verzo to collaborate with your team while handling accounting, billing, and payroll.",
    link: "/businesses-with-employees",
  },
];

// Array of background images to cycle through
const backgroundImages = ["/s600.png", "/f600.png", "/sme600.png"];

export function BusinessTypesSection() {
  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white">
      {/* Image Section */}
      <div className="relative pb-24">
        {/* Background Images with Fade Transition */}
        <div className="relative h-[600px] w-full overflow-hidden">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 10 : 0,
              }}
            >
              <Image
                src={image}
                alt={`Background ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-start z-20">
            <div className="container mx-auto px-4 py-12">
              <div className="ml-8 md:ml-16 lg:ml-24 pt-8">
                {/* Uncomment if you want to add titles
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Use Verzo
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-blue-500">
                  your way
                </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Business Types Cards - Positioned to overlap with image */}
        <div className="absolute bottom-[50px] left-0 right-0 transform translate-y-1/2 z-30">
          <div className="container mx-auto px-4">
            <div className="bg-blue-900 rounded-[15px] overflow-hidden max-w-6xl mx-auto shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {businessTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`p-8 flex flex-col h-full ${
                      index < businessTypes.length - 1
                        ? "border-r border-blue-800"
                        : ""
                    }`}
                  >
                    <h3 className="text-xl font-medium text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-white/90 mb-10 flex-grow">
                      {type.description}
                    </p>
                    <Link
                      href={type.link}
                      className="text-white font-medium flex items-center group hover:text-blue-200 transition-colors"
                    >
                      Verzo for {type.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for content below the cards */}
      <div className="h-64"></div>
    </section>
  );
}
