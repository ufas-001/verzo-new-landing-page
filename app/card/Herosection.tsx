import { Button } from "@/components/ui/button";
import CardHero from "@/public/card-hero";
// import Image from "next/image";

// const src = "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png";
const slides = [
  {
    header: "Virtual Card",
    title: "Smart Virtual Cards for Your Business Spending",
    description:
      "Issue cards instantly, control spending, and track every business payment in one place all without the hassle of traditional banking.",
    image: CardHero, // Image in public directory
    cta: "Get 30 days free",
  },
];

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[500px] sm:min-h-[600px] md:h-[700px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${"opacity-100"}`}
            >
              <div className="flex flex-col md:flex-row h-full items-center">
                {/* Content section */}
                <div className="w-full md:w-1/2 flex justify-start">
                  <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-4 md:space-y-6 text-left px-4 md:px-0">
                    <div className="relative flex gap-x-2 items-center md:text-xl text-lg text-primary-brandBlue">
                      <span>
                        <svg
                          width="23"
                          height="17"
                          viewBox="0 0 23 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.49993 5.7936H20.4999M6.09993 9.9936H9.09993M4.30039 1.59375L18.7 1.59375C20.0255 1.59375 21.1 2.66743 21.1 3.99288L21.1003 12.9948C21.1003 14.3202 20.0258 15.3937 18.7003 15.3937L4.30062 15.3936C2.97518 15.3936 1.90069 14.3191 1.90065 12.9937L1.90039 3.99382C1.90035 2.66831 2.97488 1.59375 4.30039 1.59375Z"
                            stroke="url(#paint0_linear_15092_11624)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_15092_11624"
                              x1="1.90039"
                              y1="1.82708"
                              x2="22.8892"
                              y2="11.1787"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="0.307292"
                                stopColor="#027DFF"
                                stopOpacity="0.9"
                              />
                              <stop
                                offset="0.494792"
                                stopColor="#027DFF"
                                stopOpacity="0.9"
                              />
                              <stop offset="0.958333" stopColor="#027DFF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      {slide.header}
                    </div>
                    <div className="space-y-3 md:space-y-4 h-[200px]">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary-black leading-tight md:leading-[59px]">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal leading-6 md:leading-8 text-primary-greyBold max-w-md md:max-w-none mx-auto md:mx-0">
                        {slide.description}
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-primary-brandBlue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-5 rounded-[10px]  sm:w-auto"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Image section */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                  <div className="relative flex justify-end">
                    <slide.image />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
