import { Button } from "@/components/ui/button";
const Herosection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-20">
      <div className="relative min-h-[400px] sm:min-h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="flex space-x-2 items-center justify-center mb-12">
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 12C13.8141 12 16.5 9.31406 16.5 6C16.5 2.68594 13.8141 0 10.5 0C7.18594 0 4.5 2.68594 4.5 6C4.5 9.31406 7.18594 12 10.5 12ZM14.9906 13.5281L12.75 22.5L11.25 16.125L12.75 13.5H8.25L9.75 16.125L8.25 22.5L6.00937 13.5281C2.66719 13.6875 0 16.4203 0 19.8V21.75C0 22.9922 1.00781 24 2.25 24H18.75C19.9922 24 21 22.9922 21 21.75V19.8C21 16.4203 18.3328 13.6875 14.9906 13.5281Z"
                fill="url(#paint0_linear_14806_21280)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_14806_21280"
                  x1="-4.97629e-08"
                  y1="0.4058"
                  x2="25.5108"
                  y2="7.55428"
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
            <p className="text-xl text-primary-brandBlue">Solopreneurs</p>
          </div>
          <h1 className="text-2xl max-w-3xl mx-auto sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
            How a One-Person Business Stays in Control of Cash Flow
          </h1>
          <p className="text-[22px] text-primary-greyBold pt-6 max-w-5xl mx-auto">
            Managing expenses and payments with clarity using Verzo
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
