"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-blue-200"];
const intervalDuration = 3000; // 3 seconds

const Operationsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content2 = [
    {
      number: 1,
      header: "Invoicing Simplified",
      description:
        "Create professional invoices, accept online payments, and track payment status effortlessly",
      icon1: "icon1-url", // Replace with the URL or source for your icon
      icon2: "icon2-url", // Replace with the URL or source for your icon
      icon3: "icon3-url", // Replace with the URL or source for your icon
      image: "https://verzo.fra1.cdn.digitaloceanspaces.com/Originalcopy.png", // Replace with actual image URL for invoicing
    },
    {
      number: 2,
      header: "Expense tracking made easy",
      description:
        "Effortlessly manage your expenses and gain a clear view of your financial health",
      icon1: "icon1-url", // Replace with the URL or source for your icon
      icon2: "icon2-url", // Replace with the URL or source for your icon
      icon3: "icon3-url", // Replace with the URL or source for your icon
      image: "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png", // Replace with actual image URL for expense tracking
    },
    {
      number: 3,
      header: "Efficient purchasing management",
      description:
        "Centralize supplier information and streamline your procurement process",
      icon1: "icon1-url", // Replace with the URL or source for your icon
      icon2: "icon2-url", // Replace with the URL or source for your icon
      icon3: "icon3-url", // Replace with the URL or source for your icon
      image: "https://verzo.fra1.cdn.digitaloceanspaces.com/Originalcopy.png", // Replace with actual image URL for purchasing
    },
    {
      number: 4,
      header: "Customer and vendor management",
      description:
        "Create and organize profiles swiftly for personalized and efficient engagement",
      icon1: "icon1-url", // Replace with the URL or source for your icon
      icon2: "icon2-url", // Replace with the URL or source for your icon
      icon3: "icon3-url", // Replace with the URL or source for your icon
      image: "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png", // Replace with actual image URL for customer/vendor management
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full bg-primary-background pt-[80px] md:pb-[50px] pb-[20px]">
      <div className="flex flex-col lg:gap-y-[30px] items-center max-w-7xl mx-auto">
        <div className="md:leading-[59px] md:text-4xl text-3xl leading-10 text-center font-bold tracking-tight text-primary-black lg:max-w-full max-w-[750px] min-w-[300px]">
          Streamline your business with our tools
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col lg:flex-row lg:gap-x-14">
            <div className="w-full lg:w-1/2 py-4 flex items-center justify-center lg:block">
              <div className="flex flex-col lg:max-w-full md:max-w-[750px] max-w-[500px]">
                {content2.map((item, index) => (
                  <div
                    key={index}
                    className={`w-full p-1 md:p-4 text-sm font-normal ${
                      currentIndex === index
                        ? "text-primary-greytext transition duration-500 ease-in-out"
                        : "text-[#C4C4C4]"
                    }`}
                    onClick={() => setCurrentIndex(index)} // Added click handler to allow manual selection
                  >
                    <div className="relative">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[-5px] left-[-14px] w-[38px] h-[38px]"
                      >
                        <g id="Group 48">
                          <circle
                            id="Ellipse 8"
                            cx="18"
                            cy="18"
                            r="18"
                            fill={
                              currentIndex === index ? "#EDF6FF" : "#F8F8F8"
                            }
                          />
                          <circle
                            id="Ellipse 10"
                            opacity="0.6"
                            cx="18"
                            cy="18"
                            r="12"
                            fill={
                              currentIndex === index ? "#1E35CF" : "#D9D9D9"
                            }
                          />
                        </g>
                      </svg>
                      <svg
                        width="1"
                        height="111"
                        viewBox="0 0 1 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[32px] left-[4px] "
                      >
                        <rect
                          x="0.25"
                          y="0.25"
                          width="0.5"
                          height={item.number === 4 ? "0px" : "140.5px"}
                          stroke={
                            currentIndex === index ? "#027DFF" : "#C4C4C4"
                          }
                          strokeWidth="0.5"
                          strokeDasharray="3 3"
                        />
                      </svg>
                      <h2
                        className={`mb-4 font-normal md:text-xl text-base flex md:items-center gap-x-[34px] transition duration-100 ease-in-out ${
                          currentIndex === index
                            ? "text-primary-blue"
                            : "text-[#C4C4C4]"
                        }`}
                      >
                        <span
                          className={`z-10 text-base ${
                            currentIndex === index
                              ? "text-white"
                              : "text-[#C4C4C4]"
                          } ${
                            item.number === 1
                              ? "ml-[1.5px]"
                              : item.number === 4
                              ? "ml-[-1px]"
                              : ""
                          }`}
                        >
                          {item.number}
                        </span>
                        {item.header}
                      </h2>
                    </div>
                    <h2 className="mb-4 pl-[44px] text-start text-[16px] leading-7 font-light transition duration-100 ease-in-out max-w-[800px] lg:max-w-[446px] xl:max-w-[600px]">
                      {item.description}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative flex items-center">
              <div className="relative lg:ml-auto w-full mx-auto">
                {/* Desktop image */}
                <div className="hidden items-center justify-center lg:block">
                  <Image
                    className="object-fill mt-[-30px] md:mt-0"
                    alt={content2[currentIndex].header}
                    width={900}
                    height={500}
                    src={content2[currentIndex].image}
                  />
                </div>
                {/* Mobile image */}
                <div className="max-h-[300px] mt-6 flex items-center justify-center md:hidden">
                  <Image
                    className="object-fill mt-[-30px] md:mt-0"
                    alt={content2[currentIndex].header}
                    width={350}
                    height={300}
                    src={content2[currentIndex].image}
                  />
                </div>
                {/* Tablet image */}
                <div className="max-h-[300px] mt-6 items-center justify-center hidden md:flex lg:hidden">
                  <Image
                    className="object-fill mt-[-30px] md:mt-0"
                    alt={content2[currentIndex].header}
                    width={500}
                    height={400}
                    src={content2[currentIndex].image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operationsection;
