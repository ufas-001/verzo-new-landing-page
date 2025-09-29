import { Button } from "@/components/ui/button";
const Herosection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-20">
      <div className="relative min-h-[400px] sm:min-h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="flex space-x-2 items-center justify-center mb-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8 2.39844C0.80625 2.39844 0 3.20469 0 4.19844V19.7984C0 20.7922 0.80625 21.5984 1.8 21.5984H5.4V18.5984C5.4 17.6047 6.20625 16.7984 7.2 16.7984C8.19375 16.7984 9 17.6047 9 18.5984V21.5984H12.3713C12.135 21.2159 12 20.7659 12 20.2822C12 18.5234 12.9675 16.9897 14.4 16.1872V12.5909V4.19844C14.4 3.20469 13.5938 2.39844 12.6 2.39844H1.8ZM2.4 11.3984C2.4 11.0684 2.67 10.7984 3 10.7984H4.2C4.53 10.7984 4.8 11.0684 4.8 11.3984V12.5984C4.8 12.9284 4.53 13.1984 4.2 13.1984H3C2.67 13.1984 2.4 12.9284 2.4 12.5984V11.3984ZM6.6 10.7984H7.8C8.13 10.7984 8.4 11.0684 8.4 11.3984V12.5984C8.4 12.9284 8.13 13.1984 7.8 13.1984H6.6C6.27 13.1984 6 12.9284 6 12.5984V11.3984C6 11.0684 6.27 10.7984 6.6 10.7984ZM9.6 11.3984C9.6 11.0684 9.87 10.7984 10.2 10.7984H11.4C11.73 10.7984 12 11.0684 12 11.3984V12.5984C12 12.9284 11.73 13.1984 11.4 13.1984H10.2C9.87 13.1984 9.6 12.9284 9.6 12.5984V11.3984ZM3 5.99844H4.2C4.53 5.99844 4.8 6.26844 4.8 6.59844V7.79844C4.8 8.12844 4.53 8.39844 4.2 8.39844H3C2.67 8.39844 2.4 8.12844 2.4 7.79844V6.59844C2.4 6.26844 2.67 5.99844 3 5.99844ZM6 6.59844C6 6.26844 6.27 5.99844 6.6 5.99844H7.8C8.13 5.99844 8.4 6.26844 8.4 6.59844V7.79844C8.4 8.12844 8.13 8.39844 7.8 8.39844H6.6C6.27 8.39844 6 8.12844 6 7.79844V6.59844ZM10.2 5.99844H11.4C11.73 5.99844 12 6.26844 12 6.59844V7.79844C12 8.12844 11.73 8.39844 11.4 8.39844H10.2C9.87 8.39844 9.6 8.12844 9.6 7.79844V6.59844C9.6 6.26844 9.87 5.99844 10.2 5.99844ZM21.6 12.5984C21.6 11.8028 21.2839 11.0397 20.7213 10.4771C20.1587 9.91451 19.3957 9.59844 18.6 9.59844C17.8044 9.59844 17.0413 9.91451 16.4787 10.4771C15.9161 11.0397 15.6 11.8028 15.6 12.5984C15.6 13.3941 15.9161 14.1571 16.4787 14.7198C17.0413 15.2824 17.8044 15.5984 18.6 15.5984C19.3957 15.5984 20.1587 15.2824 20.7213 14.7198C21.2839 14.1571 21.6 13.3941 21.6 12.5984ZM13.2 20.2897C13.2 21.0134 13.785 21.5984 14.5087 21.5984H22.6912C23.415 21.5984 24 21.0134 24 20.2897C24 18.3622 22.4363 16.7984 20.5088 16.7984H16.6913C14.7638 16.7984 13.2 18.3622 13.2 20.2897Z"
                fill="url(#paint0_linear_15301_21075)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_15301_21075"
                  x1="-5.68719e-08"
                  y1="2.72308"
                  x2="27.1016"
                  y2="13.572"
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

            <p className="text-xl text-primary-brandBlue">Small Businesses</p>
          </div>
          <h1 className="text-2xl max-w-3xl mx-auto sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px] ">
            Scaling Smoothly: How Aisha’s Catering Business Gained Financial
            Clarity with Verzo
          </h1>
          <p className="text-[22px] text-primary-greyBold pt-6 max-w-5xl mx-auto">
            Managing expenses and pay salaries with ease using Verzo
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
