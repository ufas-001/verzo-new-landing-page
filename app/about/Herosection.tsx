"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const sections = [
  {
    content: "Transforming Financial Management with Innovation.",
  },
];

const Herosection = () => {
  return (
    <div className="relative overflow-hidden  pt-16 md:pt-20 min-h-[400px] sm:min-h-[500px] md:h-[600px] flex items-center justify-center">
      {sections.map((section, index) => (
        <div
          key={index}
          className="mx-auto lg:w-[85%] w-[90%] max-w-[1220px] gap-x-[70px] flex flex-col items-center lg:items-start justify-between lg:flex-row lg:gap-x-8  transition-opacity duration-700"
        >
          <div className="md:max-w-[700px] md:min-w-[400px] lg:max-w-[600px] lg:mx-0 lg:flex-auto">
            <h1 className=" md:max-w-[700px] lg:max-w-[600px] height-normal text-3xl md:text-5xl font-medium tracking-[0.3px] text-primary-black">
              {section.content}
            </h1>
            <div className="hidden mt-[36px] lg:flex items-center">
              <Link
                href="https://beta.verzo.app/auth/signup"
                target="_blank"
                className="bg-primary-brandBlue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-[10px]  sm:w-auto"
              >
                Get 30 days free
              </Link>
            </div>
          </div>
          <div className=" md:max-w-[700px] mt-[22px] lg:max-w-[600px] lg:mt-0 lg:flex-grow relative">
            <div className="text-[16px] md:text-[22px] text-primary-greyBold  lg:pt-3 md:leading-[36px] leading-7 text-left">
              At Verzo, we understand the unique challenges faced by business
              owners because we are entrepreneurs ourselves. We founded this
              company with a mission: to empower businesses like yours with the
              tools and support needed to thrive in today’s competitive
              landscape.
            </div>
            <div className="lg:hidden mt-[24px] flex items-center">
              <Button
                size="lg"
                className="bg-primary-brandBlue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-5 rounded-[10px]  sm:w-auto"
              >
                Get 30 days free
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Herosection;
