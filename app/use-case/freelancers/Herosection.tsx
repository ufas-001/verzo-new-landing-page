import { Button } from "@/components/ui/button";
const Herosection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-20">
      <div className="relative min-h-[400px] sm:min-h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="flex space-x-2 items-center justify-center mb-12">
            <svg
              width="33"
              height="24"
              viewBox="0 0 33 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.06 4.00078C11.06 3.15209 10.7229 2.33816 10.1227 1.73804C9.52262 1.13792 8.70869 0.800781 7.86 0.800781C7.01131 0.800781 6.19737 1.13792 5.59726 1.73804C4.99714 2.33816 4.66 3.15209 4.66 4.00078C4.66 4.84947 4.99714 5.66341 5.59726 6.26352C6.19737 6.86364 7.01131 7.20078 7.86 7.20078C8.70869 7.20078 9.52262 6.86364 10.1227 6.26352C10.7229 5.66341 11.06 4.84947 11.06 4.00078ZM2.1 12.0008C2.1 12.8858 2.815 13.6008 3.7 13.6008H7.98C8.485 11.6308 9.91 10.0258 11.77 9.27078C11.285 8.97078 10.71 8.80078 10.1 8.80078H5.3C3.535 8.80078 2.1 10.2358 2.1 12.0008ZM25.18 13.6008H29.3C30.185 13.6008 30.9 12.8858 30.9 12.0008C30.9 10.2358 29.465 8.80078 27.7 8.80078H22.9C22.315 8.80078 21.765 8.95578 21.295 9.23078C23.2 9.97078 24.665 11.5958 25.18 13.6008ZM20.06 10.5208C19.715 10.4408 19.35 10.4008 18.98 10.4008H14.18C13.755 10.4008 13.345 10.4558 12.955 10.5558C11.415 10.9608 10.175 12.1108 9.65 13.6008C9.475 14.1008 9.375 14.6408 9.375 15.2008C9.375 16.0858 10.09 16.8008 10.975 16.8008H22.175C23.06 16.8008 23.775 16.0858 23.775 15.2008C23.775 14.6408 23.68 14.1008 23.5 13.6008C22.96 12.0658 21.66 10.8908 20.055 10.5208H20.06ZM28.66 4.00078C28.66 3.15209 28.3229 2.33816 27.7227 1.73804C27.1226 1.13792 26.3087 0.800781 25.46 0.800781C24.6113 0.800781 23.7974 1.13792 23.1973 1.73804C22.5971 2.33816 22.26 3.15209 22.26 4.00078C22.26 4.84947 22.5971 5.66341 23.1973 6.26352C23.7974 6.86364 24.6113 7.20078 25.46 7.20078C26.3087 7.20078 27.1226 6.86364 27.7227 6.26352C28.3229 5.66341 28.66 4.84947 28.66 4.00078ZM16.58 8.80078C17.6409 8.80078 18.6583 8.37935 19.4084 7.62921C20.1586 6.87906 20.58 5.86165 20.58 4.80078C20.58 3.73992 20.1586 2.7225 19.4084 1.97235C18.6583 1.22221 17.6409 0.800781 16.58 0.800781C15.5191 0.800781 14.5017 1.22221 13.7516 1.97235C13.0014 2.7225 12.58 3.73992 12.58 4.80078C12.58 5.86165 13.0014 6.87906 13.7516 7.62921C14.5017 8.37935 15.5191 8.80078 16.58 8.80078ZM2.1 20.0008C1.215 20.0008 0.5 20.7158 0.5 21.6008C0.5 22.4858 1.215 23.2008 2.1 23.2008H30.9C31.785 23.2008 32.5 22.4858 32.5 21.6008C32.5 20.7158 31.785 20.0008 30.9 20.0008H2.1Z"
                fill="url(#paint0_linear_15294_20185)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_15294_20185"
                  x1="0.5"
                  y1="1.17953"
                  x2="35.1697"
                  y2="17.0406"
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

            <p className="text-xl text-primary-brandBlue">Freelancers</p>
          </div>
          <h1 className="text-2xl max-w-3xl mx-auto sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
            No More Chasing Payments: How Daniel Streamlined His Freelance
            Finances with Verzo
          </h1>
          <p className="text-[22px] text-primary-greyBold pt-6 max-w-5xl mx-auto">
            Managing Invoices and online payments with clarity using Verzo
          </p>
          <div className="flex items-center justify-center space-x-4 pt-8">
            <Button
              size="lg"
              className="bg-primary-brandBlue hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-5 rounded-[10px]  sm:w-auto"
            >
              Get 30 days free
            </Button>
            <div className="border rounded-[10px] h-[40px] w-[50px] flex justify-center items-center border-primary-brandBlue">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.79414 15.2063C8.18477 15.5969 8.81914 15.5969 9.20977 15.2063L14.2098 10.2063C14.6004 9.81563 14.6004 9.18125 14.2098 8.79062C13.8191 8.4 13.1848 8.4 12.7941 8.79062L9.50039 12.0875V2.5C9.50039 1.94687 9.05352 1.5 8.50039 1.5C7.94727 1.5 7.50039 1.94687 7.50039 2.5V12.0844L4.20664 8.79375C3.81602 8.40312 3.18164 8.40312 2.79102 8.79375C2.40039 9.18437 2.40039 9.81875 2.79102 10.2094L7.79102 15.2094L7.79414 15.2063Z"
                  fill="#027DFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
