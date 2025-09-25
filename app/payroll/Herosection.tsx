import { Button } from "@/components/ui/button";
// import Image from "next/image";
import PayrollHero from "@/public/payrollHero"; // Importing the payroll hero image

const slides = [
  {
    header: "Payroll",
    title: "Pay Your Team Without Stress",
    description:
      "Automate pay schedules, keep staff information tidy, and run payroll with confidence as your business scales.",
    image: PayrollHero, // Image in public directory
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
                          width="25"
                          height="15"
                          viewBox="0 0 25 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.42871"
                            y="1.20996"
                            width="19.4238"
                            height="10.2832"
                            rx="1.71387"
                            stroke="url(#paint0_linear_14626_47044)"
                            strokeWidth="1.14258"
                          />
                          <rect
                            x="4.85645"
                            y="3.49512"
                            width="19.4238"
                            height="10.2832"
                            rx="1.71387"
                            fill="white"
                          />
                          <rect
                            x="4.85645"
                            y="3.49512"
                            width="19.4238"
                            height="10.2832"
                            rx="1.71387"
                            stroke="url(#paint1_linear_14626_47044)"
                            strokeWidth="1.14258"
                          />
                          <circle
                            cx="1.71387"
                            cy="1.71387"
                            r="1.71387"
                            transform="matrix(-1 0 0 1 16.8535 7.49609)"
                            fill="url(#paint2_linear_14626_47044)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_14626_47044"
                              x1="2"
                              y1="1.9358"
                              x2="18.9844"
                              y2="12.8141"
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
                            <linearGradient
                              id="paint1_linear_14626_47044"
                              x1="5.42773"
                              y1="4.22096"
                              x2="22.4122"
                              y2="15.0993"
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
                            <linearGradient
                              id="paint2_linear_14626_47044"
                              x1="-8.12258e-09"
                              y1="0.0579573"
                              x2="4.07324"
                              y2="1.36239"
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
