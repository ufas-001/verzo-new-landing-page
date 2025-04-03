import { Button } from "@/components/ui/button";
import Image from "next/image";

const src = "https://verzo.fra1.cdn.digitaloceanspaces.com/Hero.png";
const slides = [
  {
    header: "Invoice",
    title: "Create Stunning Invoices in Seconds",
    description:
      "Say goodbye to manual invoicing! With Verzo, crafting professional invoices is a breeze.",
    image: src, // Image in public directory
    cta: "Get 30 days free",
  },
];

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50 pt-[80px]">
      <div className="max-w-full mx-auto">
        <div className="relative h-[600px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                 opacity-100`}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Content section with consistent spacing */}
                <div className="w-full md:w-1/2 flex mt-[70px]">
                  <div className="ml-[14%] lg:max-w-[500px] md:max-w-[800px] md:min-w-[400px] space-y-6 pr-4">
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

                    <h1 className="md:leading-[59px] leading-9 md:text-5xl text-3xl font-medium tracking-tight text-primary-black ">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-[22px] lg:max-w-[500px] md:max-w-[750px] max-w-[500px] font-normal md:leading-8 leading-6 text-primary-greyBold">
                      {slide.description}
                    </p>

                    <Button
                      size="lg"
                      className=" bg-primary-brandBlue hover:bg-blue-600 text-white px-8 py-5 rounded-[10px]"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                {/* Image section - positioned to the right edge */}
                <div className="lg:max-w-[580px] max-w-[600px] min-w-[300px] md:min-w-[550px] lg:min-w-[450px] lg:mt-0 lg:flex-grow relative ">
                  {/* <div className="absolute inset-0 md:right-0 md:left-auto md:w-[120%]">
                    <Image
                      src={slide.image}
                      alt={`${slide.title}`}
                      fill
                      className="object-contain object-right"
                      priority={index === 0}
                    />
                  </div> */}

                  <div className="mt-6 lg:max-w-[580px] max-w-[600px] min-w-[300px] md:min-w-[600px] lg:min-w-[450px] lg:mt-0 lg:flex-grow relative">
                    <div className=" z-20 relative max-w-[500px] md:max-w-none">
                      <Image
                        className=" mt-[30px]"
                        alt="Hero"
                        width={1000}
                        height={1000}
                        src={slide.image}
                      />
                    </div>
                    {/* <div className="absolute hidden md:flex top-[80px] md:top-[140px] md:left-[280px] left-[150px] md:w-[480px] md:h-[480px] w-[200px] h-[200px] rounded-full purplegradient z-[10] overflow-y-hidden"></div> */}
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