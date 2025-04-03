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
    // Set up the rotation of highlighted features every 10 seconds
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Get paid faster
          </h2>
          <p className="text-xl text-gray-700">
            The most complete suite for business owners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
          {/* Card Image */}
          <div className="p-8 flex justify-center items-center">
            <div className="relative w-[407px] h-[464px] rounded-[15px] overflow-hidden">
              <Image
                src="/Verz-card-blue.png"
                alt="Verzo Virtual Card"
                fill
                className="object-fit"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-500 ${
                  index === highlightedIndex
                    ? "bg-primary-deepBlue text-white transform scale-105"
                    : "bg-white text-primary-greyLight"
                }`}
              >
                <h3 className="text-2xl font-normal mb-3">{feature.title}</h3>
                <p
                  className={
                    ` text-[18px] ${index === highlightedIndex}
                      ? "text-white/90"
                      : "text-primary-greyLight"
                  `}
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
