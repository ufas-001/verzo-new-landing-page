import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  return (
    <div className="max-w-7xl mx-auto  py-[80px]">
      <div className="flex flex-col md:flex-row justify-between gap-y-6 md:gap-x-10">
        <div className=" flex items-center md:items-start flex-col gap-y-4 pt-[30px] lg:min-w-[250px]">
          <h1 className="font-medium text-3xl md:text-3xl height-normal leading-10 lg:max-w-[347px]">
            Frequently asked questions
          </h1>
          <p className="text-lg font-light">
            Questions? We`&apos;`ve got answers
          </p>
        </div>
        <div className="w-full md:mx-0 md:w-1/2 lg:min-w-[350px]">
          <Accordion type="single" defaultValue="item-1" className="w-full">
            <AccordionItem className=" border-b" value="item-1">
              <AccordionTrigger className=" flex justify-between gap-x-3 data-[state=closed]:text-primary-greytext data-[state=closed]:font-light items-center font-normal hover:underline py-[16px] text-lg md:text-[22px] text-primary-black">
                <p className="text-start text-xl">
                  What payment methods do you accept?
                </p>
                <ChevronDown className=" w-5 h-5 text-primary-greyBold" />
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-primary-greyBold font-light pb-[10px] pr-[45px]">
                Verzo operates on a subscription-based pricing model. Users can
                choose from different plans based on the features and
                capabilities that best suit their business needs. Our pricing is
                designed to be flexible, allowing you to scale as your business
                grows
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" border-b" value="item-2">
              <AccordionTrigger className=" flex justify-between data-[state=closed]:text-primary-greytext data-[state=closed]:font-light items-center font-normal hover:underline py-[16px] text-lg md:text-[22px] text-primary-black">
                <p className="text-start text-xl">
                  Is there a free trial available?
                </p>
                <ChevronDown className=" w-5 h-5 text-primary-greyBold" />
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-primary-greyBold font-light pb-[10px] pr-[45px]">
                Yes, Verzo offers a free trial period for users to explore the
                platform and its features before committing to a subscription.
                The free trial allows you to experience firsthand how Verzo can
                streamline your financial management processes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" border-b" value="item-3">
              <AccordionTrigger className=" flex justify-between items-center data-[state=closed]:text-primary-greytext data-[state=closed]:font-light font-normal hover:underline py-[16px] text-lg md:text-[22px] text-primary-black">
                <p className="text-start text-xl">
                  Is there a discount for annual billing?
                </p>
                <ChevronDown className=" w-5 h-5 text-primary-greyBold" />
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-primary-greyBold font-light pb-[10px] pr-[45px]">
                Yes. Many businesses opt for annual subscriptions, and Verzo
                often provides a discount for choosing this billing cycle. This
                can be a cost-effective option for those planning to commit to
                Verzo for the long term.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
