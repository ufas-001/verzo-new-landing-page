import React from "react";
import TermsAndPolicy from "./TermsAndPolicy";

const TermsOfUse = () => {
  return (
    <div className="lg:w-[75%] w-[90%] max-w-[1220px] mx-auto pt-[50px] lg:pt-[100px]">
      <div className="flex flex-col md:flex-row gap-y-[40px] md:gap-x-[70px] justify-between">
        <div className="min-w-[160px]">
          <h6 className="text-primary-black text-lg md:text-xl tracking-[-0.3px]">
            On this page
          </h6>
          <div className="pt-[18px] md:pt-6 tracking-[-0.3px] text-base md:text-lg">
            <button
              className="
                                pb-3
                                block
                                cursor-pointer
                               text-primary-brandBlue"
            >
              Privacy
            </button>
          </div>
        </div>
        <div className="max-w-[822px]">
          <TermsAndPolicy />
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
