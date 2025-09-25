"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const businessTypes = [
  {
    title: "Freelancers",
    description:
      "Tired of chasing payments, tracking expenses and spending hours on records? Our all-in-one tool lets you send invoices, manage spending, and stay in control of your finances effortlessly, right within your daily workflow.",
    link: "use-case/freelancers",
  },
  {
    title: "Solopreneurs",
    description:
      "When you’re the one handling sales, spend, and salaries, it’s easy for things to fall through the cracks. Verzo helps you keep everything organized in one place so you stay focused on running your business, not running after details.",
    link: "use-case/solopreneurs",
  },
  {
    title: "Small businesses",
    description:
      "The more your business grows, the harder it is to track who’s paying, what’s being bought, and where money’s going. Verzo brings clarity to your cashflow and keeps your team moving with tools built for small business demands.",
    link: "use-case/small-businesses",
  },
];

// Array of background images to cycle through
const backgroundImages = [
  "/Container-1.png",
  "/Container-3.png",
  "/Container-2.png",
];

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
      <div className="md:relative pb-24">
        {/* Background Images with Fade Transition */}
        <div className="hidden md:flex relative md:h-[600px] w-full overflow-hidden">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="md:absolute inset-0 transition-opacity duration-1000 ease-in-out"
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
          <div className="md:absolute inset-0 flex items-start z-20">
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
        <div className="md:absolute md:bottom-[50px] md:left-0 md:right-0 md:transform md:translate-y-1/2 z-30">
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
      <div className="md:h-64"></div>
    </section>
  );
}
