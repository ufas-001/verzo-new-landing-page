"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const features = [
  {
    title: "Virtual card",
    description:
      "Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors",
  },
  {
    title: "Works for international payments",
    description:
      "Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors",
  },
  {
    title: "No fees",
    description:
      "Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors",
  },
];

const VirtualCardSection = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    // Set up the rotation of highlighted features every 2 seconds
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4 leading-tight">
            Get paid faster
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            The most complete suite for business owners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Card Image */}
          <div className="order-2 lg:order-1 p-4 md:p-8 flex justify-center items-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[407/464] rounded-[15px] overflow-hidden shadow-lg">
              <Image
                src="/Verz-card-blue.png"
                alt="Verzo Virtual Card"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-500 ${
                  index === highlightedIndex
                    ? "bg-primary-deepBlue text-white transform scale-[1.02] md:scale-105 shadow-lg"
                    : "bg-white text-primary-greyLight border border-gray-100"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-normal mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed ${
                    index === highlightedIndex
                      ? "text-white/90"
                      : "text-primary-greyLight"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualCardSection;