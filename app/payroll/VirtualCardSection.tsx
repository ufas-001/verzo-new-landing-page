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
            Manual payroll can lead to late pay, mistakes, and unhappy
            employees. When salaries aren’t sent on time or have errors, it
            becomes hard for staff to trust the process, and team morale starts
            to drop. Verzo automates payroll so payments are accurate, on time,
            and effortless helping your business build trust and keep teams
            motivated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VirtualCardSection;
