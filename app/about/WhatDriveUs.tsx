import React from "react";
import ExpertiseIcon from '@/public/ExpertiseIcon';
import InnovationIcon from "@/public/InnovationIcon";
import SimplicityIcon from "@/public/SimplicityIcon";
import SupportIcon from "@/public/SupportIcon";

const Whatdrivesus = () => {
  return (
    <div className=" bg-white w-full boxCard">
      <div className="  lg:w-[85%] w-[90%] max-w-[1220px] mx-auto flex flex-col lg:gap-y-[76px] gap-y-[50px] lg:pt-[80px] pt-[50px] lg:pb-[120px] pb-[70px]">
        <div className=" flex flex-col items-center">
          <div className="height-normal text-3xl md:text-5xl font-medium tracking-tight text-primary-black">
            What drives us
          </div>
        </div>
        <div className=" w-full mx-auto">
          <div className="flex flex-col w-full gap-y-[43px] md:gap-y-[72px]">
            <div className=" flex flex-col gap-y-[43px] md:gap-y-0  md:flex-row md:gap-x-[48px]">
              <div className=" w-full md:max-w-[675px] 2xl:max-w-[800px] h-[320px] flex items-start flex-col gap-y-6 rounded-[20px] bg-[#F8F8F8] border-opacity-60 border-[0.2px] px-[36px] border-primary-border py-9">
                <ExpertiseIcon />
                <div className=" flex flex-col gap-y-3">
                  <div className=" font-medium text-[22px] text-primary-black">
                    Expertise
                  </div>
                  <div className=" font-light text-primary-greyBold text-lg tracking-[-0.3px]">
                    Our application streamlines your bookkeeping tasks, freeing
                    you to focus on what matters most - growing your business.
                    Spend less time on paperwork and more time making strategic
                    decisions.
                  </div>
                </div>
              </div>
              <div className="w-full md:max-w-[525px] 2xl:max-w-[700px] h-[320px] flex items-start flex-col  gap-y-6 rounded-[20px] bg-[#F8F8F8] border-[0.2px] border-opacity-60 px-[36px] border-primary-border py-9">
                <InnovationIcon />
                <div className=" flex flex-col gap-y-3">
                  <div className=" font-medium text-[22px] text-primary-black">
                    Innovation
                  </div>
                  <div className=" font-light text-primary-greyBold text-lg tracking-[-0.3px]">
                    With precise expense tracking, you’ll gain a crystal-clear
                    view of your financial health. Identify cost-saving
                    opportunities and ensure your business stays profitable.
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-[43px] md:flex-row md:gap-x-[48px]">
              <div className="w-full md:max-w-[525px] h-[320px] 2xl:max-w-[700px] flex items-start flex-col  gap-y-6 rounded-[20px] bg-[#F8F8F8] border-[0.2px] border-opacity-60 px-[36px] border-primary-border py-9">
                <SimplicityIcon />
                <div className=" flex flex-col gap-y-3">
                  <div className=" font-medium text-[22px] text-primary-black">
                    Simplicity
                  </div>
                  <div className=" font-light text-primary-greyBold text-lg tracking-[-0.3px]">
                    Impress your clients with polished, branded invoices.
                    Present your business as a well-organized, trustworthy
                    entity, leading to increased customer confidence and loyalty
                  </div>
                </div>
              </div>
              <div className="w-full md:max-w-[675px] 2xl:max-w-[800px] h-[320px] flex items-start flex-col  gap-y-6 rounded-[20px] bg-[#F8F8F8] border-opacity-60 border-[0.2px] px-[36px] border-primary-border py-9">
                <SupportIcon />
                <div className=" flex flex-col gap-y-3">
                  <div className=" font-medium text-[22px] text-primary-black">
                    Support
                  </div>
                  <div className=" font-light text-primary-greyBold text-lg tracking-[-0.3px]">
                    Say goodbye to the headache of tax season. Our software
                    helps you maintain accurate financial records, ensuring
                    compliance with tax regulations, and reducing the risk of
                    costly errors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatdrivesus;
