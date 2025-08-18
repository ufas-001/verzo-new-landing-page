"use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const features = [
//   {
//     title: "Virtual card",
//     description:
//       "Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors",
//   },
//   {
//     title: "Works for international payments",
//     description:
//       "Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors",
//   },
//   {
//     title: "No fees",
//     description:
//       "Say goodbye to the headache of tax season. Our software helps you maintain accurate financial records, ensuring compliance with tax regulations, and reducing the risk of costly errors",
//   },
// ];

const VirtualCardSection = () => {
  // const [highlightedIndex, setHighlightedIndex] = useState(0);

  // useEffect(() => {
  //   // Set up the rotation of highlighted features every 2 seconds
  //   const interval = setInterval(() => {
  //     setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
  //   }, 2000);

  //   // Clean up interval on component unmount
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-4 leading-tight">
            Why It Matters
          </h2>
          <p className="text-lg text-primary-lightGray2 text-center">
            When sales happen across different platforms, it’s easy to lose
            track of records, delay invoices, and miss important follow-ups.
            Without everything in one place, it’s hard to see your cash flow
            clearly. Verzo brings your sales, invoices, and payments together so
            you can stay on top of everything without the mess.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualCardSection;