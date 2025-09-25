import { Button } from "@/components/ui/button";
// import Image from "next/image";
import InvoiceHero from "@/public/invoiceHero"; // Importing the invoice hero image

// const src = "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png";
const slides = [
  {
    header: "Invoice",
    title: "From Invoice to Income.",
    description:
      "Create clean, professional invoices that instantly reflect in your sales once payment is recorded.",
    image: InvoiceHero, // Image in public directory
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
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7.79922 7.8H16.1992M7.79922 12.6H16.1992M5.75922 3H18.2392C19.1008 3 19.7992 3.80589 19.7992 4.8V21L17.1992 19.2L14.5992 21L11.9992 19.2L9.39922 21L6.79922 19.2L4.19922 21V4.8C4.19922 3.80589 4.89765 3 5.75922 3Z"
                            stroke="url(#paint0_linear_6891_5577)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_6891_5577"
                              x1="4.19922"
                              y1="3.30435"
                              x2="23.1763"
                              y2="8.57133"
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
}

export default HeroSection;
