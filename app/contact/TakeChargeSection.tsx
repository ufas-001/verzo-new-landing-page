import React from "react";

const Takechargesection = () => {
  return (
    <div className=" py-[120px]">
      <div className=" lg:w-[85%] w-[90%] max-w-[1220px] mx-auto flex justify-center flex-row">
        <div className=" w-full flex flex-row md:rounded-[40px] max-w-[500px] md:max-w-none rounded-xl border-[0.3px] border-opacity-70 border-primary-border lg:h-[420px] h-[300px]">
          <div className=" md:w-1/2 w-full h-full rounded-l-[40px] flex flex-col ">
            <div className=" md:h-[340px] h-[320px] flex flex-col justify-center gap-y-6 lg:pl-[48px] md:px-6 px-3 items-center md:items-start">
              <p className=" md:text-4xl text-2xl md:text-start md:leading-[50px] leading-8 text-center font-medium tracking-[-0.02px] lg:max-w-[400px] text-primary-black">
                Simplify Finances with Verzo
              </p>
              <p className=" text-lg text-primary-greyBold md:text-start text-center max-w-[400px] leading-6">
                Verzo’s user-friendly tools are designed to save you time and
                ensure accuracy
              </p>
            </div>
            <div className=" border-t-[0.3px] border-primary-border border-opacity-70 flex items-center justify-center lg:justify-start md:h-[106px] h-[120px]">
              <div className=" flex flex-row lg:pl-[48px] lg:gap-x-[36px] md:gap-x-3 gap-x-2 lg:justify-center mt-[-4px]">
                <a
                  href="#"
                  className="rounded-[10px] bg-primary-brandBlue md:px-6 px-3 py-3 text-base text-white  "
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="rounded-[10px] border border-primary-border flex flex-row gap-x-[6px] bg-white md:px-6 px-3 py-3 text-base text-primary-black"
                >
                  Speak to sales
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="message-chat-01">
                        <path
                          id="Vector"
                          d="M4.53275 10.9332C4.53275 6.22041 8.35325 2.3999 13.0661 2.3999C17.7789 2.3999 21.5994 6.22041 21.5994 10.9332C21.5994 12.1599 21.3406 13.3262 20.8745 14.3803L21.601 19.4658L17.2429 18.3762C16.0083 19.0705 14.5834 19.4666 13.0661 19.4666M2.40042 16.2666C2.40042 17.0332 2.56218 17.7621 2.85343 18.421L2.39941 21.5994L5.123 20.9184C5.89457 21.3524 6.78501 21.5999 7.73325 21.5999C10.6785 21.5999 13.0661 19.2121 13.0661 16.2666C13.0661 13.321 10.6785 10.9332 7.73325 10.9332C4.78801 10.9332 2.40042 13.321 2.40042 16.2666Z"
                          stroke="#121212"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-full md:block hidden rounded-r-[40px] lg:block bg-primary-darkBlue"></div>
        </div>
      </div>
    </div>
  );
};

export default Takechargesection;
